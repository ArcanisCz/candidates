define([
    "core/scope/NlsScope",
    "../scope/LayoutScope"
], function (NlsScope, LayoutScope) {
    return ['$scope', "$routeSegment", function ($scope, $routeSegment) {
        NlsScope($scope, "view.MainController");
        LayoutScope($scope, $routeSegment);

        document.title = $scope.msgNS("title");
    }];
});

