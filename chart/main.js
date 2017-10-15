var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Is this thing working?",
            backgroundColor: 'rgb(255, 99, 132,0.4)',
            data: [0, 10, 5, 2, 20, 30, 45],
          }, {
          label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    },{
      label: 'butt stuff',
      data: [10, 40, 0, 1, 17, 22, 50],
      backgroundColor: "rgba(255,30,110,0.4)"
        }]
    },

    // Configuration options go here
    options: {
      scales: {
    yAxes: [{
        gridLines: {
            display: false,
            drawBorder: false,
        }
    }],
    xAxes: [{
        gridLines: {
            display: false,
            drawBorder: false,
        }
    }],
    responsive: true,
}
    }
});