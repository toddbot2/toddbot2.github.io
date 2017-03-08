/*var myAffix = new Bootstrap.affix(element, {
    affixAtElement: {
        top: {
            element: document.id('portrait')
        }
    }
});*/
$(document).ready(function(){
	$("#one").affix({
	    offset: { 
	      top: $(".hero").outerHeight(true),
	      bottom: ($(document).height()-($(".hero").outerHeight(true)+
	      $("#oneId").outerHeight(true)))
	    	}
		})

	/*$("#two").affix({
		offset: {
			top: $(".")
		}
	})*/
});



//console.log($(document).height());
	/*setInterval(function() {
		console.log($(document).scrollTop());
	},500)*/



/*==================PIT OF HELL=================*/
/*bottom: function () {
  		return (this.top = $('.two').outerHeight(true))*/

/*$("#one").affix({
		offset: {
			bottom: $(".two").outerHeight(true)
		}
	})
});

*/



/*$('#one').affix({
    offset: {
      	top: 100, bottom: function () {
        return (this.bottom = $('.footer').outerHeight(true))
      }
    }
  })*/