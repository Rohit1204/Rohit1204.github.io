// All rights reserved with www.mysirg.com
// Copyright (c) 2017 Mysirg.com
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
    
    // scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 150
    });

  

})