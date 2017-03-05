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
                        title: 'Add Car',
                        _class: 'addCar'
                    },
                    sidebar: {
                        icon: 'mdi-cellphone-android',
                        text: 'Car'
                    },
                    breadcrumb: 'Car'
                }
            }
        ];
    }
})();
