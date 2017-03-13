$(document).ready(function(){

	$('.portrait')
	.on('sticky_kit:bottom', function(e) {
	    $(this).children("img").css('position', 'absolute');
	    $(this).children("span").css('position', 'absolute');
	    $(this).children("p").css('position', 'absolute');
	    $(this).children("img").css('bottom', 0);
	    $(this).children("span").css('bottom', 0);
	    $(this).children("p").css('bottom', 0);
	})
	.on('sticky_kit:unbottom', function(e) {
	    $(this).children("span").css('position', 'static');
	    $(this).children("img").css('position', 'static');
	    $(this).children("p").css('position', 'static');
	})
	$(".portrait").stick_in_parent();
	$(".fullwidth").stick_in_parent();


/*==============VIDEO STUFF====================*/
// select video element
    //var vid = document.getElementById('v0');
    var vid = $('#v0')[0]; // jquery option

    // pause video on load
    vid.pause();

    // pause video on document scroll (stops autoplay once scroll started)
    window.onscroll = function(){
        vid.pause();
    };

    // refresh video frames on interval for smoother playback
    setInterval(function(){
        vid.currentTime = window.pageYOffset/400;
    }, 40);



});

