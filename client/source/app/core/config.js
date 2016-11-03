(function () {
    'use strict';

    angular
        .module('app.core')
        .config(appConfig);

    var config = {
        appErrorPrefix: '[Pickmeup App Error] ',
        appTitle: 'Pickmeup App'
    };

    appConfig.$inject = ['routerHelperProvider'];
    /* @ngInject */
    function appConfig (routerHelperProvider) {
        routerHelperProvider.configure({mainTitle: config.appTitle});
    }

})();
