'use strict';

angular.module('peopleApp')
.controller('peopleAppCtrl', ['$scope', function($scope){

	this.name = 'peopleCtrl';
	$scope.viewAnimateClass = 'crossfade';
	
	$scope.dosomething = function () {
		$scope.viewAnimateClass = 'cross-slide';
	};
	
}]);