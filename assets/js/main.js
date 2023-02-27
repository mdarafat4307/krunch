(function ($) {
    "use strict";

    // sticky nav JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.main-nav').addClass('menu-scrol');
        } else {
            $('.main-nav').removeClass('menu-scrol');
        }
    });	

    $('.navbar .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 50);
        e.preventDefault();
    });

    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    // protfolio tabs JS
    $(document).ready(function(){
        $('.item-list').click(function(){ 
            const value = $(this).attr('data-filter');
            if (value == 'all'){ 
                $('.item-box').show('1000'); 
            } 
            else{
                $('.item-box').not('.' +value).hide('1000'); 
                $('.item-box').filter('.' +value).show('1000');
            }
        })
            
        //Ad active class on selected item 
        $('.play').click(function(){ 
            $(this).addClass('active').siblings().removeClass('active')
            
        })
    })
    
    // testimonial slider JS
    $(".testimonial-content").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        nav: false,
    });

    // Back to top button
    var btn = $('#backToTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // AOS JS
    AOS.init();

    // // magnificPopup
    // $(document).ready(function() {
    //     $('.video-link').magnificPopup(
    //         {type:'iframe'
    //         iframe: {
    //             markup: '<div class="mfp-iframe-scaler">'+
    //                       '<div class="mfp-close"></div>'+
    //                       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    //                     '</div>',
              
    //             patterns: {
    //               youtube: {
    //                 index: 'youtube.com/',
              
    //                 id: 'v=', 

    //                 src: 'https://www.youtube.com/embed/%id%?autoplay=1'
    //               },
              
    //             },
        
    //             srcAction: 'iframe_src',
    //           }
        
    //     });
    //   });



})(jQuery);


