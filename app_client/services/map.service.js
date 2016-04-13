(function() {

    angular
        .module('fisecApp')
        .service('mapService', mapService);

    mapService.$inject = ['$http'];

    function mapService($http) {
        var findRoute = function(data) {
            console.log("mapService findRoute ...");
            url = "http://router.project-osrm.org/viaroute" +
                "?loc=" + data.startPos.lat + "," + data.startPos.lng +
                "&loc=" + data.endPos.lat + "," + data.endPos.lng +
                "&instructions=true";
            return $http.get(url);

            // http://router.project-osrm.org/viaroute?
            // loc = 52.503033, 13.420526 & loc = 52.516582, 13.429290 & instructions = true
        };

        var decodeRouteGeometory = function(data) {
            console.log("mapService decodeRouteGeometory ...");
            console.log("data %j", data);
            return $http.post('/api/decodeRouteGeometory', data);
        }

        return {
            findRoute: findRoute,
            decodeRouteGeometory: decodeRouteGeometory,
        };
    }

})();