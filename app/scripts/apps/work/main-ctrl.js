'use strict';

angular.module('workApp')
.controller('workAppCtrl', [function () {

	this.toggle = true;
	
	$(document).ready (function () {
		$('.container').fitVids();
	});
	
}]);