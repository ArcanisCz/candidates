define([
    "Factory",
    "core/controller/BaseController",
    "./part/LayoutScopePart"
], function (factory, BaseController, LayoutScopePart) {
    return factory.controller('MainController', ['$scope', "$routeSegment", function ($scope, $routeSegment) {
        factory.inheritScope(BaseController, $scope);

        $scope.setMsgNS("view.MainController");
        LayoutScopePart($scope, $routeSegment);

        document.title = $scope.msgNS("title");
    }]);
});