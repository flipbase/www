;(function ($) {
  for (var i = 0; invoker.length > i; i++) {
    invoker[i]();
  }

  var $body = $('html, body');
  var smoothState = $('#main').smoothState({
    //- debug: true,
    anchors: 'a[data-type="page-transition"]',
    // prefetch: true,
    // Runs when a link has been activated
    onStart: {
      duration: 200, // Duration of our animation
      render: function ($container) {
        // for restarting css animations with a class
        $container.addClass('is-exiting');
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 200,
      render: function ($container, $newContent) {
        //- Reset invoker
        invoker = [];
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');
        // Inject the new content
        $container.html($newContent);

        //- Invoke all the JS functions that are pushed to the 
        for (var i = 0; invoker.length > i; i++) {
          if (typeof invoker[i] === 'function') {
            invoker[i]();
          }
        }
      }
    },
    onAfter: function() {
      
      //- Manually send each pageview to Google Analytics
      if (window.ga) {
        window.ga('send', 'pageview', window.location.pathname || smoothState.href);
      }
    }
  }).data('smoothState');

})(jQuery);