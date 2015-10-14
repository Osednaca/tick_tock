angular.module('tickTockApp')
  .controller('InicioCtrl', function ($scope, $interval,$timeout) {
  $scope.alarm_set_message = true;
  $scope.alarm_message = true;
  var tick = function() {
    $scope.clock = Date.now();
  }
  var Check = function(){
    var d = new Date();
    if(d.getHours()+":"+(d.getMinutes()<10?'0':'') + d.getMinutes() == $scope.alarma.alarm_hidden)
    {
      var audio = new Audio('media/alert.mp3');
      audio.play();
      $scope.alarm_message = !$scope.alarm_message;
      $scope.alarm_set_message = !$scope.alarm_set_message;
      $interval.cancel(check);
      $timeout(function(){
                audio.pause();
                $scope.alarm_message = !$scope.alarm_message;
              }, 5000);
    }
  }
  $scope.setAlarm = function(){
    $scope.alarma.alarm_hidden = $scope.alarma.alarm;
    $scope.alarma.alarm = "";
    $scope.alarm_set_message = !$scope.alarm_set_message;
    $scope.alarma.set_message = "Alarm set up to "+$scope.alarma.alarm_hidden;
    check = $interval(Check, 1000);
  }
  tick();
  $interval(tick, 1000);
  });