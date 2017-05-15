/**
 * Created by pmolakala on 5/3/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .directive('voteCounter', voteCounter);

  /** @ngInject */
  function voteCounter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/voteCounter/voteCounter.html',
      scope: {
        count: '=',
        new: '=',
        questionId: '=',
        answerId: '=',
        usersVoted: '='
      },
      controller: voteCounterController,
      controllerAs: 'vc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function voteCounterController(lodash, ServerConnectService) {
      var vm = this;
      var userData = ServerConnectService.getObj('TOKEN_KEY');

      if (!vm.count) {
        vm.count = 0;
      }

      vm.upVotesList = [];
      vm.inc = inc;
      vm.dec = dec;
      vm.openUFDropDown = openUFDropDown;

      function inc() {
        // if (!lodash.includes(vm.upVotesList, localStorage.getItem('userId'))){
        //   vm.count++;
        //   vm.upVotesList.push(localStorage.getItem('userId'));
        // }
        if (!lodash.includes(vm.usersVoted, userData.uid)) {
          if (vm.questionId && vm.answerId) {
            ServerConnectService.getApiResource('qas/:Id/answers/:answerId/vote?upVote=true').get({Id: vm.questionId, answerId: vm.answerId}, function (res) {
              vm.count = res.voteCount;
            });
          } else if (vm.questionId) {
            ServerConnectService.getApiResource('qas/:Id/vote?upVote=true').get({Id: vm.questionId}, function (res) {
              vm.count = res.voteCount;
            });
          }
        }
      }

      function dec() {
        if (!lodash.includes(vm.usersVoted, userData.uid)) {
          if (vm.questionId && vm.answerId) {
            ServerConnectService.getApiResource('qas/:Id/answers/:answerId/vote?upVote=false').get({Id: vm.questionId, answerId: vm.answerId}, function (res) {
              vm.count = res.voteCount;
            });
          } else if (vm.questionId) {
            ServerConnectService.getApiResource('qas/:Id/vote?upVote=false').get({Id: vm.questionId}, function (res) {
              vm.count = res.voteCount;
            });
          }
        }
      }

      function openUFDropDown() {

      }
    }
  }

})();
