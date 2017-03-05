(function () {
    'use strict';

    angular
        .module('app.add-car')
        .controller('AddCarController', AddCarController);

    AddCarController.$inject = ['userAPI', '$state', '$timeout'];
    /* @ngInject */
    function AddCarController (userAPI, $state, $timeout) {
        var vm = this;
        vm.addCar = addCar;
        function addCar (credential) {
            if (vm.addCarForm.$invalid) {
                return;
            }
        }

        function _setError (type, text) {
            vm.loginError = {
                type: type,
                text: text
            };
        }
    }
})();
