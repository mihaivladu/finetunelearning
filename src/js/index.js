import '../scss/index.scss';

$(function () {
  $('a[href^="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  const controller = new ScrollMagic.Controller();
  const slides = new TimelineMax()
    .to('#slideContainer', 1, {
      x: '-20%',
      ease: Linear.easeNone
    })
    .to('#slideContainer', 0.5, {
      delay: 1
    })
    .to('#slideContainer', 1, {
      x: '-40%',
      ease: Linear.easeNone
    })
    .to('#slideContainer', 0.5, {
      delay: 1
    })
    .to('#slideContainer', 1, {
      x: '-60%',
      ease: Linear.easeNone
    })
    .to('#slideContainer', 0.5, {
      delay: 1
    })
    .to('#slideContainer', 1, {
      x: '-80%',
      ease: Linear.easeNone
    });

  new ScrollMagic.Scene({
    triggerElement: '#finetune-section-slider',
    triggerHook: 'onLeave',
    duration: '800%'
  }).setPin('#finetune-section-slider')
    .setTween(slides)
    .addTo(controller);
});
