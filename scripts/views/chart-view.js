'use strict';
//  need to store some values up here so they are easier to change later when we style this
var c1 = 'darkKhaki';
var c2 = 'dimGray';
var c3 = 'midnightBlue';
var c4 = 'darkSlateGray';
//  replace placeholders with labels for chart.  I stored them in a separate array so that we can auto-populate it with data from extra columns we might add later.
var labels = ['placeholder 1', 'placeholder 2'];
var price = [30, 30];

var data = {
  labels: labels,
  datasets: [{
    data: price,
    label: 'Price',
    backgroundColor: [c1, c2],
  }]
};

// var Chart = require('chart.min.js');

function makeChart (){
  var ctx = $("#testChart");
  var priceChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        label: '',
      },
      legend: {display: false},
      title: {display: true, fontColor: 'tan', text: 'Price'},
    },
  })
};
makeChart();
