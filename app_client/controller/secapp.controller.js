(function() {

    angular
        .module('fisecApp')
        .controller('secappController', secappController);

    //    userController.$inject = ['$scope', 'userService'];
    //
    //    function userController($scope,  userService) {    
    //    function userController($scope,  userService) {    
    secappController.$inject = ['$scope', '$location', '$uibModal', 'appService'];

    function secappController($scope, $location, $uibModal, appService) {
        console.log("inside secappController ...");

        var vm = this;
        //        vm.protocol = $location.protocol();
        //        vm.host = $location.host();
        //        vm.defaultUrlPrefix = $location.protocol() + "://" + $location.host() + ":3000/";
        vm.defaultUrlPrefix = $location.protocol() + "://" + $location.host() + ":81/";
        //        vm.remoteApps = [];
        //        vm.remoteApps.push({});



        vm.pageHeader = {
            title: 'FiSec',
            strapline: 'SecApp'
        };
        vm.message = "";

        // init the appication token
        var init = function() {
            vm.message = "loading access token ...";

            var queryParameter = $location.search()
            console.log("queryParameter %j ", queryParameter);

            appService.loadAccessToken(queryParameter)
                .success(function(data) {
                    console.log("data %j", data);
                    appService.appAccessToken = data.accessToken;
                    vm.appAccessToken = appService.appAccessToken;
                    appService.authorizedApp = data.authorizedApp;
                    vm.authorizedApp = appService.authorizedApp;
                    vm.message = "";
                })
                .error(function(e) {
                    console.log(e);
                    vm.message = e;
                });

            // get application token


        }
        init();

        vm.getRemote = function() {
            console.log("secappController getRemote ...");

            appService.invokeRemote({
                    action: 'GET',
                    appAccessToken: vm.appAccessToken,
                    urlPrefix: vm.remoteApp.urlPrefix,
                    urlSuffix: vm.remoteApp.urlSuffix,
                })
                .success(function(data) {
                    console.log("data %j", data);
                    vm.message = data;
                })
                .error(function(e) {
                    console.log(e);
                    vm.message = e;
                });

            //            appService.getRemote({
            //                    appAccessToken: vm.appAccessToken,
            //                    urlPrefix: vm.remoteApp.urlPrefix,
            //                    urlSuffix: vm.remoteApp.urlSuffix,
            //                })
            //                .success(function(data) {
            //                    console.log("data %j", data);
            //                    vm.message = data;
            //                })
            //                .error(function(e) {
            //                    console.log(e);
            //                    vm.message = e;
            //                });

        }; // getRemote

        vm.postRemote = function() {
            console.log("secappController postRemote ...");
            appService.invokeRemote({
                    action: 'GET',
                    appAccessToken: vm.appAccessToken,
                    urlPrefix: vm.remoteApp.urlPrefix,
                    urlSuffix: vm.remoteApp.urlSuffix,
                })
                .success(function(data) {
                    console.log("data %j", data);
                    vm.message = data;
                })
                .error(function(e) {
                    console.log(e);
                    vm.message = e;
                });

            //            appService.postRemote({
            //                    appAccessToken: vm.appAccessToken,
            //                    urlPrefix: vm.remoteApp.urlPrefix,
            //                    urlSuffix: vm.remoteApp.urlSuffix,
            //                })
            //                .success(function(data) {
            //                    console.log("data %j", data);
            //                    vm.message = data;
            //                })
            //                .error(function(e) {
            //                    console.log(e);
            //                    vm.message = e;
            //                });

        }; // getRemote        

    }; // secappController
})(); // function()