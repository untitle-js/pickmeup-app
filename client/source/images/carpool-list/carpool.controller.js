(function () {
    'use strict';

    angular
        .module('app.carpool')
        .controller('CarpoolController', CarpoolController);

    CarpoolController.$inject = ['LxNotificationService', '$state', '$http', '$q'];
    /* @ngInject */
    function CarpoolController (LxNotificationService,  $state, $http, $q) {
        var vm = this;
        vm.carpools = [];
        vm.deletecarpool = deletecarpool;
        vm.joinCarpool = joinCarpool;
        
        init();
        function init () {
            _getcarpoolList();
        }

        function _getcarpoolList () {
            return $http.get('http://localhost:8080/carpool/list')
                .then(_success)
                .catch();

            function _success (response) {
                var data = response.data;
                if (response.status === 200) {
                    vm.carpools=data;
                } else {
                    LxNotificationService.error('Error occured, please try agin later');
                    return $q.reject(data.message);
                }
            }
        }

        function joinCarpool(carpoolId){
            vm.isRequest = true;
            var data = {
                    "userId": 7,
                    "carpoolId":carpoolId,
                    "driver":false
                };
            return $http.post('http://localhost:8080/carpool/addUser', data)
                .then(_success)
                .catch();

            function _success (response) {
                _endRequest ()
                var data = response.data;
                if (response.status === 200) {
                    LxNotificationService.success('You have joined the carpool, enjoy your ride!');
                } else {
                    LxNotificationService.error('Error occured, please try agin later');
                    return $q.reject(data.message);
                }
            }
        }
        function deletecarpool (id, name) {
            LxNotificationService.confirm('Are your sure?',
                'All information about [' + name + '] will be REMOVED!',
                {cancel:'cancel', ok:'delete'},
                function (answer) {
                    if (answer) {
                        _doDelete(id);
                    }
                }
            );
        }

        function _doDelete (id) {
            for(var i=0; i<vm.carpools.length; i++){
                if(vm.carpools[i].id===id){
                    vm.carpools = vm.carpools.slice(i);
                }
            }
        }

        function _endRequest () {
            vm.isRequest = false;
        }

    }
})();
