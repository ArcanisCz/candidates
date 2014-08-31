define([
    "core/loader/loaderGeneral"
], function (loader) {
    return {
        load: loader.load.bind(this, "directive"),
        pluginBuilder: loader.pluginBuilder
    };
});