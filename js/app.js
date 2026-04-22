// All rights reserved with www.mysirg.com
// Copyright (c) 2017 Mysirg.com
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    var $header = $(".site-header");
    function updateNavScrollState() {
        // Disable the scrolled style on small screens so the navbar
        // background/shadow stays perfectly constant and nothing below it
        // can appear to shift as the user scrolls.
        if ($(window).width() < 992) {
            $header.removeClass("scrolled");
            return;
        }
        if ($(window).scrollTop() > 32) {
            $header.addClass("scrolled");
        } else {
            $header.removeClass("scrolled");
        }
    }
    updateNavScrollState();
    $(window).on("scroll resize", updateNavScrollState);

    // scrollspy — offset tuned for fixed header height
    $("body").scrollspy({
        target: ".navbar",
        offset: 90
    });

    $(".site-header .navbar-collapse .nav-link[href^='#']").on("click", function () {
        if ($(window).width() < 992) {
            $("#navbarNav").collapse("hide");
        }
    });
});