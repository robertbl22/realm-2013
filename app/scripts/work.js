'use strict';

var app = angular.module('WorkShowcase', ['ngAnimate']);

app.controller('WorkShowcaseController', function () {
	this.toggle = true;
});

app.directive('workitem', function () {
	return {
		scope: {
			title: '@',
			href: '@',
			src: '@',
			description: '@'
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'scripts/templates/workitem.html',
		link: function(scope, element, attrs) {
			//element.hide().fadeIn();
			TweenMax.fromTo(element, 1, {css:{alpha:0,display:''}}, {css:{alpha:1}});
		}
	};
});

app.animation('.toggle', function () {
	return {
		leave: function (element, done) {
			TweenMax.fromTo(element[0], 0.3, {right: 0}, {right:'100%', onComplete:done});
		},
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 0.3, {right: '100%'}, {right:0, onComplete:done});
		}
	};
});

/*app.animation('.toggle', function () {
	return {
		leave: function (element, done) {
			TweenMax.fromTo(element[0], .3, {top: 0}, {top:'100%', onComplete:done});
		},
		enter: function (element, done) {
			TweenMax.fromTo(element[0], .3, {top: '100%'}, {top:0, onComplete:done});
		}
	}
});*/