define([
], function () {
    return function () {

        var levels = {
            BEGINNER: 1,
            ADVANCED: 2,
            EXPERT: 3
        }

        return function filter(input) {
            var count = levels[input];
            return Array(count+1).join("*");
        }
    };
});