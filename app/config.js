define([], function () {
    return {
        appName: "angularSeed",
        paths: {
            uiBootstrap: "./lib/ui-bootstrap/ui-bootstrap-tpls-0.11.0",
            jquery: "./lib/jquery/jquery-2.1.1",
            jsTag: "./lib/jsTag/jsTag",
            strap: "./lib/strap/angular-strap",
            strapTpl: "./lib/strap/angular-strap.tpl"
        },
        shim: {
            uiBootstrap: ["angular"],
            jsTag: ["angular", "jquery"],
            strap: ["angular"],
            strapTpl: ["angular", "strap"]
        }
    }
});

