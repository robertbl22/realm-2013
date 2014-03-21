'use strict';

angular.module('clientsApp')
.directive('client', [function () {
	return {
		scope: {
			name: '@',
			logoUrl: '@',
			workUrl: '@',
			linked: '@'
		},
		replace: true,
		restrict: 'A',
		templateUrl: 'scripts/apps/clients/clients-grid/client-dir.html',
		link: function(scope, element, attrs) {

			scope.image = {url: 'images/client-logos/' + scope.logoUrl};

            var img = element.find('img');
            element[0].style.opacity = 0;
            img.bind('load', function() {
            	TweenMax.fromTo(element[0], 0.3, {marginLeft:'-10px', opacity: 0}, {marginLeft:'0px', opacity:1});
            });

		}
	};
}]);