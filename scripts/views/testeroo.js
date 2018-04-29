'use strict';
//  placeholder variables, replace with data coming from API/CSS
//  change variables will need a function to get current prices and compare them to their 7d weighted averages

var c1 = 'red'; 
var c2 = 'blue';
var c3 = 'green';
var c4 = 'yellow';
var val1a = 50;
var change1 = 0.25;
// var val1b = val1a * change1;
var val1b = -10;
var val2a = 60;
var change2 = .037;
var val2b = val2a * change2;
var val3a = 40;
var change3 = 0.01;
var val3b = val3a * change3;
var val4a = 25;
var change4 = 0.40;
var val4b = val4a * change4;

var barChartData = {
  labels: ['Coin 1', 'Coin 2', 'Coin 3', 'Coin 4'],
  datasets: [{
    label: 'Current Price',
    backgroundColor: c1,
    stack: 'Stack 0',
    data: [val1a, val2a, val3a, val4a]
  }, {
    label: '7d Weighted Avg',
    backgroundColor: c2,
    stack: 'Stack 1',
    data: [val1b, val2b, val3b, val4b]
  }]
};

function testachart() {
  var ctx = $("#testerooChart");;
  window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });
};
testachart();