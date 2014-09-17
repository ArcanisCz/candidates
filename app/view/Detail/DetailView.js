define([
    "text!./DetailView.html",
    "controller!app/controller/DetailController"
], function (template, Controller) {
    return {
        template: template,
        controller: Controller
    }
});