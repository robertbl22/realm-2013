'use strict';


angular.module('workApp')
.directive('workitem', [function () {
	return {
		scope: {
			title: '@',
			href: '@',
			src: '@',
			description: '@'
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'scripts/apps/work/work-grid/workitem-dir.html',
		link: function(scope, element, attrs) {
			/*TweenMax.fromTo(element, 1, {css:{alpha:0,display:''}}, {css:{alpha:1}});*/

			scope.image = {url: 'images/work/thumbs/' + scope.src};

            var img = element.find('img');
            element[0].style.opacity = 0;
            img.bind('load', function() {
            	TweenMax.fromTo(element[0], 0.3, {left:'-10px', opacity: 0}, {left:'0px', opacity:1});
            });

		}
	};
}]);