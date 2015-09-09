angular.module('easyCalendar.directives', ['easyCalendar.controllers']);

angular.module('easyCalendar.directives').directive('easyCalendar', function(){

  return {
    restrict: 'E',
    controller: 'EasyCalendarController',
    templateUrl: '/modules/views/calendar.html',
    scope: {
      click: '&'
    }
  };

});
