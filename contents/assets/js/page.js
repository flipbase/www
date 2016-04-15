$(document).ready(function() {

  // Setup sticky header
  $(window).on('scroll', function() {
    var fromTop = $('body').scrollTop();
    $('.nav-wrapper').toggleClass('sticky', (fromTop > 80));
  });

  // Testimonial slider
  if ($('.bxslider').length) {
    var slider = $('.bxslider').bxSlider({
      controls: false,
      speed: 200
    });

    $('#next').click(function(){
      slider.goToNextSlide();
      return false;
    });

    $('#prev').click(function(){
      slider.goToPrevSlide();
      return false;
    });
  }

});