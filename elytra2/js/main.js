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


$('.learn-more').click(function(){
  var nav = $('.more');
  if (nav.hasClass('expand'))
      nav.removeClass('expand');
  else
      nav.addClass('expand');
    console.log("did I add it?");
  
});



});