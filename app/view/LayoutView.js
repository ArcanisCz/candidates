define([
    "app/controller/MainController",
    "text!./LayoutView.html",
    "less!./LayoutView.less",
    "app/component/countries/CountryFlagComponent"
], function (Controller, template) {
    return {
        template: template,
        controller: Controller
    }
});