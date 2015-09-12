'use strict';

describe('Directives unit tests', function() {

  var $compile, $scope, $rootScope;

  beforeEach(module('easyCalendar.services'));
  beforeEach(module('easyCalendar.filters'));
  beforeEach(module('easyCalendar.controllers'));
  beforeEach(module('easyCalendar.directives'));
  beforeEach(module('easyCalendar.templates'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
	 $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));

  it('should generate the correct number of days', function() {
    $scope.clicking = function(day){ return true };
	 $scope.days = [
		{date: new Date(2015,1,1), currentMonth:true},
		{date: new Date(2015,1,2), currentMonth:true}
	 ];

	 var element = angular.element("<easy-calendar click='clicking(day)'></easy-calendar>");

	 $compile(element)($scope);

    $rootScope.$digest();

    expect(element[0].getElementsByClassName('day-label').length).toBe(35);
  });
});
