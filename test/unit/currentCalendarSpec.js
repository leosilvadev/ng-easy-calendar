'use strict';

describe('Days In factory Test', function() {

  beforeEach(module('easyCalendar.services'));

  it('should return the correct days when it is the last month in the year', inject(function(easyCalendarFactory){
    var calendar = easyCalendarFactory(new Date(2015, 11, 1));

    expect( calendar.days.length ).toBe( 35 );

    expect( calendar.previous.getFullYear() ).toBe( 2015 );
    expect( calendar.previous.getMonth() ).toBe( 10 );

    expect( calendar.next.getFullYear() ).toBe( 2016 );
    expect( calendar.next.getMonth() ).toBe( 0 );

    expect( calendar.days[0].date.getDate() ).toBe( 29 );
    expect( calendar.days[1].date.getDate() ).toBe( 30 );

    expect( calendar.days[33].date.getDate() ).toBe( 1 );
    expect( calendar.days[34].date.getDate() ).toBe( 2 );
  }));

});
