(function() {
  'use strict';

  angular
    .module('upflowUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http, ServerConnectService, $rootScope, $state) {

    $log.debug('runBlock end');
    if (ServerConnectService.getObj('TOKEN_KEY') && ServerConnectService.getObj('TOKEN_KEY').token) {
      $http.defaults.headers.common['x-access-token'] = ServerConnectService.getObj('TOKEN_KEY').token;
    }

    $rootScope.$on( '$stateChangeStart', function(e, toState  , toParams
      , fromState, fromParams) {

      var isLogin = toState.name === "login";
      if(isLogin){
        return; // no need to redirect
      }

      // now, redirect only not authenticated

      if(!ServerConnectService.isAuthenticated) {
        e.preventDefault(); // stop current execution
        $state.go('login'); // go to login
      }
    });
  }

})();
