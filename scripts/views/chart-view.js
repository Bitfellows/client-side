'use strict';
//  placeholder variables, replace with data coming from API/CSS
//  change variables will need a function to get current prices and compare them to their 7d weighted averages

var c1 = 'red'; 
var c2 = 'blue';
var c3 = 'green';
var c4 = 'yellow';
var val1a = 50;
var val1b = 50;
var val2a = 60;
var val2b = 55;
var val3a = 40;
var val3b = 35;
var val4a = 25;
var val4b = 67;

var barChartData = {
  labels: ["Coin 1", "Coin 2", "Coin 3", "Coin 4"],
  datasets: [
    {
      label: "Current Price",
      backgroundColor: c1,
      data: [val1a, val2a, val3a, val4a, 0]  
    },
    {
      label: "7d Weighted Avg",
      backgroundColor: c2,
      data: [val1b, val2b, val3b, val4b]
    },
  ]
};


function makeChart (){
  var ctx = $("#testerooChart");
  var priceChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
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
makeChart();