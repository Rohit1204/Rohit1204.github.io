$(function () {
    var $header = $(".site-header");
    var progress = document.getElementById("scrollProgress");
    var toTop = document.getElementById("toTop");
    var chipBar = document.getElementById("sectionChips");
    var chips = chipBar ? [].slice.call(chipBar.querySelectorAll("a")) : [];
    var hero = document.getElementById("home");

    var isDesktop = window.innerWidth >= 992;
    var maxScroll = 1;
    var heroBottom = 400;
    var ticking = false;

    // Cache each section's offset once, so the scroll handler never measures.
    var sections = chips.map(function (chip) {
        return { chip: chip, el: document.querySelector(chip.getAttribute("href")), top: 0 };
    }).filter(function (s) { return s.el; });

    var activeChip = null;

    function measure() {
        maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
        );
        heroBottom = hero ? hero.offsetHeight - 120 : 400;
        sections.forEach(function (s) {
            s.top = s.el.getBoundingClientRect().top + window.pageYOffset;
        });
    }

    function syncChips(y) {
        if (!sections.length) return;
        var cut = y + 140;
        var current = null;
        for (var i = 0; i < sections.length; i++) {
            if (sections[i].top <= cut) current = sections[i].chip;
        }
        if (current === activeChip) return;

        if (activeChip) activeChip.classList.remove("is-active");
        activeChip = current;
        if (!activeChip) return;

        activeChip.classList.add("is-active");
        var left = activeChip.offsetLeft - (chipBar.clientWidth - activeChip.offsetWidth) / 2;
        chipBar.scrollTo({ left: Math.max(left, 0), behavior: "smooth" });
    }

    function onFrame() {
        ticking = false;
        var y = window.pageYOffset;

        $header.toggleClass("scrolled", isDesktop && y > 32);

        if (progress) {
            progress.style.transform = "scaleX(" + Math.min(y / maxScroll, 1) + ")";
        }
        if (toTop) {
            toTop.classList.toggle("is-visible", y > window.innerHeight);
        }
        if (chipBar) {
            chipBar.classList.toggle("is-visible", y > heroBottom);
            syncChips(y);
        }
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(onFrame);
        }
    }, { passive: true });

    window.addEventListener("resize", function () {
        isDesktop = window.innerWidth >= 992;
        measure();
        onFrame();
    });

    if (toTop) {
        toTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    measure();
    onFrame();
    window.addEventListener("load", measure);

    $("body").scrollspy({ target: ".navbar", offset: 90 });

    $(".site-header .navbar-collapse .nav-link[href^='#']").on("click", function () {
        if (!isDesktop) {
            $("#navbarNav").collapse("hide");
        }
    });

    // Reveal on scroll. The hidden state is applied here rather than in the
    // markup, and only to things below the fold — so nothing can end up stuck
    // invisible if this script never runs.
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if ("IntersectionObserver" in window && !reduceMotion) {
        var targets = [].slice.call(document.querySelectorAll(
            ".experience-details, .projects-box, .achievement-card, " +
            ".skills-category, .about-stat, .info-card, .contact-items"
        ));

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-in");
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });

        targets.forEach(function (el) {
            if (el.getBoundingClientRect().top < window.innerHeight) return;
            el.classList.add("reveal");
            io.observe(el);
        });
    }
});
