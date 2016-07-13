/// <reference path="../typings/angularjs/angular.d.ts" />

app.factory('Avengers', function () {
    var Avengers = {};

    Avengers.cast = [
        {
            "name": "Rajasekhar",
            "character": "Captain America"
        },
        {
            "name": "Manoj",
            "character": "Iron Man"
        },
        {
            "name": "Mahesh",
            "character": "Thor"
        },
        {
            "name": "Bhadram",
            "character": "Hulk"
        },
        {
            "name": "Ramesh",
            "character": "Falcon"
        },
        {
            "name": "Balu",
            "character": "Hawk-Eye"
        }
    ];
    return Avengers;
});