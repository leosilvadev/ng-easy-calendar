angular.module('easyCalendar.services', []);

angular.module('easyCalendar.services').factory('currentCalendar', function(daysIn){
  return function(){
    var now = new Date();
    var days = daysIn(now.getMonth(), now.getFullYear());

    var firstMonthDay = days[0];
    var lastMonthDay = days[days.length-1];

    var daysToGetBefore = firstMonthDay.getDay();
    var daysToGetAfter = 6 - lastMonthDay.getDay();

    var daysLastMonth = daysIn(now.getMonth()-1, now.getYear());
    var lastDaysLastMonth = [];
    while(lastDaysLastMonth.length!=daysToGetBefore){
      lastDaysLastMonth.push( daysLastMonth.pop() );
    }

    var daysNextMonth = daysIn(now.getMonth()+1, now.getYear()).reverse();
    var firstDaysNextMonth = [];
    while(firstDaysNextMonth.length!=daysToGetAfter){
      firstDaysNextMonth.push( daysNextMonth.pop() );
    }

    return lastDaysLastMonth.concat(days).concat(firstDaysNextMonth);
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
