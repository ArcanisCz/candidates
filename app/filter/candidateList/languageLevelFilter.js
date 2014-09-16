define([
], function () {
    return function () {

        var levels = {
            A1: 1,
            B1: 2,
            C1: 3
        }

        return function filter(input) {
            var count = levels[input];
            return Array(count+1).join("*");
        }
    };
});