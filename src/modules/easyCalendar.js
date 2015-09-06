angular.module('easyCalendar', []);



angular.module('easyCalendar').factory('daysIn', function(){
  return function(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };
});

angular.module('easyCalendar').factory('currentCalendar', function(daysIn){
  return function(){
    var now = new Date();
    var days = daysIn(now.getMonth(), now.getFullYear());

    console.log(typeof days[0]);
    var firstMonthDay = new Date(days[0]);
    var dayInWeek = firstMonthDay.getDay();
    var daysToGetAfter = dayInWeek;

    var daysLastMonth = daysIn(now.getMonth()-1, now.getYear());
    var lastDaysLastMonth = [];
    while(lastDaysLastMonth.length!=daysToGetAfter){
      lastDaysLastMonth.push( daysLastMonth.pop() );
    }
    return lastDaysLastMonth.concat(days);
  };
});



angular.module('easyCalendar').controller('EasyCalendarController', function($scope, daysIn, currentCalendar){

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

angular.module('easyCalendar').directive('easyCalendar', function(){

  return {
    restrict: 'E',
    templateUrl: 'modules/views/calendar.html'
  };

});
