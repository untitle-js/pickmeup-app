(function () {
    'use strict';

    angular
        .module('app.carpool')
        .directive('aioPhoneForm', CarpoolForm);

    CarpoolForm.$inject = [];
    /* @ngInject */
    function CarpoolForm () {
        var directive = {
            restrict: 'AE',
            transclude: true,
            scope: {
                phone: '=',
                state: '=',
                submit: '=',
                cancel: '='
            },
            controller: 'CarpoolFormController',
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'static/carpool/carpool.form.html'
        };
        return directive;
    }
})();
