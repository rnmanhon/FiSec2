var request = require('request');
var stringify = require('json-stringify-safe');
var _ = require('lodash-getpath');
var polyline = require('polyline');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* POST decode polyline  */
module.exports.decodeRouteGeometory = function(req, res) {
    console.log("decodeRouteGeometory req  %j ", req.body);
    var decodedValue = polyline.decode(req.body.route_geometry);
    console.log("decodedValue  %j ", decodedValue);

    sendJSONresponse(res, 200, {
        "route": decodedValue,
    });

}