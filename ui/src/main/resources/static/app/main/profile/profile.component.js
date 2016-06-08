'use strict';
//profile component;

angular.
  module('profile').
  component('profile', {
    templateUrl: 'main/profile/profile.template.html',
    controller: ['$scope',
      function ProfileController($scope) {
        //this.some = 0
        //adding a role
        this.imageURL = 'media/ic_add_a_photo_black_48px.svg';
        this.height = '';
        this.width  = '300px';
        this.name = 'Lol'
        $scope.addRole = function addRole(id){
          id = 0;
        };
        //deleting a role
        $scope.delRole = function delRole(id){
          id = 0;
        };
      }
    ]
  });
