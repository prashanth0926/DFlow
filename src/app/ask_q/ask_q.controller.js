(function(angular) {
  'use strict';

  angular
    .module('upflowUi')
    .controller('AskQController', AskQController);

  /** @ngInject */
  function AskQController(QAService, lodash, LoginService, $state, ServerConnectService, $stateParams) {
    var vm = this;

    vm.title = $stateParams.search;
    vm.postQuestion = postQuestion;

    function postQuestion() {
      vm.allTopics = lodash.map(vm.topics, "text");
      vm.question = {
        title: vm.title,
        question: vm.details,
        topics: vm.allTopics || [],
        answers: []
      };

      ServerConnectService.getApiResource('qas').save(vm.question, function (res) {
        $state.go("qa-details", {id: res._id});
      });

        // QAService.postQuestion(vm.question).then(function (res) {
        //   if (vm.user.askedQuestions) {
        //     vm.user.askedQuestions.push(res.data.id);
        //   } else{
        //     vm.user.askedQuestions = [res.data.id];
        //   }
        //   LoginService.putUser(vm.user).then(function () {
        //     $state.go("qa-details", {id: res.data.id});
        //   });
        // });
    }

  }
})(angular);
