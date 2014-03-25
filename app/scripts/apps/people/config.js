'use strict';

angular.module('peopleApp')
.config(['$routeProvider', function ($routeProvider){

	$routeProvider.when('/', {
		templateUrl: 'scripts/apps/people/people-grid/peopleGrid.html',
		controller: 'peopleGridCtrl',
		controllerAs: 'people'
	});
	$routeProvider.when('/:personId', {
		templateUrl: 'scripts/apps/people/person-detail/personDetail.html',
		controller: 'personDetailCtrl',
		controllerAs: 'person'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
	
}]);