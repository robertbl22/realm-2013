'use strict';

angular.module('realmAnimations')
.animation('.fadein', function () {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 1, {opacity: 0}, {opacity:1, onComplete:done});
		}
	};
});