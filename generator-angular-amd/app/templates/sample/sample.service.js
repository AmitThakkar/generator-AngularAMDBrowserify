/**
 * Created by amitthakkar on 02/05/15.
 */
(function (ng) {
    'use strict';
    var sampleApp = ng.module("angular-amd.sample");
    sampleApp.service("SampleService", [function () {
        this.getName = function () {
            return "Sample Service";
        };
    }]);
})(angular);