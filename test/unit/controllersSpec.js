'use strict';

describe('EasyCalendarController unit tests', function() {

  var controller, scope;

  beforeEach(module('easyCalendar.controllers'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.click = function(){};

    controller = $controller('EasyCalendarController', {
      $scope: scope,
      easyCalendarFactory: function(){}
    });
  }));

  describe('EasyCalendarController tests', function(){

    it('should execute the click function passing the day that was clicked on', function(){
      var date = new Date();
      var day = {date: new Date()};
      var clickFn = spyOn(scope, 'click');

      scope.executeClickFunction(day);

      expect(clickFn).toHaveBeenCalledWith({day: day});
    });

  });

});