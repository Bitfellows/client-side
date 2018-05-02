'use strict';

var app = app || {};

(function(module) {
  const coinSearchView = {};
  coinSearchView.init = function() {
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    // $('#delete-activity').hide();
    console.log(module.Crypto.chartData)
    $('#main-view').show();
  }
  $('.select_location').on('change', function(){
    if($(this).val() === 'btc'){
      page('/coins/btc')
    }
    if($(this).val() === 'ltc'){
      page('/coins/ltc')
    }
    if($(this).val() === 'eth'){
      page('/coins/eth')
    }
    if($(this).val() === 'bch'){
      page('/coins/bch')
    }

  });
  $('#calculate').on('click',(event)=>{
    event.preventDefault();
    let perCoinPrice = $('#coin-list').find('p').first().text().split(':')[1];
    if(parseInt($('#quantity').val())>0){
      coinSearchView.submit();
      alert($('#quantity').val() * perCoinPrice);
    }
    else{
      alert('please enter quantity');
    }
  })
  coinSearchView.submit = () =>{
    //event.preventDefault();
    let cryptoObj = {
      user_name:  module.loginView.user_name,
      coin:  $('.select_location').val(),
      qty: $('#quantity').val()
    };
    console.log(cryptoObj);
    let myBit = new module.Crypto(cryptoObj);
    console.log(myBit);
    myBit.insertRecord();
  }
  $('#reset').on('click',function(){
    $('.select_location').get(0).selectedIndex = 0;
    $('#quantity').val('0.00')
  });
  coinSearchView.initSearch = function() {
    $('#aboutView').hide();
    $('#login').hide();
    $('#create-user').hide();
    //$('#delete-activity').hide();
    $('#coin-list').empty();
    $('#main-view').show();
    $('#search-view').show();
    coinSearchView.initChart();
    $('#chart-view').show();
    module.Crypto.all.map(coin => $('#coin-list').append(coin.toHtml()));
  }
  coinSearchView.initChart = function(){
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
      labels: ['Coin 1', 'Coin 2', 'Coin 3', 'Coin 4'],
      datasets: [
        {
          label: 'Current Price',
          backgroundColor: c1,
          data: [val1a, val2a, val3a, val4a, 0]
        },
        {
          label: '7d Weighted Avg',
          backgroundColor: c2,
          data: [val1b, val2b, val3b, val4b]
        },
      ]
    };

    var stackedBarData = {
      labels: ['Exchange 1', 'Exchange 2', 'Exchange 3', 'Exchange 4'],
      datasets: [
        {
          label: 'Bid',
          backgroundColor: c3,
          data:[
            20, 30, 40, 50, 0
          ]
        },
        {
          label: 'Ask',
          backgroundColor: c4,
          data: [
            30, 40, 50, 60, 0
          ]
        },
      ]
    };

    function makeChartA (){
      var ctx = $('#chartA');
      var priceChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
          responsive: true,
          scales: {
            label: '',
          },
          legend: {display: false},

          title: {display: true, fontColor: 'black', text: 'Price'},
        },
      })
    }
    function makeChartB (){
      var ctx = $('#chartB');
      var priceChart = new Chart(ctx, {
        type: 'bar',
        data: stackedBarData,
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
            }],
          },
        },
        legend: {display: false},
        title: {display: true, fontColor: 'black', text: 'Bid/Ask'},
      })
    }

    makeChartA();
    makeChartB();
  }
  module.coinSearchView = coinSearchView;
})(app);