(function () {
    'use strict';

    angular
        .module('app.carpool-form')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun (routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates () {
        return [
            {
                state: 'root.add-carpool',
                config: {
                    url: '/carpool/add',
                    views: {
                        'main@': {
                            templateUrl: 'static/carpool-add/carpool.form.html',
                            controller: 'CarpoolFormController as vm'
                        }
                    },
                    data: {
                        title: 'Add Carpool',
                        _class: 'phone'
                    },
                    sidebar: {
                        icon: 'mdi-cellphone-android',
                        text: 'Add Carpool'
                    },
                    breadcrumb: 'Add'
                }
            }
        ];
    }
})();
