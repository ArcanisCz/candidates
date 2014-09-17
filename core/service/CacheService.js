define([], function () {
    return  function () {

        var cache = [];

        function get(key, valueFunc, returnFunc) {
            _checkArguments(key, valueFunc, returnFunc);
            if (cache[key]) {
                return _returnFromCache(key, returnFunc);
            } else {
                if (valueFunc.length == 0) {
                    var value = valueFunc();
                    return _returnWhenNotInCache(key, returnFunc, value);
                } else {
                    valueFunc(_returnWhenNotInCache.bind(null, key, returnFunc));
                }
            }
        };

        function _returnWhenNotInCache(key, returnFunc, value) {
            cache[key] ? null : cache[key] = value;
            return _returnFromCache(key, returnFunc);
        };

        function _returnFromCache(key, returnFunc) {
            returnFunc ? returnFunc(cache[key]) : null;
            return cache[key];
        };

        function remove(key) {
            delete cache[key];
        }

        function _checkArguments(key, valueFunc, returnFunc) {
            if (valueFunc === undefined) {
                throw "valueFunc undefined!";
            }

            if (valueFunc === null) {
                throw "valueFunc null!";
            }

            if (returnFunc && typeof(returnFunc) !== "function") {
                throw "returnFunc is not callable!";
            }
        }

        return {
            get: get,
            remove: remove
        };
    }
});
