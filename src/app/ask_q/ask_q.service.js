(function (angular) {
  'use strict';

  angular.module('upflowUi')
    .service('QAService', QAService);

  function QAService($q, $http) {
    var self = this;
    var API_BASE = "https://gentle-bayou-42839.herokuapp.com/question";

    self.postQuestion = postQuestion;

    function postQuestion (question){
      console.log("Question :", question);
      return $http.post(API_BASE + '/create', question);
    };


  }
}(angular));
