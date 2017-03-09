$(document).ready(function(){
	$("#one, #two").stick_in_parent();

	$(document.body).trigger("sticky_kit:recalc");
});