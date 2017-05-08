$(document).scroll(function(e) {
  var fishEnd = 16297;
  
  console.log(e.currentTarget.scrollingElement.scrollTop);
  var currentScroll = e.currentTarget.scrollingElement.scrollTop;
  //fishControl(fishId,heightShow,fixedHeight,heightLeave,currentHeight)
  fishControl('#a',9326,'10%',fishEnd,currentScroll);
  fishControl('#b',9926,'20%',fishEnd,currentScroll);
  fishControl('#c',10500,'30%',fishEnd,currentScroll);
  fishControl('#d',12942,'30%',fishEnd,currentScroll);
  fishControl('#e',13657,'45%',fishEnd,currentScroll);
  fishControl('#f',14372,'60%',fishEnd,currentScroll);
  fishControl('#g',15087,'20%',fishEnd,currentScroll);
  fishControl('#h',13900,'40%',fishEnd,currentScroll);
  fishControl('#i',15802,'35%',fishEnd,currentScroll);
})

function fishControl(fishId,heightShow,fixedHeight,heightLeave,currentHeight) {
  $(fishId).css('top',fixedHeight);
  var fixedHeightNumber = $(fishId).offset().top;
  if(currentHeight > heightShow && currentHeight < heightLeave) {
     $(fishId).css('position','fixed');
     $(fishId).css('top',fixedHeight);
     $(fishId).fadeIn();
  } else if ( currentHeight >= heightLeave ) {
     $(fishId).css('position','absolute');
     $(fishId).css('top',heightLeave + fixedHeightNumber);
     $(fishId).fadeIn();
  } else {
     $(fishId).fadeOut();
  }
 
}


$("#vid-1").stick_in_parent();
$("#vid-3").stick_in_parent();
$("#super-container").stick_in_parent();
/*$("#base").stick_in_parent();*/

$("#history-text").stick_in_parent({offset_top:200});
/*$("#one").stick_in_parent({offset_top:200});
$("#two").stick_in_parent({offset_top:350});
$("#three").stick_in_parent({offset_top:500});*/

$(".stick-1").stick_in_parent();

$('#one, #two, #three')
	.on('sticky_kit:bottom', function(e) {
	    /*$(this).children("img").css('position', 'absolute');*/
	    $(this).children("div").css('position', 'absolute');
	    /*$(this).children("p").css('position', 'absolute');*/
	    /*$(this).children("img").css('bottom', 0);*/
	    $(this).children("div").css('bottom', 0);
	    /*$(this).children("p").css('bottom', 0);*/
	})
	.on('sticky_kit:unbottom', function(e) {
	    $(this).children("div").css('position', 'static');
	   /* $(this).children("img").css('position', 'static');*/
	    /*$(this).children("p").css('position', 'static');*/
})
	

/*$('.dam-copy').animateOnScroll(
	fade: {
    offset_top: 120,
    offset_bottom: 60
  },
  scale3d: {
    enable: false
  }
});*/


