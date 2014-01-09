'use strict';

var app = angular.module('ClientShowcase', ['ngRoute', 'ngAnimate', 'ngSanitize']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'scripts/templates/ClientsGridView.html'
		/*controller: ClientsGridViewController,
		controllerAs: 'clients'*/
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);

/*var ClientsGridViewController = ['$scope', function($scope){
}];*/

app.directive('clienttile', function () {
	return {
		scope: {
			name: '@',
			logoUrl: '@',
			workUrl: '@',
			linked: '@'
		},
		replace: true,
		restrict: 'A',
		templateUrl: 'scripts/templates/clienttile.html'/*,
		link: function(scope, element, attrs) {
			//element.hide().fadeIn();
			TweenMax.fromTo(element, 1, {css:{alpha:0,display:''}}, {css:{alpha:1}});
		}*/
	};
});

app.animation('.fadein', function () {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 1, {opacity: 0}, {opacity:1, onComplete:done});
		}
	};
});