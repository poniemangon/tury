$(document).ready(function () {
    var $header = $('.header-section'); 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });
});


$(document).ready(function () {
    var $burger = $('.fa-bars');
    var $menu = $('.header-section ul');
    var $header = $('.header-section');

    function checkWindowSize() {
        if ($(window).width() > 992) {
            $menu.show(); 
            $header.removeClass('open'); 
        } else {
            $menu.hide(); 
        }
    }

 
    checkWindowSize();


    $burger.on('click', function () {
        if ($(window).width() <= 992) {
            $menu.slideToggle();
            $header.toggleClass('open');
        }
    });

  
    $(window).on('resize', function () {
        checkWindowSize();
    });
});

$('.product-carousel').slick();