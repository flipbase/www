/* Fade page-in animation */
$(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  inDuration: 300,
  outDuration: 300,
  linkElement: 'a:not([target="_blank"]):not([href^="#"])',
  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
  loading: true,
  loadingParentElement: 'body', //animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '<img src="/assets/images/load-c.svg" />', // e.g '<img src="loading.svg" />'
  timeout: false,
  // timeoutCountdown: 3000,
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
  
  // Initialize foundation
  $(document).foundation();
  
  // Animate on Scroll plguin
  AOS.init({
    offset: 100,
    duration: 200,
    easing: 'ease-in',
    delay: 100,
  });
  
  var $main_navigation = $("#main_navigation");
  
  // Show and hide the mobile menu
  $(".menu-mobile-icon").on("click", function() {
    $main_navigation.toggleClass("push-right");
    $page_content.toggleClass("push-right");
  })
  
  // Show dark navigation when we are on a page with the blog theme (/blog, /privacy, /blog/:post)
  if ($(".blog_section").length) {
    $("#main_navigation").addClass("dark-nav");
  }
  if ($(".jobs_section_header").length) {
    $("#main_navigation").addClass("white-links");
  }

  // Make sure the main navigation enters the 'sticky' mode when entering the 
  $(window).scroll(function () {
    if (0 < $(window).scrollTop()) {
      $main_navigation.addClass("mobile-sticky");
    } else {
      $main_navigation.removeClass("mobile-sticky");
    }
  });

  // Video slider on the employer branding page
  // if ($('.video-slider').length) {
  //   var $video_slider = $('.video-slider').bxSlider({
  //     controls: false,
  //     speed: 200,
  //     pager: false
  //   });
  //   $('#next-video').click(function(){
  //     $video_slider.goToNextSlide();
  //     return false;
  //   });

  //   $('#prev-video').click(function(){
  //     $video_slider.goToPrevSlide();
  //     return false;
  //   });
  // }
  
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

  // $('a .ion-social-linkedin').rrssb({
  //   title: 'This is the email subject and/or tweet text',
  //   url: 'http://rrssb.ml/',
  //   description: 'Longer description used with some providers',
  // })
  
  /** 
   * Include the Google Analtyics snippet
   */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45440989-1', 'auto');
  ga('send', 'pageview');
});