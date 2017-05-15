(function() {
  'use strict';

  angular
    .module('upflowUi')
    .controller('QADetailsController', QADetailsController);

  /** @ngInject */
  function QADetailsController(HomeService, $stateParams, LoginService, ServerConnectService) {
    var vm = this;

    vm.postAnswer = postAnswer;
    vm.question = {};
    vm.askedQuestion = {};
    vm.answers = [];
    vm.postAnswerObj = {};

    ServerConnectService.getApiResource('qas/:Id').get({Id: $stateParams.id}, function (question) {
      vm.question = question;
      vm.askedQuestion = {
        _id: question._id,
        answer: question.question,
        createdAt: question.createdAt,
        topics: question.topics,
        userId: question.userId,
        upVotes: question.upVotes,
        downVotes: question.downVotes
      };
    });

    // HomeService.getQuestion($stateParams.id).
    // then(function(question){
    //   vm.question = question;
    //   vm.askedQuestion = {
    //     id: question.id,
    //     answer: question.question,
    //     createdDate: question.createdDate,
    //     topics: question.topics,
    //     userId: question.postedUserId,
    //     upvotedBy: checkValue(question.upVotedBy)
    //   };
    //   console.log(vm.askedQuestion);
    // });
    //
    // HomeService.getQuestionAnswers($stateParams.id).
    // then(function(res){
    //   vm.answers = res;
    // });
    //
    // LoginService.getCurrentUser().then(function (res) {
    //   vm.user = res;
    // });
    //
    // function checkValue(v) {
    //   if (v && v.length) {
    //     return v
    //   }
    //   return 0;
    // }

    function postAnswer() {
      ServerConnectService.getApiResource('qas/:Id/answers').save({Id: $stateParams.id}, vm.postAnswerObj,
        function (res) {
          vm.question = res;
          vm.postAnswerObj.answer = '';
        }
      );

      ServerConnectService.getApiResource('users/incAnswer').get();

      // if (vm.postAnswerObj.answer != ''){
      //   HomeService.postAnswer(vm.postAnswerObj).then(function (res) {
      //     console.log(res);
      //     if (vm.question.answerList) {
      //       vm.question.answerList.push(res.data.id);
      //     } else {
      //       vm.question.answerList = [res.data.id];
      //     }
      //     HomeService.updateQuestion(vm.question);
      //     if (vm.user.answeredQuestions) {
      //       vm.user.answeredQuestions.push(res.data.id);
      //     } else{
      //       vm.user.answeredQuestions = [res.data.id];
      //     }
      //     LoginService.putUser(vm.user);
      //   });
      //   vm.postAnswerObj = null;
      // }
    }
  }
})();
