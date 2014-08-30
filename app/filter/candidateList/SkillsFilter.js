define([
    "i18n!nls/skills"
], function (skills) {
    return function () {
        return function filter(input) {
            var items = [];
            for (var i in input) {
                var item = input[i];
                items.push(" " + item.skillName + "(" + skills[item.skill] + ")");
            }
            return items.join(", ");
        }
    };
});