$(document).ready(function() {
	$("#clickMe").click(function() {
		/* Goes from being invisible (transparent) to being visible (opaque) */
		$("img").fadeIn(1000);
		
		/* 
		 * slideUp method changes the height property of the element until it's 0, and then hides the element
		 * slideDown method changes the height property of the element from 0 to whatever it's set to in the CSS style
		 * slideToggle method says "if it's up, slide it down", "if it's down, slide it up"
		 */
		$("#picframe").slideToggle("slow");
	});
});
