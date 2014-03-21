'use strict';

angular.module('peopleApp')
.controller('peopleGridCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('scripts/apps/people/people.json').then(function(results){
		$scope.people = results.data;

		/* chunk data into rows of 4 cols */
		$scope.people.range = function() {
			var range = [];
			for( var i = 0; i < $scope.people.length; i = i + 4 ) {
				range.push(i);
			}
			return range;
		};
	});
	
}]);