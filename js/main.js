// Landing page click event
/*$("#bl-landing").click(function() {
	$("#bl-landing").fadeOut("slow", function() {
		// Animation complete.
	});
});*/

// Executes fadeOut if user fails to click landing page
$("#bl-landing").delay(3200).fadeOut("slow");

// Landing text fade in
$( ".fade-h1").hide(0).delay(500).fadeIn(850)
$( ".fade-h2").hide(0).delay(1300).fadeIn(850)

// Cursor fadeIn and animation
$(".cursor").css('display', 'block');
$(".cursor").animate({ opacity: 0 }, 0);
$(".cursor").delay(2100).animate({ opacity: 1, right: "43%" }, 1900);