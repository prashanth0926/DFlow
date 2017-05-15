/**
 * Created by pmolakala on 5/2/17.
 */
(function () {
  'use strict';

  angular
    .module('upflowUi')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(LoginService, $state, ServerConnectService, $auth) {
    var vm = this;

    // vm.oneLogin = oneLogin;
    // vm.cwsLogin = cwsLogin;

    vm.authenticate = function(provider) {
      console.log('provider : ',provider);
      $auth.authenticate(provider);
    };

    window.onSignIn = onSignIn;

    // function oneLogin() {
    //
    //   var params = {
    //       clientid: '92804684773-a1c6mjiblgep88ferso761qg6rf3lrs2.apps.googleusercontent.com',
    //       cookiepolicy: 'single_host_origin',
    //       callback: function(result) {
    //         if(result['status']['signed_in']){
    //             console.log('success');
    //             var request = gapi.client.plus.people.get(
    //               {
    //                 userId: 'me'
    //               }
    //             );
    //
    //           request.execute(function(resp) {
    //                 localStorage.setItem('userName', resp.displayName);
    //                 vm.user = {
    //                   username: resp.displayName,
    //                   email: resp.emails[0].value,
    //                   image: resp.result.image.url
    //                 };
    //                 LoginService.updateUser(vm.user).then(function (res) {
    //                   localStorage.setItem('userId', res.data.id)
    //                 });
    //                 $state.go('home');
    //           });
    //         }
    //       },
    //       approvalprompt: 'force',
    //       scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    //
    //   };
    //
    //   gapi.auth.signIn(params);
    // }

    function cwsLogin() {

    }

    function localRegistration(data) {
      ServerConnectService.getApiResource('users/register')
        .save(data,
          function () {
            localLogin({ username: data.username, password: data.password });
          },
          function (res) {
            console.log('Registration failed with status code: ', res.status);
          }
        );
    }

    function localLogin(data) {
      ServerConnectService.getApiResource('users/login')
        .save(data,
          function (res) {
            ServerConnectService.storeObj('TOKEN_KEY', { username: data.username, token: res.token, uid: res.uid, admin: res.admin });
            ServerConnectService.setDefaultHeader('x-access-token', res.token);
            ServerConnectService.isAuthenticated = true;
            $state.go('home');
          },
          function (res) {
            ServerConnectService.isAuthenticated = false;
            console.log('Login Failed with status code: ', res.status);
          }
        );
    }

    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      var userToken = ServerConnectService.getObj('TOKEN_KEY');
      if (userToken) {
        ServerConnectService.setDefaultHeader('x-access-token', userToken.token);
        ServerConnectService.isAuthenticated = true;
        $state.go('home');
      } else {
        ServerConnectService.getApiResource('users/hasRegistered/:username').get({username: profile.getEmail()}, function (res) {
          var userData = {
            username: profile.getEmail(),
            password: profile.getEmail().split('@')[0],
            fullName: profile.getName(),
            imageUrl: profile.getImageUrl(),
            topicsFollowing: []
          };
          if (res.hasRegistered) {
            localLogin(userData);
          } else {
            localRegistration(userData);
          }
        });
      }
    }

  }
})();
