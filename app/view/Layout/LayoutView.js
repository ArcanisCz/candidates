define([
    "controller!app/controller/LayoutController",
    "text!./LayoutView.html",
    "less!./LayoutView.less"
], function (Controller, template) {
    return {
        template: template,
        controller: Controller
    }
});