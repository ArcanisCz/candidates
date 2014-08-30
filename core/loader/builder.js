define([
], function () {

    function load(name, localRequire, done, config) {
        localRequire([name], function () {
            done(name);
        });
    };

    return {
        load: load
    };
});