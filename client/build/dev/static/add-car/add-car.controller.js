(function () {
    'use strict';

    angular
        .module('app.add-car')
        .controller('AddCarController', AddCarController);

    AddCarController.$inject = ['LxNotificationService', 'userAPI', '$state', '$http', '$q'];
    /* @ngInject */
    function AddCarController (LxNotificationService, userAPI, $state, $http, $q) {
        var vm = this;
        vm.addCar = addCar;
        vm.cars = [
                      {
                        make:'Honda',
                        model: ['Civic', 'Accord']
                      },
                      {
                        make: 'Audi',
                        model: ['Q4', 'A6']
                      },
                      {
                        make: 'Nissan',
                        model: ['Altima', 'Maxima']
                      },
                      {
                        make: 'Toyota',
                        model: ['Corolla', 'Camery']
                      }
                    ];
        function addCar (car) {
            if (vm.addCarForm.$invalid) {
                return;
            }
            var data = {
                "carMake": car.make,
                "occupancy": car.occupancy,
                "userId": 1,
                "color": car.color,
                "model": car.selectedModel
                };
            return $http.post('http://localhost:8080/cars/register', data)
                .then(_success)
                .catch();

            function _success (response) {
                var data = response.data;
                if (response.status === 200) {
                    LxNotificationService.success('You have successfuly registered your car!');
                    $state.transitionTo('root.carpool');
                } else {
                    LxNotificationService.error('Error occured, please try agin later');
                    return $q.reject(data.message);
                }
            }
        }        
    }
})();
