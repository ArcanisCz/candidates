define([
    "controller!app/controller/HomeController",
    "text!./HomeView.html",
    "less!./HomeView.less",
    "filter!app/filter/candidateList/PositionsFilter",
    "filter!app/filter/candidateList/SkillsFilter"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});