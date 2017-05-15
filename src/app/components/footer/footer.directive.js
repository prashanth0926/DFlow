/**
 * Created by pmolakala on 5/4/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .directive('upFlowFooter', upFlowFooter);

  /** @ngInject */
  function upFlowFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html'
    };

    return directive;
  }

})();
