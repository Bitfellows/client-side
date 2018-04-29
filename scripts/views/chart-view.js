'use strict';
// placeholder variables  c* indicates graph colors, these will later be dictated by CSS
//  price* will later be populated by API data from server.js
var c1 = 'blue';
var c2 = 'red';
var c3 = 'yellow';
var c4 = 'green';
var price1 = 3000;
var price2 = 1244;
var price3 = 646;
var price4 = 2232;
var price5 = 1877;
var change1 = 0.05;
var change2 = 0.125;
var varCoin1 = 'BTC';

var labels = ['placeholder 1', 'placeholder 2', 'placeholder 3', 'placeholder 4', 'placeholder 5'];
//  last value must be an extra 0 as work-around for chartJS issue.
var price = [price1, price2, price3, price4, price5, 0];
var priceData = {
  labels: labels,
  datasets: [{
    data: price,
    label: 'Price',
    
    backgroundColor: [c1, c2, c1, c2, c1],
  }]
};

function makeChart (){
  var ctx = $("#priceChart");
  var priceChart = new Chart(ctx, {
    type: 'bar',
    data: priceData,
    options: {
      responsive: false,
      scales: {
        label: '',
      },
      legend: {display: false},
      
      title: {display: true, fontColor: 'black', text: 'Price'},
    },
  })
};
// makeChart();

function testChart (){
  var ctx = $("#testChart");
  var comparePrice1 = price1 * change1;
  var comparePrice2 = price2 * change2;
  var newTestChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Price:USD'],
      datasets: [
        {
          Label: 'Low',
          backgroundColor: c1,
          stack: 0,
          data: [price1]
        },
        {
          Label: 'High',
          backgroundColor: c2,
          stack: 1,
          data: [comparePrice1],
          
        },
        {
          Label: 'Low', 
          backgroundColor: c3,
          stack: 2,
          data: [price2]
        },
        {
          Label: 'High',
          backgroundColor: c4,
          stack: 3,
          data: [comparePrice2]
        }
      ],
    },
    options: {
      scales: {
        xAxes: [{stacked: true}],
        yAxes: [{stacked: true}]
      }
    }
  })
};
// testChart();

