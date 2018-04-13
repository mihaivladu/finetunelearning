import '../scss/index.scss';

$(document).ready(function () {
    $('a[href^="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(window).bind('mousewheel', function (e) {
        const windowScroll = $(this).scrollTop();

        if (e.originalEvent.wheelDelta > 0) {
            // Mouse wheel UP
            $($('.main-section').get().reverse()).each(function () {
                const element = this;
                const elementScrollTop = $(element).offset().top;
                const elementScrollLeft = $(element).scrollLeft();

                if (windowScroll === elementScrollTop) {
                    if ($(element).find('.secondary-section').length) {
                        console.log($($(element).find('.secondary-section').get().reverse()));
                        $($(element).find('.secondary-section').get().reverse()).each(function () {
                            const childScrollLeft = $(this).offset().left;
                            console.log('elementScrollLeft: ' + elementScrollLeft + ' childScrollLeft: ' + childScrollLeft);

                            if ((elementScrollLeft > childScrollLeft)) {
                                $(element).animate({
                                    scrollLeft: elementScrollLeft - 1024
                                }, 500);

                                return false;
                            }
                        });

                        return false;
                    }
                } else if (windowScroll > elementScrollTop) {
                    $('html, body').animate({
                        scrollTop: elementScrollTop
                    }, 500);

                    return false;
                }
            });
        } else {
            // Mouse wheel DOWN
            $('.main-section').each(function () {
                const element = this;
                const elementScrollTop = $(element).offset().top;
                const elementScrollLeft = $(element).scrollLeft();

                if (windowScroll === elementScrollTop) {
                    if ($(element).find('.secondary-section').length) {
                        $(element).find('.secondary-section').each(function () {
                            const childScrollLeft = $(this).offset().left;
                            console.log('elementScrollLeft: ' + elementScrollLeft + ' childScrollLeft: ' + childScrollLeft);

                            if ((elementScrollLeft < childScrollLeft) || (elementScrollLeft > 0 && childScrollLeft === 0)) {
                                $(element).animate({
                                    scrollLeft: elementScrollLeft < childScrollLeft ? childScrollLeft : elementScrollLeft * 2
                                }, 500);

                                return false;
                            }
                        });

                        return false;
                    }
                } else if (windowScroll < elementScrollTop) {
                    $('html, body').animate({
                        scrollTop: elementScrollTop
                    }, 500);

                    return false;
                }
            });
        }
    });
});