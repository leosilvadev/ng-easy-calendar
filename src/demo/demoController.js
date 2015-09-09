angular.module('easyCalendar.demo', ['easyCalendar']);

angular.module('easyCalendar.demo').controller('DemoController', function($scope){

  $scope.clicking = function(day){
    console.log(day);
  };

});
