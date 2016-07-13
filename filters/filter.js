/// <reference path="../typings/angularjs/angular.d.ts" />
app.filter('capitalise', function() {
    return function(text) {
        return text.toUpperCase();
    }
})