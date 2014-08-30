define([
    "controller!app/controller/HomeController",
    "text!./HomeView.html",
    "less!./HomeView.less"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});