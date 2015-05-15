/**
 * Created by Amit Thakkar on 02/05/15.
 */
(function (require, module) {
    var exports = module.exports;
    var externalModules = [
        'ui.router'
    ];
    require('angular-ui-router');
    var internalModules = [
        'angular-amd.sample'
    ];
    var internalModuleObjects = [
        require('./sample/sample.main.js')
    ];
    exports.dependModules = externalModules.concat(internalModules);
    exports.internalModuleObjects = internalModuleObjects;
})(require, module);