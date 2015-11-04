$(document).ready(function () {
	$('a.gallery').colorbox({maxHeight:"80%", maxWidth: "90%", rel:"gallery", opacity: .7});
  $('.click').click(function(){
		console.log('hello friend');
		var slide = $('.gallery').children('img', this);
		console.log('thanks');
		if (slide.hasClass('expand')){
			slide.removeClass('expand')
		}
		else{
			slide.addClass('expand');
		}
		console.log('all done');


  	});  
  
  });

  $('.click2').click(function(){
  	console.log('hello')
		var slide = $('.webstuff').children('a').children('img', this);
		console.log('is this working?');
		if (slide.hasClass('expand')){
			slide.removeClass('expand');
		}
		else{
			slide.addClass('expand');
		}
		$('img.webstuff').colorbox({height: 40});
		console.log('all done');
		});
		