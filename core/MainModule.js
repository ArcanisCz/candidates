define([
    'angular',
    "core/config",
    "app/App"
], function (angular, config, App) {

    function createDeps(shim) {
        var deps = [];
        for (var name in shim) {
            var entry = shim[name];
            if (entry.angularModuleName) {
                deps.push(entry.angularModuleName);
            }
        }
        return deps;
    }

    return angular.module(config.appName, createDeps(config.shim));
});