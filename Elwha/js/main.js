$("#vid-1").stick_in_parent();

$("#one").stick_in_parent({offset_top:200});
$("#two").stick_in_parent({offset_top:250});
$("#three").stick_in_parent({offset_top:300});

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