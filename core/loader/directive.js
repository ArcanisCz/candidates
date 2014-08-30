define([
    'angular',
    "core/MainModule"
], function (angular, app) {

    function load(name, localRequire, done, config) {
        localRequire([name], function (directiveDefinition) {
            var directiveName = name.split("/").slice(-1)[0];
            directiveName = directiveName[0].toLowerCase()+directiveName.substr(1);
            app.directive(directiveName, directiveDefinition);
            done(directiveName);
        });
    };

    return {
        load: load,
        pluginBuilder : 'core/loader/builder'
    };
});