var app = angular.module('tacoCat', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'reddit.html',
        controller: 'redditController'
    })
        .when('/palindrome', {
            templateUrl: 'palindrome.html',
            controller: 'palindromeController'
        })
        .otherwise({
            template: `<h1>THIS PAGE DOES NOT EXIST<h1>`
        });

    $locationProvider.hashPrefix('');
});