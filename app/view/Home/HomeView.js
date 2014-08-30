define([
    "controller!app/controller/ListController",
    "text!./HomeView.html",
    "less!./HomeView.less"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});