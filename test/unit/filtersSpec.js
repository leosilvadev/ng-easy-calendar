'use strict';

describe('Filters unit tests', function() {

  var $filter;

  beforeEach(module('easyCalendar.filters'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns 0 when given null', function() {
    var calendarMonthsMock = [{label:"Jan", value:0, name:"Janeiro"}];
    var month = $filter('month', {calendarMonths: calendarMonthsMock});

    expect(month(new Date(2015, 0, 1))).toEqual('Janeiro');
  });

});
