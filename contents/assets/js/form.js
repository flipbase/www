// We really need to use Formstack, Typeform or Formspree.io; or we can
// create our API endpoint on the server
$(document).ready(function() {

  // http://formspree.io/
  // Als mailgun niet compliant is, dan gewoon een API endpoint op de server
  // aanmaken om via mandrill de mail te versturen; dat is het meest veilige
  $('form').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
      url: "//formspree.io/ron@flipbase.com", 
      method: "POST",
      data: {message: "hello!"},
      dataType: "json",
      success: function (data) {
        console.log(data);
      }
    });
  });
});