angular.module('easyCalendar.services', []);

angular.module('easyCalendar.services').factory('easyCalendarFactory', function(daysIn){

  return function(date){
    var days = daysIn(date.getMonth(), date.getFullYear()).map(function(date){
      return {
        date: date,
        currentMonth: true
      };
    });

    var firstMonthDay = days[0].date;
    var lastMonthDay = days[days.length-1].date;

    var daysToGetBefore = firstMonthDay.getDay();
    var daysToGetAfter = 6 - lastMonthDay.getDay();

    var daysLastMonth = daysIn(date.getMonth()-1, date.getYear());
    var lastDaysLastMonth = [];
    while(lastDaysLastMonth.length!=daysToGetBefore){
      lastDaysLastMonth.push( {
        date: daysLastMonth.pop(),
        currentMonth: false
      } );
    }

    var daysNextMonth = date.getMonth()==11 ? daysIn(0, date.getYear()+1).reverse() : daysIn(date.getMonth()+1, date.getYear()).reverse();

    var firstDaysNextMonth = [];
    while(firstDaysNextMonth.length!=daysToGetAfter){
      firstDaysNextMonth.push( {
        date: daysNextMonth.pop(),
        currentMonth: false
      } );
    }

    return {
      previous: new Date(date.getFullYear(), date.getMonth()-1, 1),
      days: lastDaysLastMonth.reverse().concat(days).concat(firstDaysNextMonth),
      next: new Date(date.getFullYear(), date.getMonth()+1, 1)
    };
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
