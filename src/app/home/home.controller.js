/**
 * Created by pmolakala on 5/2/17.
 */
(function () {
  'use strict';

  angular
    .module('upflowUi')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($window, $rootScope, HomeService, LoginService, ServerConnectService, lodash) {
    var vm = this;

    vm.trendingQuestions = [{}, {}];
    vm.tagNames = ['kafka', 'elastic', 'jenkins'];
    vm.showJumbotron = true;
    vm.homeTitle = 'trending';
    vm.allTopics = 'active';
    vm.subsTopics = '';
    vm.subscribedTab = false;
    vm.questions = [];
    vm.answersCount = 0;
    vm.questionsCount = 0;
    vm.usersCount = 0;
    vm.searchTerm = '';
    vm.oneLogin = oneLogin;
    vm.cwsLogin = cwsLogin;
    vm.showAllQuestions = showAllQuestions;
    vm.toggleTabs = toggleTabs;
    vm.search = search;

    ServerConnectService.getApiResource('qas').query(function (res) {
      vm.questions = res;
      vm.questionsCount = res.length;
      lodash.forEach(vm.questions, function (q) {
        vm.answersCount += q.answers.length;
      });
    });

    ServerConnectService.getApiResource('users/count').get(function (res) {
      vm.usersCount = res.count;
    });

    // HomeService.getQuestionsCount().then(function (res) {
    //   vm.questionsCount = res;
    // });
    //
    // HomeService.getAnswersCount().then(function (res) {
    //   vm.answersCount = res;
    // });
    //
    // LoginService.getUsersCount().then(function (res) {
    //   vm.usersCount = res;
    // });
    //
    // HomeService.getQuestions().then(function (questions) {
    //   vm.questions = questions;
    // });

    $rootScope.$on('openHome', function () {
      vm.searchTerm = '';
      vm.homeTitle = 'trending';
      vm.showJumbotron = true;
    });

    function search(e) {
      if (e.which === 13 && vm.searchTerm != '') {
        vm.homeTitle = 'search';
        vm.showJumbotron = false;

        // HomeService.getSearchedQuestions(vm.searchTerm).then(function (res) {
        //   vm.questions = res;
        // });
      }
    }

    function toggleTabs(index) {
      switch (index) {
        case 0:
          vm.allTopics = 'active';
          vm.subsTopics = '';
          vm.subscribedTab = false;
          break;
        case 1:
          vm.subsTopics = 'active';
          vm.allTopics = '';
          vm.subscribedTab = true;
          break;
        default:
          vm.allTopics = 'active';
          vm.subsTopics = '';
          vm.subscribedTab = false;
          break;
      }
    }

    function oneLogin() {
      console.log("I am here");
    }

    function cwsLogin() {

    }

    function showAllQuestions() {
      vm.showJumbotron = false;
      $window.scrollTo(0, 0);
      vm.allTopics = 'active';
      vm.subsTopics = '';
      vm.homeTitle = 'all';
      vm.subscribedTab = false;
    }
  }
})();
