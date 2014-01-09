$(document).ready(function(){
	'use strict';

	var row2top = $('#Row2').get(0).offsetTop - 98;
	var row3top = $('#Row3').get(0).offsetTop - 98;

	$('.btn-row1').on('click', function(e){
		e.preventDefault();
		$.scrollTo(0, 800, {});
	});

	$('.btn-row2').on('click', function(e){
		e.preventDefault();
		$.scrollTo(row2top, 800, {});
	});

	$('.btn-row3').on('click', function(e){
		e.preventDefault();
		$.scrollTo(row3top, 850, {});
	});

	/*
	.parallax(xPosition, speedFactor, outerHeight)
	xPosition: Horizontal position of the element
	inertia: speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	outerHeight: ([true]/false) Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	*/
	
	/*$('#Row1').parallax('center', 0.5);
	$('#Row1Header').parallax('left', .8);

	$('#Row2').parallax('center', 0.5);
	$('#Row2Header').parallax('left', .8);

	$('#Row3').parallax('center', 0.5);
	$('#Row3Header').parallax('left', .8);*/

});