angular.module('easyCalendar.filters', []);

angular.module('easyCalendar.filters').filter('month', function() {

  var calendarMonths = [
    {label:"Jan", value:0, name:"Janeiro"},
    {label:"Fev", value:1, name:"Fevereiro"},
    {label:"Mar", value:2, name:"Março"},
    {label:"Abr", value:3, name:"Abril"},
    {label:"Mai", value:4, name:"Maio"},
    {label:"Jun", value:5, name:"Junho"},
    {label:"Jul", value:6, name:"Julho"},
    {label:"Ago", value:7, name:"Agosto"},
    {label:"Set", value:8, name:"Setembro"},
    {label:"Out", value:9, name:"Outubro"},
    {label:"Nov", value:10, name:"Novembro"},
    {label:"Dez", value:11, name:"Dezembro"}
  ];

  return function(date) {
    for(index in calendarMonths){
      var header = calendarMonths[index];

      if(header.value == date.getMonth()) {
        return header.name;
      }
    }
  };

});
