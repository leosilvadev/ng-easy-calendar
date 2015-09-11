'use strict';

angular.module('easyCalendar.filters', ['easyCalendar.values']);

angular.module('easyCalendar.filters').filter('month', function(calendarMonths) {

  return function(date) {
    for(var index in calendarMonths){
      var header = calendarMonths[index];

      if(header.value == date.getMonth()) {
        return header.name;
      }
    }
  };

});
