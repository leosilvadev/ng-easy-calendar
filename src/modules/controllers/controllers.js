angular.module('easyCalendar.controllers',[]);

angular.module('easyCalendar.controllers').controller('EasyCalendarController', function($scope, daysIn, currentCalendar){

	$scope.calendarHeader = [
		{label:"Dom", value:0},
		{label:"Seg", value:1},
		{label:"Ter", value:2},
		{label:"Qua", value:3},
		{label:"Qui", value:4},
		{label:"Sex", value:5},
		{label:"Sab", value:6}
	];

	$scope.days = currentCalendar();

});
