define([
    "Factory",
    "async"
], function (factory, async) {
    return  factory.service("europaSave", ["$http", function ($http) {
        function loadFromHttp(saveLocation, done) {
            $http({
                method: "GET",
                url: "./static/dummy.json",
                data: "JSON"
            })
                .success(done)
                .error(done);
        }

        function reduceCountries(memo, code, callback) {
            if (code != "---" && !code.match(/C[0-9]{2}/) && !code.match(/O[0-9]{2}/)) {
                memo[code] = {
                    code: code
                }
            }
            callback(null, memo);
        };

        function load(url, done) {
            loadFromHttp(url, function (data) {
                data.date = data.date;
                data.player = data.player;
                async.reduce(Object.keys(data.countries), {}, reduceCountries, function (err, result) {
                    data.countries = result;
                    done(data);
                });
            });
        }


        return {
            load: load
        };
    }])
});
