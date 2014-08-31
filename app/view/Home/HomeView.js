define([
    "controller!app/controller/HomeController",
    "text!./HomeView.html",
    "less!./HomeView.less",
    "filter!app/filter/candidateList/PositionsFilter",
    "filter!app/filter/candidateList/SkillsFilter",
    "directive!app/component/PokusDirective AS pokus"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});