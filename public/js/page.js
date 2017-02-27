$(document).ready(function() {

  var $main_navigation = $("#main_navigation");
  
  // Init foundation
  $(document).foundation();

  function checkNav(number) {
    if (number) {
      return $main_navigation.addClass("dark-nav");
    }
  }
  
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