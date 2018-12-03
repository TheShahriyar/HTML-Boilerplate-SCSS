(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {

        // if ($(window).width() >= 992) {
        //     $(".navbar-nav").hide();
        //     $(".menu-toggler").click(function(){
        //         $(".navbar-nav").toggle();
        //     });
        // }

        $("body").niceScroll();




        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -75
            }, 1500, 'easeInOutExpo');
            event.preventDefault();

        });


        $('.service-scroll').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });


        $('.testiminial-container').owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            items: 1,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });


        // Load More
        $(function () {
            $(".morebox").slice(0, 3).show();
            if ($(".portbox:hidden").length != 0) {
                $("#loadMore").show();
            }
            $("#loadMore").on('click', function (e) {
                e.preventDefault();
                $(".morebox:hidden").slice(0, 3).slideDown();
                if ($(".morebox:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
                }
            });
        });



    });

})(jQuery);