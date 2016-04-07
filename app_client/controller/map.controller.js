(function() {

    angular
        .module('fisecApp')
        .controller('mapController', mapController);

    mapController.$inject = ['$scope'];

    function mapController($scope) {
        console.log("inside mapController ...");

        angular.extend($scope, {
            defaults: {
                scrollWheelZoom: false
            }
        });

    }; // mapController
})(); // function()