angular
  .module('Dak.controllers', [])
  .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = [
    'ENV', '$scope', '$state', '$auth', '$location'
  ];

  function AuthCtrl (ENV, $scope, $state, $auth, $location) {
    console.log('AuthCtrl load');
    this.credentials = {};

    this.signIn = signIn;
    this.signUp = signUp;

    function signIn() {
      console.log(this.credentials);
      $auth.submitLogin(this.credentials)
        .then(function(data) {
          console.log('success');
          $location.path('/#');
        })
        .catch(function(data) {
          console.log('failure');
        });
    };

    function signUp() {
      console.log(this.credentials);
      $auth.submitRegistration(this.credentials)
        .then(function(data) {
          console.log('success');
          $location.path('/#');
        })
        .catch(function(data) {
          console.log('failure');
        });
    };
  };
