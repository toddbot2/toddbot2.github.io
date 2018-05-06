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

$(document).scroll(function(e) {
  var boxEnd = 4195;
  
  console.log(e.currentTarget.scrollingElement.scrollTop);
  var currentScroll = e.currentTarget.scrollingElement.scrollTop;
  //boxControl(boxId,heightShow,fixedHeight,heightLeave,currentHeight)
  boxControl('#about-intro',835,'15%',boxEnd,currentScroll);
  boxControl('#a',1500,'45vh',boxEnd,currentScroll);
  boxControl('#b',2200,'45vh',boxEnd,currentScroll);
  boxControl('#c',3800,'45vh',boxEnd,currentScroll);
}) 

function boxControl(boxId,heightShow,fixedHeight,heightLeave,currentHeight) {
  $(boxId).css('top',fixedHeight);
  var fixedHeightNumber = $(boxId).offset().top;
  if(currentHeight > heightShow && currentHeight < heightLeave) {
     $(boxId).css('position','fixed');
     $(boxId).css('top',fixedHeight);
     $(boxId).fadeIn();
  } else if ( currentHeight >= heightLeave ) {
     $(boxId).css('position','absolute');
     $(boxId).css('top',heightLeave + fixedHeightNumber);
     $(boxId).fadeIn();
  } else {
     $(boxId).fadeOut();
  }
 
}


new WOW().init();


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