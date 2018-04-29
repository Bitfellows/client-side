'use strict';

var app = app || {};

((module) => {
const overView = {};

overView.init = () => {
    $('#login').hide();
    $('#create-user').hide();
   // $('#delete-activity').hide();
    $('.main-header').show();
    $('#overView').show();
}

module.overView = overView;
})(app);
