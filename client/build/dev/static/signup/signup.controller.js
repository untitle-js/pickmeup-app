(function () {
    'use strict';

    angular
        .module('app.signup')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['userAPI', '$state', '$timeout'];
    /* @ngInject */
    function SignupController (userAPI, $state, $timeout) {
        var vm = this;

        vm.signup = signup;

        var _routeAfterSignup = 'root.dashboard';

        init();

        function init () {

        }

        function signup (userDetails) {

        }

        function _setError (type, text) {
            vm.loginError = {
                type: type,
                text: text
            };
        }
    }
})();
