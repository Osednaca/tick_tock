angular.module('tickTockApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',
 
        })
        .otherwise({
            redirectTo: '/'
        });
}]);