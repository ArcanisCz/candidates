define([
    "app/controller/ListController",
    "text!./ContentView.html",
    "less!./ContentView.less"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});