define([], function () {
        return  function () {
            var promise = {
                success: function (done) {
                    done({
                        date: "aaa",
                        player: "bbb",
                        countries: {}
                    });
                    return {
                        error: function(){}
                    }
                }
            };

            return function load(options) {
                return promise;
            };
        }
    }
);
