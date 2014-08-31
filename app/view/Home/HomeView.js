define([
    "controller!app/controller/HomeController",
    "text!./HomeView.html",
    "less!./HomeView.less",
    "filter!app/filter/candidateList/PositionsFilter AS positions",
    "filter!app/filter/candidateList/SkillsFilter AS skills",
    "directive!app/component/PokusDirective AS pokus"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});