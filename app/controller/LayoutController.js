define([
    "core/scope/NlsScope",
    "../scope/LayoutScope",
    "i18n!nls/menu"
], function (NlsScope, LayoutScope, menu) {
    return ['$scope', "$routeSegment", function ($scope, $routeSegment) {
        NlsScope($scope, "view.LayoutController");
        LayoutScope($scope, $routeSegment, menu);

        document.title = $scope.msgNS("title");
    }];
});

