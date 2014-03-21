'use strict';

angular.module('realmAnimations')
.animation('.crossfade', function () {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 0.1, {opacity: 0}, {opacity:1, onComplete:done});
		},
		leave: function (element, done) {
			TweenMax.fromTo(element[0], 0.1, {opacity: 1}, {opacity:0, onComplete:done});
		}
	};
});