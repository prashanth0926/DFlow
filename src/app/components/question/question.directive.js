/**
 * Created by pmolakala on 5/3/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .directive('upFlowQuestion', upFlowQuestion)
    .filter('unique', uniqueFilter);

  /** @ngInject */
  function upFlowQuestion() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/question/question.html',
      scope: {
        questionObj: '='
      },
      controller: upFlowQuestionController,
      controllerAs: 'question',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function upFlowQuestionController(moment) {
      var vm = this;

      vm.votedUsers = vm.questionObj.upVotes.concat(vm.questionObj.downVotes);
      vm.myArray = [1, 2, 3];
      vm.tags = ['Api', 'Dev-portal'];
      vm.openUFDropDown = openUFDropDown;
      vm.calcRelTime = calcRelTime;

      function calcRelTime(time1) {
        return moment(time1).fromNow();
      }

      function openUFDropDown() {

      }
    }
  }

  /** @ngInject */
  function uniqueFilter(lodash) {
    return function(input, key) {
      var unique = {};
      var uniqueList = [];
      for(var i = 0; i < input.length; i++){
        if(typeof unique[lodash.get(input[i], key)] == "undefined"){
          unique[lodash.get(input[i], key)] = "";
          uniqueList.push(input[i]);
        }
      }
      return uniqueList;
    };
  }

})();
