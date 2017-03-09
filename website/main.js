$(document).ready({});
// init controller

/*=======================PARALLAX==============================*/

	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	
	var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave', duration: "100%"
			}
		});
/*=======================PINNING==============================*/

		// get all slides
		var slides = document.querySelectorAll("div.box");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addTo(controller);
		};

/*=======================SCALE ANIMATION==============================*/

	var scrollMagicController = new ScrollMagic();
  
	  // Animation will be ignored and replaced by scene value in this example
	  var tween = TweenMax.to('#animation', 0.5, {
	    backgroundColor: 'rgb(255, 39, 46)',
	    scale: 5,
	    rotation: 360,
	  });
	  
	  // Create the Scene and trigger when visible
	  var scene = new ScrollScene({
	  	triggerHook: 'onEnter'
	    triggerElement: '#scene',
	    duration: 300 /* How many pixels to scroll / animate */
	  })
	  .setTween(tween)
	  .addTo(scrollMagicController);
	  
