define([
    "core/loader/loaderGeneral"
], function (loader) {
    return {
        load: loader.load.bind(this, "controller"),
        pluginBuilder: loader.pluginBuilder
    };
});