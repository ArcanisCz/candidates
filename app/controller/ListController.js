define([
    "core/scope/NlsScope"
], function (NlsScope) {
    return ['$scope', function ($scope) {
        NlsScope($scope, "view.ListController");
    }];
});