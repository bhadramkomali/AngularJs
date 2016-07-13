/// <reference path="../typings/angularjs/angular.d.ts" />

app.controller('AvngersCtrl', function($scope, Avengers) {
    $scope.avengers = Avengers;
})