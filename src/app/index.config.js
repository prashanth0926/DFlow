(function() {
  'use strict';

  angular
    .module('upflowUi')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $authProvider.google({
      clientId: '92804684773-a1c6mjiblgep88ferso761qg6rf3lrs2.apps.googleusercontent.com'
    });

    $authProvider.live({
      clientId: 'd40466d1-79ef-4076-bed2-cc949384fc4b'
    });
  }

})();
