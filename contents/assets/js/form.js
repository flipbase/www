// We really need to use Formstack, Typeform or Formspree.io; or we can
// create our API endpoint on the server
$(document).ready(function() {

  $("*").dblclick(function(e){
    e.preventDefault();
  });

  // http://formspree.io/
  // Als mailgun niet compliant is, dan gewoon een API endpoint op de server
  // aanmaken om via mandrill de mail te versturen; dat is het meest veilige
  $('#contactform').on('submit', function(e) {
    e.preventDefault();

    // prevent dubbel click
    $('form button').prop('disabled', true);

    var formError = validateForm();
    if (formError) {
      $('form button').prop('disabled', false);
      return $('#errorMessage').html('<span>' + formError + '</span>').fadeIn('fast');
    }

    $.ajax({
      url: "//formspree.io/" + whereToSendTo(), 
      method: "POST",
      data: {
        naam: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      },
      dataType: "json",
      success: handleSuccess
    });
  });

  var fields = ['name', 'email', 'message'];
  var errorMsg = {
    name: 'naam',
    email: 'e-mail adres',
    message: 'bericht' 
  };

  /**
   * Iterate over form fields and return instantly when an error occurred
   * @return {String|undefined} if error is present string is returned
   */
  function validateForm() {
    var empty = '';
    for (var i=0; i < fields.length; i++) {
      var isEmpty = getEmptyError(fields[i]);
      var isInvalid = getInvalidError(fields[i]);
      if (isEmpty || isInvalid) {
        return isEmpty || isInvalid;
      }
    }
  }


  function getEmptyError(id) {
    var el = q(id);
    if (!el.value || el.value.length <= 2) {
      return 'Kan gebeuren: je hebt je ' + errorMsg[id] +' niet ingevuld.' 
    }
  }

  function getInvalidError(id) {
    var el = q(id);
    if (id === 'email' && !validateEmail(el.value)) {
      return 'Kan gebeuren: je hebt geen geldig e-mail adres ingevuld.';
    }
  }

  function q (id) {
    return document.getElementById(id);
  }

  /**
   * Validate email adress
   * @param  {string} email address to validate
   * @return {Boolean}
   */
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);  
  }

  function handleSuccess(data) {
    if (data.success) {
      $('#contactform')[0].reset();
      $('#errorMessage').hide();
      $('#successMessage').fadeIn('fast').delay(5000).fadeOut('fast');
      $('form button').prop('disabled', false);
    }
  }

});

/**
 * We need to hide some stuff from spam bots and it's something like a electronic postal service.
 * Service: http://www.jottings.com/obfuscator.htm
 * @return {string} email
 */
function whereToSendTo () {
  // Ron
  var coded = "qc0@g9ZCpkBL.wcu";
  var key = "IUM1TmvSfQsRz6YwaHniEuxjgdBbG54DkO0ZAr8hKeNploXW7JtyFqP32LVC9c";
  // Info
  // var coded = "zcqF@qWz0XCtR.DF8";
  // var key = "ju3yKoAVqgsT2lCXhMd6OnFmPevti7Wxp1USQBcY8ZRkrzLN50GHIfED4Jwab9";

  var shift = coded.length;
  var link = "";

  for (i=0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  return link;
}
