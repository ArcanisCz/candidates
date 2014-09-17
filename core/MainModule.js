define([
    'angular',
    "core/config",
    "app/App",
    "angularRoute",
    "angularSegment",
    "angularView"
], function (angular, config, App) {

    function createDeps() {
        return [
            "ngRoute",
            "route-segment",
            "view-segment"
        ]
    }

    return angular.module(config.appName, createDeps().concat(App));
});