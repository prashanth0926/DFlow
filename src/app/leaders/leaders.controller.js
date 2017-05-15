/**
 * Created by pmolakala on 5/4/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .controller('LeadersController', LeadersController);

  /** @ngInject */
  function LeadersController() {
    var vm = this;

    vm.users = [1, 2, 3];
    vm.showAllQuestions = showAllQuestions;

    function showAllQuestions() {

    }
  }
})();
