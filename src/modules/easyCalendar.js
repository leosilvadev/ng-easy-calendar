angular.module('easyCalendar', []);

angular.module('easyCalendar').controller('EasyCalendarController', function($scope){

  $scope.calendarHeader = [
    {label:"Dom", value:0},
    {label:"Seg", value:1},
    {label:"Ter", value:2},
    {label:"Qua", value:3},
    {label:"Qui", value:4},
    {label:"Sex", value:5},
    {label:"Sab", value:6}
  ];

  $scope.currentMonthDays = function(){
    var now = new Date();
    var days = $scope.daysIn(now.getMonth(), now.getFullYear());

    console.log(typeof days[0]);
    var firstMonthDay = new Date(days[0]);
    var dayInWeek = firstMonthDay.getDay();
    var daysToGetAfter = dayInWeek;

    var daysLastMonth = $scope.daysIn(now.getMonth()-1, now.getYear());
    var lastDaysLastMonth = [];
    while(lastDaysLastMonth.length!=daysToGetAfter){
      lastDaysLastMonth.push( daysLastMonth.pop() );
    }
    return lastDaysLastMonth.concat(days);
  };

  $scope.daysIn = function(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  $scope.today = {
    today: new Date().getDay(),

  };

  $scope.days = $scope.currentMonthDays();

});

angular.module('easyCalendar').directive('easyCalendar', function(){

  return {
    restrict: 'E',
    templateUrl: 'modules/views/calendar.html'
  };

});
