define([
    "text!./SkillDirective.html",
    "less!./SkillDirective"
], function (template) {
    return  function () {
        return{
            template: template,
            restrict: "E",
            scope: {
                name: "@name",
                level: "@level"
            }
        }
    };
});