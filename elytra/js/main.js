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


    $("#about-intro").stick_in_parent();
    

$(document).scroll(function(e) {
  var boxEnd = 3330;
  
  console.log(e.currentTarget.scrollingElement.scrollTop);
  var currentScroll = e.currentTarget.scrollingElement.scrollTop;
  //fishControl(boxId,heightShow,fixedHeight,heightLeave,currentHeight)
  fishControl('#a',300,'10%',boxEnd,currentScroll);
  fishControl('#b',1200,'10%',boxEnd,currentScroll);
  fishControl('#c',2100,'10%',boxEnd,currentScroll);
}) 

function fishControl(boxId,heightShow,fixedHeight,heightLeave,currentHeight) {
  $(boxId).css('top',fixedHeight);
  var fixedHeightNumber = $(boxId).offset().top;
  if(currentHeight > heightShow && currentHeight < heightLeave) {
     $(boxId).css('position','fixed');
     $(boxId).css('top',fixedHeight);
     $(boxId).fadeIn(1200);
  } else if ( currentHeight >= heightLeave ) {
     $(boxId).css('position','fixed');
     $(boxId).css('top',heightLeave + fixedHeightNumber);
     $(boxId).fadeIn(1200);
  } else {
     $(boxId).fadeOut();
  }
 
}

});