$(document).ready(function(){

	$('.nav, .navbar-header').localScroll({
		duration:800
	});
	
	
	/*
	.parallax(xPosition, speedFactor, outerHeight)
	xPosition: Horizontal position of the element
	inertia: speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	outerHeight: ([true]/false) Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	*/
	
	$('#Row0 .layer-circle').parallax("center", 0.6);

	$('#Row1').parallax("center", 0.3);

	$('#Row2').parallax("center", 0.1);
	$('#Row2 .layer-shoe').parallax("center", 0.4);

	$('#Row3').parallax("center", 0.3);

})