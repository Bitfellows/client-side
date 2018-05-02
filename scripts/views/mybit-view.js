'use strict';

var app = app || {};

(module => {

  const mybitView = {};

  mybitView.init = () => {
    $('#login').hide();
    $('#create-user').hide();
    $('#overView').hide();
    // $('#navHeader').show();
    $('.main-header').show();
    $('#mybitView').show();
    $('#update-form').hide();
    $('#mybitView').show();
    $("#clear-activity").hide();

  }
  $("#update").click(function () {
    $("#update-form").show();
  }); 

  $("#clear").click(function () {
    $("#clear-activity").show();
  });

  $(".close").click(function(){
    $("#clear-activity").hide();
  });  
  
  $(".close").click(function(){
    $("#update-form").hide();
  });
  
  module.mybitView = mybitView;

})(app);

