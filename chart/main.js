/*var ctx = document.getElementById('chartOne').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Is this thing working?",
            backgroundColor: 'rgba(0, 0, 255,0.4)',
            data: [10, 10, 5, 2, 20, 30, 45],
          }, {
          label: 'oranges',
      
      data: [12, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    },{
      label: 'butt stuff',
      
      data: [30, 40, 0, 1, 17, 22, 50],
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
});*/

var ctx = document.getElementById('PacificCoast').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [1.89, 5.3, 1.1]
      
    },{
      label: "Projected",
      data: [1.99, 1.21, 1.5],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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


var ctx = document.getElementById('GreatPlains').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [4.07, 1.03, 1.8]
      
    },{
      label: "Projected",
      data: [4.31, 1.38, 2.5],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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
var ctx = document.getElementById('GreatLakes').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [5.83, -1.7, 2.6]
      
    },{
      label: "Projected",
      data: [5.89, 8, 3.2],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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
var ctx = document.getElementById('InlandWest').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [3.23, 8.8, 1.3]
      
    },{
      label: "Projected",
      data: [3.46, 14.6, 1.8],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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
var ctx = document.getElementById('GreatNE').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [4.16, 3.1, 2.2]
      
    },{
      label: "Projected",
      data: [4.27, 10.3, 2.8],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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
var ctx = document.getElementById('GulfCoast').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [1.66, 9.8, .85]
      
    },{
      label: "Projected",
      data: [1.78, 15.5, 1.2],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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
var ctx = document.getElementById('SEMan').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)", "Job Growth (%)", "GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [6.12, 4.1, 2.4]
      
    },{
      label: "Projected",
      data: [6.43, 10.7, 3.1],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
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