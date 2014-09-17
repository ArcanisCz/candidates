define([
], function () {
    return  [function () {

        function load(url, done) {
                var ret = {};
                ret.date = "1444.9.1";
                ret.player = "GBR";
                ret.countries = {};
                done(ret);
        }

        return {
            load: load
        };
    }]
});
