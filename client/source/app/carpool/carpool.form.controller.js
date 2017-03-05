(function () {
    'use strict';

    angular
        .module('app.carpool')
        .controller('CarpoolFormController', CarpoolFormController);

    CarpoolFormController.$inject = ['CarpoolSerivce'];
    /* @ngInject */
    function CarpoolFormController (CarpoolSerivce) {
        var vm = this;

       vm.submitForm = submitForm;

       init();
       function init () {

        }

 
    function submitForm (carpool) {
            if (vm.carpoolForm.$invalid || !vm.carpool.startingtime) {
            return;
        }
        vm.isRequest = true;
        // call submit method passed in from outer scope
        vm.submit(carpool)
            .then(function () {
                _endRequest();
                vm.carpoolForm.$setPristine();
            })
            .catch(_endRequest);
    }

        function _endRequest () {
            vm.isRequest = false;
        }

    }
})();
