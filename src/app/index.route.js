(function() {
  'use strict';

  angular
    .module('upflowUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('qa-details', {
        url: '/qa-details/:id',
        templateUrl: 'app/qa_details/qa_details.html',
        controller: 'QADetailsController',
        controllerAs: 'qa'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .state('ask', {
        url: '/ask/:search',
        templateUrl: 'app/ask_q/ask_q.html',
        controller: 'AskQController',
        controllerAs: 'ask'
      })
      .state('leaders', {
        url: '/leaders',
        templateUrl: 'app/leaders/leaders.html',
        controller: 'LeadersController',
        controllerAs: 'leader'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
