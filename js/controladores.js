angular.module('tickTockApp')
  .controller('InicioCtrl', function ($scope, $interval,$timeout) {
  var tick = function() {
    $scope.clock = Date.now();
  }
  var Check = function(){
    var d = new Date();
    if(d.getHours()+":"+d.getMinutes() == document.getElementsByName("alarm_hidden")[0].value)
    {
      var audio = new Audio('media/alert.mp3');
      audio.play();
      alert("It's time!");
      $interval.cancel(check);
      $timeout(function(){
                audio.pause();
              }, 5000);
    }
  }
  $scope.setAlarm = function(){
    document.getElementsByName("alarm_hidden")[0].value = document.getElementsByName("alarm")[0].value;
    document.getElementsByName("alarm")[0].value = "";
    alert("Alarm set up to "+document.getElementsByName("alarm_hidden")[0].value)
    check = $interval(Check, 1000);
  }
  tick();
  $interval(tick, 1000);
  });