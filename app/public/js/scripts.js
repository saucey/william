
(function(){
	$('.gallery a').colorbox({
		rel:'gal',
		width: 575,
		bottom: 10
	});

	$(document).ready(function() {
	    $('.toggle-nav').on('click',function(e) {
	        $(this).toggleClass('active');
	        if ($(this).hasClass('active')){
	        	$('.nav-bar-fixed').animate({
	        		left: "0px"
	        	}, 500, "linear", function() {
	        		// $( this ).after( "<div>Animation complete.</div>" );
	        	});

	        } else {
	        	$('.nav-bar-fixed').animate({
	        		left: "-270px"
	        	}, 500, "linear", function() {
	        		// $( this ).after( "<div>Animation complete.</div>" );
	        	});
	        }

	        e.preventDefault();

	    });
	});
})();