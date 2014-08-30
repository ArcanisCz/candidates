define([
    'angular',
    "core/MainModule"
], function (angular, app) {

    function load(name, localRequire, done, config) {
        if (name[0] === "$") {
            angularDI(name, done);
        } else {
            localRequire([name], function (serviceDef) {
                var serviceName = name.split("/").slice(-1)[0];
                createService(serviceName, serviceDef);
                angularDI(serviceName, done);
            });
        }
    }

    function angularDI(depName, callback) {
        var injector = angular.injector([app.name]);
        injector.invoke([depName, function (service) {
            callback(service);
        }]);
    }

    function createService(name, def) {
        app.factory(name, def);
    }

    return {
        load: load,
        pluginBuilder : 'core/loader/builder'
    };
});