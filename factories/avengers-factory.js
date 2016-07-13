/// <reference path="../typings/angularjs/angular.d.ts" />

app.factory('Avengers', function () {
    var Avengers = {};

    Avengers.cast = [
        {
            "name": "rajasekhar",
            "character": "captain america"
        },
        {
            "name": "manoj",
            "character": "orn man"
        },
        {
            "name": "mahesh",
            "character": "hawk eye"
        },
        {
            "name": "bhadram",
            "character": "hulk"
        }
    ];
    return Avengers;
});