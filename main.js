	$('.click').click(function(){
		console.log('hello friend');
		var slide = $('.gallery').children('img', this);
		if (slide.hasClass('expand')){
			slide.removeClass('expand')
		}
		else{
			slide.addClass('expand');
		}
	});
	$('.gallery').children('img').click(function(){
		event.stopPropagation();
	});
});

