(function () {
    'use strict';

    angular
        .module('app.add-car')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun (routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates () {
        return [
            {
                state: 'root.add-car',
                config: {
                    url: '/addCar?action',
                    views: {
                        'main@': {
                            templateUrl: 'static/add-car/add-car.html',
                            controller: 'AddCarController as vm'
                        }
                    },
                    data: {
                        title: 'Register Car',
                        _class: 'phone'
                    },
                    sidebar: {
                        icon: 'mdi-cellphone-android',
                        text: 'Register Car'
                    },
                    breadcrumb: 'Car'
                }
            }
        ];
    }
})();
