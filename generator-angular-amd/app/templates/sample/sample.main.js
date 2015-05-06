/**
 * Created by Amit Thakkar on 02/05/15.
 */
(function (ng, module) {
    'use strict';
    var exports = module.exports;
    exports.module = ng.module('angular-amd.sample', []);
    exports.states = [
        {
            state: 'sample',
            url: '/sample',
            templateUrl: 'app/sample/sample.html',
            controller: 'SampleController',
            controllerAs: 'sampleController',
            deps: ['build/sample/sample.controller.js']
        }
    ];
})(angular, module);
