define([
    'angular',
    "core/MainModule"
], function (angular, app) {

    function load(name, localRequire, done, config) {
        console.log(name);
        name = name.split(" AS ");
        localRequire([name[0]], function (directiveDefinition) {
            var directiveName = name.slice(-1)[0].split("/").slice(-1)[0];
            directiveName = directiveName[0].toLowerCase()+directiveName.substr(1);
            app.directive(directiveName, directiveDefinition);
            console.log(directiveName);
            done(directiveName);
        });
    };

    return {
        load: load,
        pluginBuilder : 'core/loader/builder'
    };
});