define([
    "controller!app/controller/HomeController",
    "text!./HomeView.html",
    "less!./HomeView.less",
    "directive!app/component/SkillDirective/SkillDirective AS skillElement",
    "filter!app/filter/candidateList/skillLevelFilter AS skillLevelFilter",
    "filter!app/filter/candidateList/languageLevelFilter AS languageLevelFilter"
], function (Controller, template) {
    return {
        default: true,
        template: template,
        controller: Controller
    }
});