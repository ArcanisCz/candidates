define([
    "Factory",
    "i18n!nls/texts"
], function (factory, texts) {
    return  factory.service("nls", [function () {

        var cache = {};

        function getMessage(key) {
            if (cache[key]) {
                return cache[key];
            } else {
                var keys = key.split(".");
                var current = texts;
                for (var i = 0; i < keys.length; i++) {
                    current = current[keys[i]];
                    if (!current) {
                        cache[key] = "[" + key + "]";
                        return cache[key];
                    }
                }
                cache[key] = current;
                return current;
            }
        };

        function setNamespace($scope, scopeKey, namespace) {
            $scope[scopeKey] = namespace;
        };

        function getMessageNS($scope, scopeKey, key) {
            return getMessage($scope[scopeKey] + "." + key);
        };

        return {
            getMessage: getMessage,
            setNamespace: setNamespace,
            getMessageNS: getMessageNS
        };
    }])
});
