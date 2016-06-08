//app.config.js
angular.
  module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/main', {
          template: '<main></main>'
        }).
        when('/main/profile', {
          template: '<profile></profile>'
        }).when('/main/sign-up',{
          template: '<sign-up></sign-up>'
        }).when('/main/sign-in',{
          template: '<sign-in></sign-in>'
        }).when('/main/profile',{
          template: '<profile></profile>'
        }).when('/main/profile/vendor', {
          template: '<vendor></vendor>'
        }).when('/main/profile/customer',{
          template: '<customer></customer>'
        }).when('/main/profile/carrier',{
          template: '<carrier></carrier>'
        }).
        otherwise('/main');
    }
  ]);
