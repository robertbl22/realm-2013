'use strict';

angular.module('peopleApp')
.controller('personDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){
	
	this.name = 'personDetailCtrl';
	var personId = $routeParams.personId;
	var prevId;
	var nextId;
	var exitForEach = false;

	$http.get('scripts/apps/people/people.json').then(function(res){
		angular.forEach(res.data, function(value, key){
			if(!exitForEach && value.id === personId){
				if(key+1 < res.data.length){
					nextId = res.data[key+1].id;
				}
				$scope.person = value;
				$scope.image = {url: 'images/people/230x230/' + $scope.person.id + '.jpg'};
				$scope.nav = {
					prev: prevId,
					next: nextId
				};
				exitForEach = true;
			}
			prevId = value.id;
		});
	});

}]);