/**
 * Created by pmolakala on 5/2/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .service('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q, $http) {
    var self = this;

    self.updateQuestion = updateQuestion;
    self.getQuestions = getQuestions;
    self.getQuestion = getQuestion;
    self.getQuestionAnswers = getQuestionAnswers;
    self.postAnswer = postAnswer;
    self.getQuestionsCount = getQuestionsCount;
    self.getAnswersCount = getAnswersCount;
    self.getSearchedQuestions = getSearchedQuestions;
    var API_BASE = 'https://gentle-bayou-42839.herokuapp.com/question';
    var API_BASE_ANSWER = 'https://gentle-bayou-42839.herokuapp.com/answer';

    function getSearchedQuestions(search) {
      return $http.get(API_BASE + '/search?searchTerm='+search)
        .then(function(result){
          return result.data;
        })
    }

    function getQuestionsCount() {
        return $http.get(API_BASE + '/count')
          .then(function(result){
              return result.data;
          })
    }

    function getAnswersCount() {
      return $http.get(API_BASE_ANSWER + '/count')
        .then(function(result){
          return result.data;
        })
    }

    function getQuestions() {
      return $http.get(API_BASE + '/findAll')
        .then(function(result){
          return result.data;
        })
    }

    function getQuestion(id) {
      return $http.get(API_BASE + '/findOne/' + id)
        .then(function(result){
          return result.data;
        })
    }

    function getQuestionAnswers(id) {
      return $http.get(API_BASE + '/findAllAnswers/' + id)
        .then(function(result){
          return result.data;
        })
    }

    function updateQuestion(question) {
      return $http.put(API_BASE + '/update', question);
    }

    function postAnswer (answer){
      return $http.post(API_BASE_ANSWER + '/create', answer);
    };

  }
})();
