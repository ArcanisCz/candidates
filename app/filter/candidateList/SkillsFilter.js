define([
    "i18n!nls/skills"
], function (skills) {
    return function () {
        return function filter(input) {
            var text = "";
            for (var i in input) {
                var item = input[i];
                text += " " + item.skillName + "(" + skills[item.skill] + ")";
            }
            return text;
        }
    };
});