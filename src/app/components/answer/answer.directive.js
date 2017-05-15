(function() {
  'use strict';

  angular
    .module('upflowUi')
    .directive('upFlowAnswer', upFlowAnswer);

  /** @ngInject */
  function upFlowAnswer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/answer/answer.html',
      scope: {
        answerObj: '=',
        asked: '=',
        questionId: '='
      },
      controller: upFlowAnswerController,
      controllerAs: 'answer',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function upFlowAnswerController() {
      var vm = this;

      if (vm.answerObj.upVotes) {
        vm.votedUsers = vm.answerObj.upVotes.concat(vm.answerObj.downVotes);
      }

      vm.calcRelTime = calcRelTime;

      function calcRelTime(time1) {
        return moment(time1).fromNow();
      }
    }
  }

})();

