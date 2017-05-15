/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('upflowUi')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('api', 'https://upflower.herokuapp.com/api/');

  // .constant('api', 'https://upflower.herokuapp.com/api/');
  //.constant('api', 'https://gentle-bayou-42839.herokuapp.com/');

})();
