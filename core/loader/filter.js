define([
    'angular',
    "core/MainModule"
], function (angular, app) {

    function load(name, localRequire, done, config) {
        localRequire([name], function (filterDefinition) {
            var filterName = name.split("/").slice(-1)[0];
            app.filter(filterName, filterDefinition);
            done(filterName);
        });
    };

    return {
        load: load,
        pluginBuilder : 'core/loader/builder'
    };
});