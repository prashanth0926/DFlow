(function (angular) {
  'use strict';

  angular.module('upflowUi')
    .service('LoginService', LoginService);

  function LoginService($q, $http) {
      var self = this;
      var API_BASE = 'https://gentle-bayou-42839.herokuapp.com/user';

      self.updateUser = updateUser;
      self.putUser = putUser;
      self.getCurrentUser = getCurrentUser;
      self.getUsersCount = getUsersCount;
      self.upVotesList = [];

      function updateUser (user){
          return $http.post(API_BASE + '/login', user)
      }

      function getUsersCount() {
        return $http.get(API_BASE + '/count')
          .then(function(result){
            return result.data;
          })
      }

    function putUser (user){
      return $http.put(API_BASE + '/update', user)
    }

      function getCurrentUser() {
        return $http.get(API_BASE + '/findOne/' + localStorage.getItem('userId'))
          .then(function(result){
            return result.data;
          })
      }
  }
}(angular));
