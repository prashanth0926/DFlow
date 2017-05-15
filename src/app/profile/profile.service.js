(function (angular) {
  'use strict';

  angular.module('upflowUi')
    .service('ProfileService', ProfileService);

  function ProfileService($q, $http) {
    var self = this;
    var API_BASE = 'http://localhost:8080/question';

    self.getUserQuestions = getUserQuestions;
    self.userInfo = userInfo;
    self.getSubscribedTopics = getSubscribedTopics;

    function getUserQuestions() {

    }

    function userInfo() {

    }


    function getSubscribedTopics() {

    }

  }
}(angular));
