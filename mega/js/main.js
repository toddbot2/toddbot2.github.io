/*=======================PACIFIC COAST======================*/
var ctx = document.getElementById('PacificCoast_Job').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Job Growth (%)"],
    datasets: [{
      label: "Current",
       backgroundColor: "rgba(244, 220, 66,0.8)",
      data: [ 5.3]
      
    },{
      label: "Projected",
      data: [1.21],
      backgroundColor: "rgba(65, 205, 244, 0.8)",
    }]
  },
    options: {
      legend:{
        labels:{
        fontColor: "white",
      },
    },
      scales: {
    yAxes: [{
      ticks: {
          fontColor: "white",
          beginAtZero:true
                },
        gridLines: {
            display: false,
            drawBorder: false,
        }
    }],
    xAxes: [{
        ticks:{
          fontColor: "white",
        },
        gridLines: {
            fontColor:"white",
            display: false,
            drawBorder: false,
        }
    }],
    responsive: true,
}
    }

});

$(".sec-nav").stick_in_parent();

/*var Navigation = $(".sec-nav");
    stickyDiv = "sticky";
    Header = $('#intro2').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > Header +1500) {
    Navigation.addClass(stickyDiv);
  } else {
    Navigation.removeClass(stickyDiv);
  }
});*/


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    },500);
    return false;
});

/*var ctx = document.getElementById('PacificCoast_Pop').getContext('2d');
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

});*/
/*=====================GREAT PLAINS===================*/

var ctx = document.getElementById('GreatPlains_Pop').getContext('2d');
var chart = new Chart(ctx, {
  type: "bar",
  data:{
    labels: ["Population (10 million)"],
    datasets: [{
      label: "Current",
      backgroundColor: "rgba(244, 220, 66,0.8)",
      data: [4.07]
      
    },{
      label: "Projected",
      data: [4.31],
      backgroundColor: "rgba(65, 205, 244, 0.8)",
    }]
  },
    options: {
      legend:{
        labels:{
        fontColor: "white",
      },
    },
      scales: {
    yAxes: [{
      ticks: {
          fontColor: "white",
          beginAtZero:true
                },
        gridLines: {
            display: false,
            drawBorder: false,
        }
    }],
    xAxes: [{
        ticks:{
          fontColor: "white",
        },
        gridLines: {
            fontColor:"white",
            display: false,
            drawBorder: false,
        }
    }],
    responsive: true,
}
    }

});
/*var ctx = document.getElementById('GreatPlains_Job').getContext('2d');
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

});*/

/*=====================GREAT LAKES===================*/
function makeChart(id, label, currentData, projectedData) {
  var ctx = document.getElementById(id).getContext('2d');
  var chart = new Chart(ctx, {
    type: "bar",
    data:{
      labels: [label],
      datasets: [{
        label: "Current",
        backgroundColor: "rgba(244, 220, 66,0.8)",
        data: [currentData]
        
      },{
        label: "Projected",
        data: [projectedData],
        backgroundColor: "rgba(65, 205, 244, 0.8)",
      }]
    },
      options: {
        legend:{
          labels:{
          fontColor: "white",
        },
      },
        plugins:{
          deferred: {           // enabled by default
              xOffset: '50%',
              yOffset: '50%',   // defer until 50% of the canvas height are inside the viewport
              delay: 1000,        // delay of 500 ms after the canvas is considered inside the viewport
          },
        },

        scales: {
      yAxes: [{
        ticks: {
              fontColor: "white",
              beginAtZero:true
                  },
          gridLines: {
              display: false,
              drawBorder: false,
          }
      }],
      xAxes: [{
          ticks:{
            fontColor: "white",
          },
          gridLines: {
              display: false,
              drawBorder: false,
          }

      }],


  }




      }

  });
}




/*=====================INLAND WEST===================*/
/*makeChart('InlandWest_Pop', 'Population (10 millions)', 3.23, 3.46);
makeChart('InlandWest_Job', 'Job Growth (%)', 8.8, 14.6);*/
makeChart('InlandWest_GDP', 'GDP (trillions)', 1.3, 1.8);

/*=====================GREAT LAKES===================*/
/*makeChart('GreatLakes_Pop', 'Population (10 millions)', 5.83, 5.89);*/
makeChart('GreatLakes_Job', 'Job Growth (%)', -1.7, 8);
/*makeChart('GreatLakes_GDP', 'GDP (trillions)', 2.6, 3.2);*/

/*=====================GREAT NE===================*/
/*makeChart('GreatNortheast_Pop', 'Population (10 millions)', 4.16, 4.27);*/
makeChart('GreatNortheast_Job', 'Job Growth (%)', 3.1, 10.3);
/*makeChart('GreatNortheast_GDP', 'GDP (trillions)', 2.2, 2.8);*/



/*=====================SE MAN===================*/
/*makeChart('SEMan_Pop', 'Population (10 millions)', 6.12, 6.43);*/
makeChart('SEMan_Job', 'Job Growth (%)', 4.1, 10.7);
/*makeChart('SEMan_GDP', 'GDP (trillions)', 2.4, 3.1);*/

/*=====================GULF COAST===================*/
/*makeChart('GulfCoast_Pop', 'Population (10 millions)', 1.66, 1.78);*/
/*makeChart('GulfCoast_Job', 'Job Growth (%)', 9.8, 15.5);*/
makeChart('GulfCoast_GDP', 'GDP (trillions)', .85, 1.2);





/*======================JQUERY APPEAR================*/

$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});




/*========================Navbar machine========================*/

$('.hamburger').click(function(){
  var nav = $('.sec-nav');
  if (nav.hasClass('expand'))
      nav.removeClass('expand');
  else
      nav.addClass('expand');
    console.log("did I add it?");
  
});




