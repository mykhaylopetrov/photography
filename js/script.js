$(function() {
	
	/* Fixed Header */

		let header = $("#header");
	let intro = $("#intro");
	let introHeight = intro.innerHeight(); 
	let scrollPosition = $(window).scrollTop(); 

	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPosition, introHeight); 

	$(window).on("scroll resize", function() {
		introHeight = intro.innerHeight();
		/* this - обращаемся к нашему окну */
		scrollPosition = $(this).scrollTop();
		
		checkScroll(scrollPosition, introHeight);
	});

	function checkScroll(scrollPosition, introHeight) {
		if ( scrollPosition > introHeight ) {
			header.addClass("fixed"); /* добавляем класс fixed */
		} else {
			header.removeClass("fixed"); /* убираем класс fixed */
		}
	}

	/* Smooth Scroll */
	
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault(); /* отмена стандартного поведения ссылки при клике */

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		//console.log(elementOffset);

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});
	
	/* Nav Toggle */

	navToggle.on("click", function(event) {
		event.preventDefault(); 

		nav.toggleClass("show");
	});

});