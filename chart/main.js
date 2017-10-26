/*=======================PACIFIC COAST======================*/

var ctx = document.getElementById('PacificCoast_Pop').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [1.89]
      
    },{
      label: "Projected",
      data: [1.99],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
    options: {
      scales: {
    yAxes: [{
      ticks: {
                    beginAtZero:true
                },
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

var ctx = document.getElementById('PacificCoast_Job').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Job Growth (%)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [ 5.3]
      
    },{
      label: "Projected",
      data: [12.2],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
    options: {
      scales: {
    yAxes: [{
      ticks: {
                    beginAtZero:true
                },
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

var ctx = document.getElementById('PacificCoast_GDP').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [ 1.1]
      
    },{
      label: "Projected",
      data: [ 1.5],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
    options: {
      scales: {
        yAxes: [{
          
                ticks: {
                    beginAtZero:true
                },
           
          gridLines: {
              display: false,
              drawBorder: false,
              },
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
/*=====================GREAT PLAINS===================*/

var ctx = document.getElementById('GreatPlains_Pop').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [4.07]
      
    },{
      label: "Projected",
      data: [4.31],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
    options: {
      scales: {
    yAxes: [{
      ticks: {
                    beginAtZero:true
                },
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
var ctx = document.getElementById('GreatPlains_Job').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Job Growth (%)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [1.03]
      
    },{
      label: "Projected",
      data: [1.38],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
    options: {
      scales: {
    yAxes: [{
      ticks: {
                    beginAtZero:true
                },
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
var ctx = document.getElementById('GreatPlains_GDP').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["GDP (trillions)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(0, 0, 255, .4)",
      data: [1.8]
      
    },{
      label: "Projected",
      data: [2.5],
      backgroundColor: "rgba(255,153,0,0.4)",
    }]
  },
    options: {
      scales: {
    yAxes: [{
      ticks: {
                    beginAtZero:true
                },
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

/*=====================GREAT LAKES===================*/
function makeChart(id, label, currentData, projectedData) {
  var ctx = document.getElementById(id).getContext('2d');
  var chart = new Chart(ctx, {
    type: "line",
    data:{
      labels: [label],
      datasets: [{
        label: "Current",
        backgroundColor: "rgba(0, 0, 255, .4)",
        data: [currentData]
        
      },{
        label: "Projected",
        data: [projectedData],
        backgroundColor: "rgba(255,153,0,0.4)",
      }]
    },
      options: {
        plugins: {
          deferred: {           // enabled by default
            
              yOffset: '50%',   // defer until 50% of the canvas height are inside the viewport
              delay: 1000        // delay of 500 ms after the canvas is considered inside the viewport
          },
        },

        scales: {
      yAxes: [{
        ticks: {
                      beginAtZero:true
                  },
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


  }




      }

  });
}

makeChart('GreatLakes_Pop', 'Population (10 millions)', 5.83, 5.89);
makeChart('GreatLakes_Job', 'Job Growth (%)', -1.7, 8);
makeChart('GreatLakes_GDP', 'GDP (trillions)', 2.6, 3.2);


/*=====================INLAND WEST===================*/
makeChart('InlandWest_Pop', 'Population (10 millions)', 3.23, 3.46);
makeChart('InlandWest_Job', 'Job Growth (%)', 8.8, 14.6);
makeChart('InlandWest_GDP', 'GDP (trillions)', 1.3, 1.8);


/*=====================GREAT NE===================*/
makeChart('GreatNortheast_Pop', 'Population (10 millions)', 4.16, 4.27);
makeChart('GreatNortheast_Job', 'Job Growth (%)', 3.1, 10.3);
makeChart('GreatNortheast_GDP', 'GDP (trillions)', 2.2, 2.8);


/*=====================GULF COAST===================*/
makeChart('GulfCoast_Pop', 'Population (10 millions)', 1.66, 1.78);
makeChart('GulfCoast_Job', 'Job Growth (%)', 9.8, 15.5);
makeChart('GulfCoast_GDP', 'GDP (trillions)', .85, 1.2);


/*=====================SE MAN===================*/
makeChart('SEMan_Pop', 'Population (10 millions)', 6.12, 6.43);
makeChart('SEMan_Job', 'Job Growth (%)', 4.1, 10.7);
makeChart('SEMan_GDP', 'GDP (trillions)', 2.4, 3.1);

/*======================JQUERY APPEAR================*/

