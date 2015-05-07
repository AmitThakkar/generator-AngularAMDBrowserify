/**
 * Created by Amit Thakkar on 02/05/15.
 */
(function (ng, require) {
    'use strict';
    var sampleApp = ng.module('angular-amd.sample');
    require('./sample.service.js');
    sampleApp.controller('SampleController', ['SampleService', function (SampleService) {
        var sampleController = this;
        sampleController.page = 'Sample Page ' + SampleService.getName();
    }]);
})(angular, require);