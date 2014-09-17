define([
    "core/loader/loaderGeneral"
], function (loader) {
    return {
        load: loader.load.bind(this, "filter"),
        pluginBuilder: loader.pluginBuilder
    };
});