'use strict';

var app = angular.module('TimingApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'form.html',
		controller: 'FormViewController'
	});
	$routeProvider.when('/download', {
		templateUrl: 'download.html',
		controller: 'DownloadViewController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);

app.controller('TimingController', function($scope, $animate) {
	$scope.doit = true;
	$scope.view = {};
	$scope.view.animateClass = 'fadein'; 
	$scope.view.formComplete = false;
});

app.controller('FormViewController', function($scope, $location, $http) {
	$scope.user = {};
	$scope.user.name = '';
	$scope.user.email = '';
	$scope.showValidationMessages = false;
	$scope.submitForm = function(form) {
		if(form.$invalid) {
			$scope.showValidationMessages = true;
		} else {
			processForm();
			$scope.view.formComplete = true;
			$location.path('/download');
		}
	};
	var processForm = function() {
		$http({
			method : 'POST',
			url : 'send.php',
			data: $.param($scope.user),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
			/*if (!data.success) {
				$scope.errorName = data.errors.name;
				$scope.errorSuperhero = data.errors.superheroAlias;
			} else {
				$scope.message = data.message;
			}*/
		});
	};

});

app.controller('DownloadViewController', function($scope, $location) {
	if(!$scope.view.formComplete) {
		$location.path('/');
	}
});

app.directive("rbShake", function($animate, $timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {

			startRing(700);
			stopRing(2000);

			element.bind('click', function() {
				startRing(0);
				stopRing(700);
			});

			function startRing(delay) {
				$timeout(function(){
					$animate.addClass(element, "shake");
				}, delay);
			}

			function stopRing(duration) {
				$timeout(function(){
					$animate.removeClass(element, "shake");
				}, duration);
			}
		}
	};
});

app.animation('.fadein', function() {
	return {
		enter: function (element, done) {
			TweenMax.fromTo(element[0], .5, {marginLeft: '-20px'}, {marginLeft:'0', onComplete:done});
			TweenMax.fromTo(element[0], 1, {opacity: 0}, {opacity:1, onComplete:done});
		}
	};
});

app.animation('.shake', function() {
	return {
		addClass: function (element, className) {
			TweenMax.to(element[0], .05, {css:{rotation:7}, yoyo:true, repeat:-1, onComplete:allDone});
			function allDone() {
				TweenMax.set(element[0], {clearProps:"all"});
			}
		},
		removeClass: function (element, className) {
			TweenMax.killTweensOf(element[0]);
			TweenMax.set(element[0], {clearProps:"all"});
		}
	};
});

