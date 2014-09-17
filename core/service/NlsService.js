define([
    "i18n!nls/texts",
    "service!core/service/CacheService"
], function (texts, CacheService) {
    return  function () {

        function getMessage(key) {
            return CacheService.get("nls." + key, function () {
                var keys = key.split(".");
                var current = texts;
                for (var i = 0; i < keys.length; i++) {
                    current = current[keys[i]];
                    if (!current) {
                        return "[" + key + "]";
                    }
                }
                return current;
            });
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
    }
});
