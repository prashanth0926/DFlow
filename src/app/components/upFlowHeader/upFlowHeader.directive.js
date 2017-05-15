/**
 * Created by pmolakala on 5/3/17.
 */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .directive('upFlowHeader', upFlowHeader);

  /** @ngInject */
  function upFlowHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/upFlowHeader/upFlowHeader.html',
      scope: {
        loggedIn: '='
      },
      controller: upFlowHeaderController,
      controllerAs: 'header',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function upFlowHeaderController($rootScope, $state) {
      var vm = this;

      vm.openHome = openHome;
      vm.logout = logout;
      window.onLoadCallback = onLoadCallback;

      function onLoadCallback() {
        gapi.load('auth2', function() {
          gapi.auth2.init();
        });
      }

      function openHome() {
        $rootScope.$emit('openHome');
      }

      function logout() {
        localStorage.clear();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        $state.go('login');
      }
    }
  }

})();
