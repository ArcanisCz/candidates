define([
], function () {
    return function () {
        return function filter(input) {
            var text = "";
            for (var i in input) {
                var item = input[i];
                text += " " + item.positionName;
            }
            return text;
        }
    };
});