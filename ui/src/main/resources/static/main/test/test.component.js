//test.component.js
'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.module('test').component('test', {
    templateUrl: 'main/test/test.template.html',
    controller: ['$location', '$http',
        function TestController($location, $http) {
            //some do
            var self = this;
            $http({
                method: 'JSONP',
                url: '/resource'
            }).success(function (status) {
                console.log(data);
            }).error(function (status) {
                console.log("Error");
            });
        }
    ]
});
