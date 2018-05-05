$(document).scroll(function(e) {
  var boxEnd = 3216;
  
  console.log(e.currentTarget.scrollingElement.scrollTop);
  var currentScroll = e.currentTarget.scrollingElement.scrollTop;
  //fishControl(boxId,heightShow,fixedHeight,heightLeave,currentHeight)
  fishControl('#a',300,'10%',boxEnd,currentScroll);
  fishControl('#b',1200,'12%',boxEnd,currentScroll);
  fishControl('#c',2100,'15%',boxEnd,currentScroll);
}) 

function fishControl(boxId,heightShow,fixedHeight,heightLeave,currentHeight) {
  $(boxId).css('top',fixedHeight);
  var fixedHeightNumber = $(boxId).offset().top;
  if(currentHeight > heightShow && currentHeight < heightLeave) {
     $(boxId).css('display, block');
     $(boxId).css('top',fixedHeight);
     $(boxId).fadeIn(1200);
  } else if ( currentHeight >= heightLeave ) {
     $(boxId).css('display, block');
     $(boxId).css('top',heightLeave + fixedHeightNumber);
     $(boxId).fadeIn(1200);
  } else {
     $(boxId).fadeOut();
  }
 
}