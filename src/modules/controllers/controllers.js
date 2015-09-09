angular.module('easyCalendar.controllers',[]);

angular.module('easyCalendar.controllers').controller('EasyCalendarController', function($scope, daysIn, easyCalendarFactory){

	$scope.calendarWeekDays = [
		{label:"Dom", value:0},
		{label:"Seg", value:1},
		{label:"Ter", value:2},
		{label:"Qua", value:3},
		{label:"Qui", value:4},
		{label:"Sex", value:5},
		{label:"Sab", value:6}
	];

	$scope.calendarMonths = [
		{label:"Jan", value:0, name:"Janeiro"},
		{label:"Fev", value:1, name:"Fevereiro"},
		{label:"Mar", value:2, name:"Março"},
		{label:"Abr", value:3, name:"Abril"},
		{label:"Mai", value:4, name:"Maio"},
		{label:"Jun", value:5, name:"Junho"},
		{label:"Jul", value:6, name:"Julho"},
		{label:"Ago", value:7, name:"Agosto"},
		{label:"Set", value:8, name:"Setembro"},
		{label:"Out", value:9, name:"Outubro"},
		{label:"Nov", value:10, name:"Novembro"},
		{label:"Dez", value:11, name:"Dezembro"}
	];

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
