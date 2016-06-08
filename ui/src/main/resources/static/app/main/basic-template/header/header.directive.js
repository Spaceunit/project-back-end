//main.component.js
'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.module('header')
    .controller('HeaderController', ['$scope', function ($scope) {
        //do some stuff
    }])
    .directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/basic-template/header/header.template.html'
        };
    });
