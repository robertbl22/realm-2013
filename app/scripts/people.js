'use strict';

/************************/
/* APPLICATION */

var app = angular.module('PeopleShowcase', ['ngRoute', 'ngAnimate', 'ngSanitize']);



/************************/
/* GRID VIEW */

var PeopleGridViewController = ['$scope', '$http', function($scope, $http){
	$http.get('scripts/people.json').then(function(res){
		$scope.people = res.data;

		/* chunk data into rows of 4 cols */
		$scope.people.range = function() {
			var range = [];
			for( var i = 0; i < $scope.people.length; i = i + 4 ) {
				range.push(i);
			}
			return range;
		};
	});
}];




/*****************************/
/* DETAIL VIEW */

var PeopleDetailViewController = ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	this.name = 'PeopleDetailViewController';
	var personId = $routeParams.personId;
	var prevId;
	var nextId;
	var exitForEach = false;

	$http.get('scripts/people.json').then(function(res){
		angular.forEach(res.data, function(value, key){
			if(!exitForEach && value.id === personId){
				if(key+1 < res.data.length){
					nextId = res.data[key+1].id;
				}
				$scope.person = value;
				$scope.nav = {
					prev: prevId,
					next: nextId
				};
				exitForEach = true;
			}
			prevId = value.id;
		});
	});
}];

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'scripts/templates/PeopleGridView.html',
		controller: PeopleGridViewController,
		controllerAs: 'people'
	});
	$routeProvider.when('/:personId', {
		templateUrl: 'scripts/templates/PeopleDetailView.html',
		controller: PeopleDetailViewController,
		controllerAs: 'person'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);


/*app.controller('PeopleShowcaseController', function ($scope) {
	$scope.viewAnimateClass = 'crossfade';
	$scope.dosomething = function () {
		$scope.viewAnimateClass = 'cross-slide'
	}
});*/

var PeopleShowcaseController = ['$scope', function($scope){
	this.name = 'PeopleShowcaseController';
	$scope.viewAnimateClass = 'crossfade';
	$scope.dosomething = function () {
		$scope.viewAnimateClass = 'cross-slide';
	};
}];

app.controller('PeopleShowcaseController', PeopleShowcaseController);


app.directive('person', function () {
	return {
		scope: {
			name: '@',
			id: '@'
		},
		/*replace: true,*/
		restrict: 'A',
		templateUrl: 'scripts/templates/person.html',
		link: function(scope, element, attrs) {
			scope.toggle = false;
			scope.crossfade = false;
		}
	};
});

app.animation('.toggle', function () {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 0.2, {bottom: '-40px'}, {bottom:'0', onComplete:done});
		},
		leave: function (element, done) {
			TweenMax.fromTo(element[0], 0.2, {bottom: '0'}, {bottom:'-40px', onComplete:done});
		}
	};
});

app.animation('.crossfade', function () {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], 0.1, {opacity: 0}, {opacity:1, onComplete:done});
		},
		leave: function (element, done) {
			TweenMax.fromTo(element[0], 0.1, {opacity: 1}, {opacity:0, onComplete:done});
		}
	};
});



