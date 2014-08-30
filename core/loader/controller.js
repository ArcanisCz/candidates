define([
    'angular',
    "core/MainModule"
], function (angular, app) {

    function load(name, localRequire, done, config) {
        localRequire([name], function (controllerDefinition) {
            var controllerName = name.split("/").slice(-1)[0];
            app.controller(controllerName, controllerDefinition);
            done(controllerName);
        });
    };

    return {
        load: load,
        pluginBuilder : 'core/loader/builder'
    };
});