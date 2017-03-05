/* Fade page-in animation */
  $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 700,
      outDuration: 600,
      linkElement: 'a:not([target="_blank"]):not([href^="#"])',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      // loadingInner: '<img src="logo_small.png" />', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 3000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });      

$(document).ready(function() {
  
  $(document).foundation();
  
  AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in',
      delay: 100,
    });
  
  
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