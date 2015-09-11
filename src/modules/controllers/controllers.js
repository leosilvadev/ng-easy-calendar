"use strict";

angular.module('easyCalendar.controllers', []);

angular.module('easyCalendar.controllers')
	.controller('EasyCalendarController',
	function($scope, easyCalendarFactory){

	$scope.goTo = function(date){
		$scope.calendar = easyCalendarFactory(date);
	};

	$scope.executeClickFunction = function(day){
		$scope.click({day: day});
	};

	$scope.goTo(new Date());

});
