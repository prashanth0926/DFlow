/**
 * Created by pmolakala on 5/3/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .directive('tagName', tagName);

  /** @ngInject */
  function tagName() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tagName/tagName.html',
      scope: {
        name: '='
      }
    };

    return directive;
  }

})();
