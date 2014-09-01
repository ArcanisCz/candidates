define([], function () {
    return {
        appName: "angularSeed",
        paths: {
            uiBootstrap: "./lib/ui-bootstrap/ui-bootstrap-tpls-0.11.0",
            jquery: "./lib/jquery/jquery-2.1.1",
            jsTag: "./lib/jsTag/jsTag",
            typeahead: "./lib/twitter/typeahead",
            angularTypeahead: "./lib/angular/angular-typeahead"
        },
        shim: {
            uiBootstrap: ["angular"],
            typeahead: ["jquery"],
            angularTypeahead: ["angular", "jquery", "typeahead"],
            jsTag: ["angular", "jquery", "angularTypeahead", "typeahead"]
        }
    }
});

