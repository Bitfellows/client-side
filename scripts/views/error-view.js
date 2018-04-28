'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = function(err) {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    let template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));
  };

  module.errorView = errorView;
})(app);

//ADD BELOW INTO HTML head
/* <script type="text/x-handlebars-template" id="error-template">
<h3>Oops, something went wrong!</h3>
<p>{{status}}: {{statusText}}</p>
</script> */


//add below in body
/* <section class="error-view container">
      <h2 class="view-title">Error</h2>
      <section id="error-message"></section>
    </section */