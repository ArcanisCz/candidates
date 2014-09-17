define([
    'angular',
    "core/MainModule"
], function (angular, app) {

    function load(command, path, localRequire, done, config) {
        path = path.split(/ AS /i);
        if (path[1]) {
            _load(command, path[1], path[0],localRequire, done);
        } else {
            var fileName = path[0].split("/").slice(-1)[0];
            if(command === "directive"){
                fileName = fileName[0].toLowerCase()+fileName.substr(1);
            }
            _load(command, fileName, path[0],localRequire, done);
        }

    };

    function _load(command, name, path, localRequire, done) {
        localRequire([path], function (definition) {
            app[command](name, definition);
            done(name);
        });
    }

    return {
        load: load,
        pluginBuilder: 'core/loader/builder'
    };
});