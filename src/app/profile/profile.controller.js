(function(angular) {
  'use strict';

  angular
    .module('upflowUi')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(ProfileService, ServerConnectService) {
    var vm = this;

    vm.questnObj = {
      questionTitle: 'What is Kafka',
      createdDate: '2017-05-05T06:14:28.770Z',
      postedUserId: 'Amar'
    };

    vm.userObj = {};

    ServerConnectService.getApiResource('users/current').get(function (res) {
      vm.userObj = res;
    })

  }
})(angular);
