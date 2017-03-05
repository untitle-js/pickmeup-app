(function () {
    'use strict';

    angular
        .module('app.carpool')
        .controller('CarpoolController', CarpoolController);

    CarpoolController.$inject = ['CarpoolSerivce', 'LxNotificationService'];
    /* @ngInject */
    function CarpoolController (CarpoolSerivce, LxNotificationService) {
        var vm = this;
        vm.deletecarpool = deletecarpool;
        init();
        function init () {
            _getcarpoolList();
        }

        function _getcarpoolList () {
            CarpoolSerivce.getcarpool()
                .then(function (data) {
                    vm.carpool = data;
                });
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
            CarpoolSerivce.removePhone(id)
                .then(_success)
                .catch(_error);

            function _success (data) {
                _getcarpoolList();
            }

            function _error (message) {
                LxNotificationService.alert('Delete carpool error', message, 'OK', function () {
                    _getcarpoolList();
                });
            }
        }

    }
})();
