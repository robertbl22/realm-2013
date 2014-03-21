'use strict';

angular.module('peopleApp')
.directive('person', [function () {
	return {
		scope: {
			name: '@',
			id: '@'
		},
		restrict: 'A',
		templateUrl: 'scripts/apps/people/people-grid/person-dir.html',
		link: function(scope, element, attrs) {
			scope.toggle = false;
			scope.crossfade = false;

            var img = element.find('img');
            element[0].style.opacity = 0;
            img.bind('load', function() {
            	TweenMax.fromTo(element[0], 0.3, {left:'-10px', opacity: 0}, {left:'0px', opacity:1});
            });

		}
	};
}]);