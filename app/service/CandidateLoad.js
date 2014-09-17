define([
    "service!$http"
], function ($http) {
    return  [function () {

        function loadList(done) {
            loadFromHttp("./static/dummy.json", function (result) {
                done(result);
            })
        }


        function loadFromHttp(location, done) {
            $http({
                method: "GET",
                url: location,
                data: "JSON"
            })
                .success(done)
                .error(done);
        }


        return {
            loadList: loadList
        };
    }]
});
