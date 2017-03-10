(function () {
    'use strict';

    angular
        .module('app.carpool')
        .controller('CarpoolFormController', CarpoolFormController);

    CarpoolFormController.$inject = ['LxNotificationService', '$state', '$http', '$q'];
    /* @ngInject */
    function CarpoolFormController (LxNotificationService, $state, $http, $q) {
        var vm = this;
        vm.state = 'edit';
        vm.addCarpool = addCarpool;
        vm.cancel = cancel;

        init();
        function init () {

        }

 
        function addCarpool (carpool) {
            vm.isRequest = true;
            var data = {
                "userId": 1,
                "startingLocation": carpool.location,
                "destination": carpool.destination,
                "startingTime": carpool.startingTime
                };
            return $http.post('http://localhost:8080/carpool/add', data)
                .then(_success)
                .catch();

            function _success (response) {
                _endRequest ()
                var data = response.data;
                if (response.status === 200) {
                    LxNotificationService.success('You have started a ride, thanks for saving the fuel and environment!');
                    $state.transitionTo('root.carpool');
                } else {
                    LxNotificationService.error('Error occured, please try agin later');
                    return $q.reject(data.message);
                }
            }
        }

        function cancel(){
            
        }
        function _endRequest () {
            vm.isRequest = false;
        }


    }
})();
