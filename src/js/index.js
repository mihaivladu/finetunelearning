import '../scss/index.scss';

$(document).ready(function () {
    $('a[href^="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    /*$(window).scroll(function () {
        $('.h-scroll').each(function () {
            console.log($(this).offset().top, $(window).scrollTop());
        });
    });*/

    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            // Mouse wheel UP
        } else {
            // Mouse wheel DOWN
        }
    });
});