//main.component.js
'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.module('footer')
    /*.controller('FooterController', ['$scope', function ($scope) {
        //do some stuff
    }])*/
    .directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/basic-template/footer/footer.template.html'
        };
    });
