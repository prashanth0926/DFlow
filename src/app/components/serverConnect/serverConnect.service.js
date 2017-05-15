/**
 * Created by pmolakala on 5/9/17.
 */

(function (angular) {
  'use strict';

  angular.module('upflowUi')
    .service('ServerConnectService', ServerConnectService);

  function ServerConnectService(api, $http, $resource) {
    var self = this;

    self.isAuthenticated = false;
    self.storeObj = storeObj;
    self.getObj = getObj;
    self.setDefaultHeader = setDefaultHeader;
    self.getApiResource = getApiResource;

    function getApiResource(path) {
      return $resource(api + path, null,
        {
          'update': {
            method: 'PUT'
          }
        }
      );
    }

    function storeObj(key, obj) {
      var objStr = JSON.stringify(obj);
      localStorage.setItem(key, objStr);
    }

    function getObj(key) {
      var objStr = localStorage.getItem(key);
      return JSON.parse(objStr);
    }

    function clearHeaders() {
      $http.defaults.headers.common = {};
      $http.defaults.headers.post = {};
      $http.defaults.headers.put = {};
      $http.defaults.headers.patch = {};
    }

    function setDefaultHeader(key, value) {
      $http.defaults.headers.common[key] = value;
    }

  }
}(angular));
