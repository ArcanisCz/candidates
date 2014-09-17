define([
], function () {

    function load(name, localRequire, done, config) {
        localRequire([name], function (testDef) {
            describe(testDef[0]+" ("+name+")", testDef[1]);
            done();
        });
    }

    return {
        load: load,
        pluginBuilder: 'core/loader/builder'
    };
});