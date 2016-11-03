(function () {
    'use strict';

    angular
        .module('app.signup')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun (routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates () {
        return [
            {
                state: 'root.signup',
                config: {
                    url: '/signup?action',
                    views: {
                        'main@': {
                            templateUrl: 'static/signup/signup.html',
                            controller: 'SignupController as vm'
                        },
                        'breadcrumb@': {},
                        'sidebar@': {}
                    },
                    data: {
                        title: 'Signup',
                        _class: 'login'
                    }
                }
            }
        ];
    }
})();
