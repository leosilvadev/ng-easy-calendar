describe('Days In factory Test', function() {

  beforeEach(module('easyCalendar.services'));

  it('should return the correct days in september of 2015', inject(function(currentCalendar){
    var days = daysIn(8, 2015);
    expect(days.length).toBe(30);
  }));

});
