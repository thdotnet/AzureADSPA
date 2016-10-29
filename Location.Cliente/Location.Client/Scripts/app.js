/// <reference path="lib/angular.js" />
var app = angular.module("app", ['AdalAngular']);

app.config(['$httpProvider', 'adalAuthenticationServiceProvider', function ($httpProvider, adalProvider) {
    var endpoints = {
        "{webapiurl}": "{URI da ID do Aplicativo}"
    };

    adalProvider.init({
        instance: "https://login.microsoftonline.com/",
        tenant: "",
        clientId: "",
        endpoints: endpoints
    }, $httpProvider);
}]);

var locationController = app.controller("locationController", ['$scope', '$http', 'adalAuthenticationService', function ($scope, $http, adalService) {

    $scope.getLocation = function () {
        $http.get("https://localhost:44370/api/location?cityName=dc").success(function(location){
            $scope.city = location;
        });
    }
    ,
    $scope.login = function () {
        adalService.login();
    }

    $scope.logout = function () {
        adalService.logOut();
    }

}]);