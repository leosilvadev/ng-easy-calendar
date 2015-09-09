angular.module('easyCalendar.controllers', ['easyCalendar.values']);

angular.module('easyCalendar.controllers')
	.controller('EasyCalendarController',
	function($scope, daysIn, easyCalendarFactory, calendarMonths, calendarWeekDays){

	$scope.goTo = function(date){
		$scope.calendar = easyCalendarFactory(date);
	};

	$scope.executeClickFunction = function(day){
		$scope.click({day: day});
	};

	$scope.goTo(new Date());

});
