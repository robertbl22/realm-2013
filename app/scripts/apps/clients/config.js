'use strict';

angular.module('clientsApp')
.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'scripts/apps/clients/clients-grid/clientsGrid.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
	
}]);