/// <reference path="../typings/angularjs/angular.d.ts" />

app.factory('Avengers', function () {
    var Avengers = {};

    Avengers.cast = [
        {
            "name": "rajasekhar",
            "character": "Captain America"
        },
        {
            "name": "manoj",
            "character": "Iron Man"
        },
        {
            "name": "mahesh",
            "character": "Thor"
        },
        {
            "name": "bhadram",
            "character": "Hulk"
        },
        {
            "name": "ramesh",
            "character": "Falcon"
        },
        {
            "name": "balu",
            "character": "Hawk-Eye"
        }
    ];
    return Avengers;
});