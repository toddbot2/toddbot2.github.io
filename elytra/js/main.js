jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});



	$("body").prognroll({
    //Progress bar height
    height: 5,        
    
    //Progress bar background color
    color: "#5e5b84",

    // If you make it true, you can add your custom div and see it's scroll progress on the page	
    custom: false     
});
    console.log( "ready!" );


    /*$("#container-headline").stick_in_parent();*/
    


});

/*=================HOVER 4 TEXT BY TODD=================*/


let numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
for (var i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    $('#' + number).mouseover(function(){
        let nav = $('.' + number);
        nav.addClass("hovered")
        console.log("mousein")
    });
    $('#' + number).mouseout(function(){
        let nav = $('.' + number);
        nav.removeClass("hovered")
        console.log("mouseout")
    });
}

/*========================END TODD'S GARBAGE========================*/


// this is particle js
var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    MAX_PARTICLES = 100,
    DRAW_INTERVAL = 60,
    container = document.querySelector('#container'),
    canvas = document.querySelector('#pixie'),
    context = canvas.getContext('2d'),
    gradient = null,
    pixies = new Array();

function setDimensions(e) {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    container.style.width = WIDTH+'px';
    container.style.height = HEIGHT+'px';
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}
setDimensions();
window.addEventListener('resize', setDimensions);




function Circle() {
    this.settings = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

    this.reset = function() {
        this.x = (this.settings.random ? WIDTH*Math.random() : this.settings.xdef);
        this.y = (this.settings.random ? HEIGHT*Math.random() : this.settings.ydef);
        this.r = ((this.settings.rmax-1)*Math.random()) + 1;
        this.dx = (Math.random()*this.settings.xmax) * (Math.random() < .5 ? -1 : 1);
        this.dy = (Math.random()*this.settings.ymax) * (Math.random() < .5 ? -1 : 1);
        this.hl = (this.settings.ttl/DRAW_INTERVAL)*(this.r/this.settings.rmax);
        this.rt = Math.random()*this.hl;
        this.settings.rt = Math.random()+1;
        this.stop = Math.random()*.2+.4;
        this.settings.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        this.settings.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
    }

    this.fade = function() {
        this.rt += this.settings.rt;
    }

    this.draw = function() {
        if(this.settings.blink && (this.rt <= 0 || this.rt >= this.hl)) {
            this.settings.rt = this.settings.rt*-1;
        } else if(this.rt >= this.hl) {
            this.reset();
        }

        var newo = 1-(this.rt/this.hl);
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
        context.closePath();

        var cr = this.r*newo;
        gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        gradient.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
        gradient.addColorStop(this.stop, 'rgba(250,249,239,'+(newo*.6)+')');
        gradient.addColorStop(1.0, 'rgba(250,249,239,0)');
        context.fillStyle = gradient;
        context.fill();
    }

    this.move = function() {
        this.x += (this.rt/this.hl)*this.dx;
        this.y += (this.rt/this.hl)*this.dy;
        if(this.x > WIDTH || this.x < 0) this.dx *= -1;
        if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
    }

    this.getX = function() { return this.x; }
    this.getY = function() { return this.y; }
}


for (var i = 0; i < MAX_PARTICLES; i++) {
    pixies.push(new Circle());
    pixies[i].reset();
}

function draw() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    for(var i = 0; i < pixies.length; i++) {
        pixies[i].fade();
        pixies[i].move();
        pixies[i].draw();
    }
}

setInterval(draw, DRAW_INTERVAL);


// orphans

$('p').each(function(){
    var string = $(this).html();
    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
    $(this).html(string);
});

$('#main-post p, h2').each(function(){
    var string = $(this).html();
    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
    $(this).html(string);



/*====================BULLSHIT REACT SHIT====================*/

var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});

/*====================END BULLSHIT REACT SHIT====================*/







});