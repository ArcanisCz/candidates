define([
    "app/Routes"
], function (AppLayout) {

    function init(app) {
        app.config(['$routeProvider', "$routeSegmentProvider", AppLayout]);
    }

    return {
        init: init
    };
});