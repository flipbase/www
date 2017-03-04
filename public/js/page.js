$(document).ready(function() {

  $(document).foundation();
  
  // Cover Video. You can find setupCoverVideo function in _covervideo.jade
  if($(".cover-video").length) {
    setupCoverVideo();
  }

    // Video slider
  if ($('.video-slider').length) {
    var $video_slider = $('.video-slider').bxSlider({
      controls: false,
      speed: 200,
      pager: false
    });
    $('#next-video').click(function(){
      $video_slider.goToNextSlide();
      return false;
    });

    $('#prev-video').click(function(){
      $video_slider.goToPrevSlide();
      return false;
    });
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