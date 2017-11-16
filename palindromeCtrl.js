var app = angular.module('tacoCat');
app.controller('palindromeController', function ($scope) {
    $scope.palicheck = function (word) {
        var revword = word.split('').reverse().join('');
        return revword == word;
    };
});