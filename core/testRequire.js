//http://bocoup.com/weblog/effective-unit-testing-with-amd/
require([
    "core/config"
], function (config) {
    (function (window) {
        var contextId = 0;
        window.testRequire = function (moduleIds, mocks, callback) {
            var newConfig = deepExtend({}, config);
            newConfig = deepExtend(newConfig, {
                baseUrl: './',
                urlArgs: 'now=' + Date.now(),
                context: 'test-context' + contextId++,
                paths: {
                    spec: './tests/spec',
                    helpers: './tests/helpers',
                    test: "./core/loader/test"
                }
            })


            var map, context;

            if (mocks) {
                map = {
                    '*': {}
                };
                mocks.forEach(function (id) {
                    var mockId = 'tests/mocks/' + id;
                    map['*'][id] = mockId;
                    map[mockId] = {};
                    map[mockId][id] = id;
                });
                newConfig.map = map;
            }

            var context = requirejs.config(newConfig);
            return context.call(this, moduleIds, callback);
        };
    }(typeof global === 'undefined' ? this : global));


    //we do not want load any frameworks with extend() function here (jquery, angular, ...). So we are providing
    // some basic extend here, based on http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        for (var property in source) {
            if (source[property] && source[property].constructor &&
                source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                arguments.callee(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    };
});

