$(document).scroll(function(e) {
  var fishEnd = 14353;
  
  console.log(e.currentTarget.scrollingElement.scrollTop);
  var currentScroll = e.currentTarget.scrollingElement.scrollTop;
  //fishControl(fishId,heightShow,fixedHeight,heightLeave,currentHeight)
  fishControl('#a',10538,'10%',fishEnd,currentScroll);
  fishControl('#b',12962,'12%',fishEnd,currentScroll);
  fishControl('#c',9730,'15%',fishEnd,currentScroll);
  fishControl('#d',11750,'13%',fishEnd,currentScroll);
  fishControl('#e',10134,'17%',fishEnd,currentScroll);
  fishControl('#f',10336,'14%',fishEnd,currentScroll);
  fishControl('#g',9528,'7%',fishEnd,currentScroll);
  fishControl('#h',10740,'9%',fishEnd,currentScroll);
  fishControl('#i',10942,'10%',fishEnd,currentScroll);
  fishControl('#j',12154,'30%',fishEnd,currentScroll);
  fishControl('#k',11346,'28%',fishEnd,currentScroll);
  fishControl('#l',11548,'34%',fishEnd,currentScroll);
  fishControl('#m',12558,'32%',fishEnd,currentScroll);
  fishControl('#n',11952,'36%',fishEnd,currentScroll);
  fishControl('#o',13872,'39%',fishEnd,currentScroll);
  fishControl('#p',12356,'29%',fishEnd,currentScroll);
  fishControl('#q',13164,'33%',fishEnd,currentScroll);
  fishControl('#r',12760,'29%',fishEnd,currentScroll);
  fishControl('#s',13770,'52%',fishEnd,currentScroll);
  fishControl('#t',9326,'48%',fishEnd,currentScroll);
  fishControl('#u',13366,'42%',fishEnd,currentScroll);
  fishControl('#v',13568,'50%',fishEnd,currentScroll);
  fishControl('#w',11144,'38%',fishEnd,currentScroll);
  fishControl('#x',9932,'47%',fishEnd,currentScroll);
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

$("#legend-pin").stick_in_parent();
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


