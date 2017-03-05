(function () {
    'use strict';

    angular
        .module('app.carpool')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun (routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates () {
        return [
            {
                state: 'root.carpool',
                config: {
                    url: '/carpool',
                    views: {
                        'main@': {
                            templateUrl: 'static/carpool/carpool.html',
                            controller: 'CarpoolController as vm'
                        }
                    },
                    data: {
                        title: 'carpool',
                        _class: 'carpool',
                        requireLogin: true
                    },
                    sidebar: {
                        icon: 'mdi-cellphone-android',
                        text: 'Carpool'
                    },
                    breadcrumb: 'Car Pool'
                }
            },
             {
                state: 'root.carpool.add',
                config: {
                    url: '/add',
                    views: {
                        'main@': {
                            templateUrl: 'static/carpool/carpool.form.html',
                            controller: 'CarpoolFormController as vm'
                        }
                    },
                    breadcrumb: 'Add Carpool'
                }
            }
        ];
    }
})();
