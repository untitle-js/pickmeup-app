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
                            templateUrl: 'static/carpool-list/carpool.html',
                            controller: 'CarpoolController as vm'
                        }
                    },
                    data: {
                        title: 'Carpool List',
                        _class: 'phone'
                    },
                    sidebar: {
                        icon: 'mdi-cellphone-android',
                        text: 'Carpool List'
                    },
                    breadcrumb: 'Carpools'
                }
            }
        ];
    }
})();
