angular.module('tickTockApp', ['ngRoute']);
 
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',
 
        })
        .when('/alarma', {
            templateUrl: 'alarma.html',
            controller: 'AlarmaCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);