angular.module('easyCalendar.controllers', ['easyCalendar.values']);

angular.module('easyCalendar.controllers')
	.controller('EasyCalendarController',
	function($scope, daysIn, easyCalendarFactory, calendarMonths, calendarWeekDays){

	$scope.month = function(monthIndex){
		for(index in $scope.calendarMonths){
			var header = $scope.calendarMonths[index];

			if(header.value == monthIndex) {
				return header;
			}
		}
	};

	$scope.goTo = function(date){
		$scope.calendar = easyCalendarFactory(date);
	};

	$scope.goTo(new Date());

});
