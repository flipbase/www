$(document).ready(function() {

  // Setup sticky header
  $(window).on('scroll', function() {
    var fromTop = $('body').scrollTop();
    $('.nav-wrapper').toggleClass('sticky', (fromTop > 80));
  });

  // Testimonial slider
  if ($('.bxslider').length) {
    var slider = $('.bxslider').bxSlider({
      controls: false
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

  if ($('.article .rrssb-buttons').length) {
    $('.rrssb-buttons').rrssb({
      // required:
      title: '#{page.title}',
      url: 'http://kurtnoble.com/labs/rrssb/',
      // optional:
      description: ''
    });
  }
});