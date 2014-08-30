define([
    "controller!app/controller/MainController",
    "text!./LayoutView.html",
    "less!./LayoutView.less"
], function (Controller, template) {
    return {
        template: template,
        controller: Controller
    }
});