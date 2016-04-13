(function() {

    angular
        .module('fisecApp')
        .controller('mapController', mapController);

    mapController.$inject = ['$scope'];

    function mapController($scope) {
        console.log("inside mapController ...");

        var vm = this;
        vm.myLocation = {
            lng: 114.156296,
            lat: 22.319480,
            zoom: 14,
        };
        vm.events = {};
        vm.markers = new Array();

        $scope.$on("leafletDirectiveMap.click", function(event, args) {
            console.log("in leafletDirectiveMap.click");
            var leafEvent = args.leafletEvent;

            //            if (typeof Obj.property == "undefined") {
            //                // Assign value to the property here
            //                Obj.property = someValue;
            //            }
            if (typeof(vm.startPos) == "undefined") {
                vm.startPos = {
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                };
                vm.markers.push({
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                    message: "My Route start at lat: " + leafEvent.latlng.lat + " long: " + leafEvent.latlng.lng
                });
            } else if (typeof(vm.endPos) == "undefined") {
                vm.endPos = {
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                };
                vm.markers.push({
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                    message: "My Route end at lat: " + leafEvent.latlng.lat + " long: " + leafEvent.latlng.lng
                })
            } else {
                delete vm.startPos;
                delete vm.endPos;
                vm.markers = new Array();

                vm.startPos = {
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                };
                vm.markers.push({
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                    message: "My Route start at lat: " + leafEvent.latlng.lat + " long: " + leafEvent.latlng.lng
                });
            } // if vm.startPos and vm.endPos

        }); // leafletDirectiveMap.click
    }; // mapController
})(); // function()