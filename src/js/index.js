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
    const windowScroll = $(this).scrollTop();

    if (e.originalEvent.wheelDelta > 0) {
      // Mouse wheel UP
      $($('.main-section').get().reverse()).each(function () {
        const elementScroll = $(this).offset().top;

        if (windowScroll === elementScroll) {
          if ($(this).find('.secondary-section').length) {
            console.log('are elemente!');
            return false;
          }
        } else if(windowScroll > elementScroll) {
          $('html, body').animate({
            scrollTop: elementScroll
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
            $(element).find('.secondary-section').each(function() {
              const childScrollLeft = $(this).offset().left;
              console.log(elementScrollLeft, childScrollLeft);

              if(elementScrollLeft < childScrollLeft) {
                console.log(childScrollLeft);
                $(element).animate({
                  scrollLeft: childScrollLeft
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