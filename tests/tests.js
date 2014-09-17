define([], function () {
    return [
        includeTest('test!spec/core/scope/NlsScope', ["core/service/NlsService"]),
        includeTest('test!spec/core/service/NlsService', ["$http"]),
        includeTest('test!spec/core/service/CacheService', [])
    ];

    function includeTest(test, mocks) {
        return testRequire.bind(this, [test], mocks || []);
    }
});