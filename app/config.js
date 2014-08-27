define([], function () {
    return {
        appName: "angularSeed",
        paths: {
            uiBootstrap: "./lib/ui-bootstrap/ui-bootstrap-tpls-0.11.0",
            jquery: "./lib/jquery/jquery-2.1.1"
        },
        shim: {
            'uiBootstrap': {
                deps: ["angular"]
            }
        }
    };
});

