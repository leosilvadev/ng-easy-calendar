angular.module('easyCalendar.services', []);

angular.module('easyCalendar.services').factory('easyCalendarFactory', function(daysIn){

  return function(date){
    var days = daysIn(date.getMonth(), date.getFullYear());

    var firstMonthDay = days[0];
    var lastMonthDay = days[days.length-1];

    var daysToGetBefore = firstMonthDay.getDay();
    var daysToGetAfter = 6 - lastMonthDay.getDay();

    var daysLastMonth = daysIn(date.getMonth()-1, date.getYear());
    var lastDaysLastMonth = [];
    while(lastDaysLastMonth.length!=daysToGetBefore){
      lastDaysLastMonth.push( daysLastMonth.pop() );
    }

    var daysNextMonth = daysIn(date.getMonth()+1, date.getYear()).reverse();
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
