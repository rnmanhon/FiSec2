(function() {

    angular
        .module('fisecApp')
        .controller('mapController', mapController);

    mapController.$inject = ['$scope'];

    function mapController($scope) {
        console.log("inside mapController ...");

        angular.extend($scope, {
            myLocation: {
                lng: 114.156296,
                lat: 22.319480,
                zoom: 14,
            }
        });

    }; // mapController
})(); // function()