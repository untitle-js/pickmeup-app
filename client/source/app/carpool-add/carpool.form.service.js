(function () {
    'use strict';

    angular
        .module('app.carpool-form')
        .factory('CarpoolFormSerivce', CarpoolFormSerivce);

    CarpoolFormSerivce.$inject = ['$http', '$q', 'ajaxErrorHandler'];
    /* @ngInject */
    function CarpoolFormSerivce ($http, $q, ajaxError) {
        var service = {
            getcarpool: getcarpool,
            getcarpoolDetail: getcarpoolDetail,
            addNewcarpool: addNewcarpool,
            updatecarpool: updatecarpool,
            removecarpool: removecarpool
        };

        return service;

        /////////////

        function getcarpool () {
            return $http.get('api/carpool')
                .then(_success)
                .catch(ajaxError.catcher);

            function _success (response) {
                var data = response.data;
                if (response.status === 200 && data.code === 0) {
                    return data.result.phones;
                } else {
                    return $q.reject(data.message);
                }
            }
        }

        function getcarpoolDetail (id) {
            return $http.get('api/carpool/' + id)
                .then(_success)
                .catch(ajaxError.catcher);

            function _success (response) {
                var data = response.data;
                if (response.status === 200 && data.code === 0) {
                    return data.result.phone;
                } else {
                    return $q.reject(data.message);
                }
            }
        }

        function addNewcarpool (carpool) {
            var req = {
                'carpool': carpool
            };
            return $http.post('api/carpool', req)
                .then(_success)
                .catch(ajaxError.catcher);

            function _success (response) {
                var data = response.data;
                if (response.status === 200 && data.code === 0) {
                    return data.result.carpool;
                } else {
                    return $q.reject(data.message);
                }
            }
        }

        function updatecarpool (id, carpool) {
            var req = {
                'carpool': carpool
            };
            return $http.put('api/carpool/' + id, req)
                .then(_success)
                .catch(ajaxError.catcher);

            function _success (response) {
                var data = response.data;
                if (response.status === 200 && data.code === 0) {
                    return data.result.carpool;
                } else {
                    return $q.reject(data.message);
                }
            }
        }

        function removecarpool (id) {
            return $http.delete('api/carpool/' + id)
                .then(_success)
                .catch(ajaxError.catcher);

            function _success (response) {
                var data = response.data;
                if (response.status === 200 && data.code === 0) {
                    return data.result.carpool;
                } else {
                    return $q.reject(data.message);
                }
            }
        }

    }
})();
