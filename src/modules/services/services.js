angular.module('easyCalendar.services', []);

angular.module('easyCalendar.services').factory('currentCalendar', function(daysIn){
  return function(){
    var now = new Date();
    var days = daysIn(now.getMonth(), now.getFullYear());

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

angular.module('easyCalendar.services').factory('daysIn', function(){
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
