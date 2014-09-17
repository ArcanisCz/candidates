define([
], function () {
    return function () {
        return function filter(input) {
            var items = [];
            for (var i in input) {
                var item = input[i];
                items.push(item.positionName);
                return items.join(", ");
            }
        }
    };
});