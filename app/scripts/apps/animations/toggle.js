'use strict';

var app = angular.module('realmAnimations');

app.animation('.toggle', function () {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 0.1, {opacity: 0}, {opacity:1, onComplete:done});
			TweenMax.fromTo(element[0], 0.3, {left: '-100px'}, {left:'0', onComplete:done});
		},
		leave: function (element, done) {
			TweenMax.fromTo(element[0], 0.3, {left: '0'}, {left:'-100px', onComplete:done});
			TweenMax.fromTo(element[0], 0.1, {opacity: 1}, {opacity:0, onComplete:done});
		}
	};
});

app.animation('.toggle2', function () {
	return {
		leave: function (element, done) {
			TweenMax.fromTo(element[0], 0.3, {right: 0}, {right:'100%', onComplete:done});
		},
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 0.3, {right: '100%'}, {right:0, onComplete:done});
		}
	};
});