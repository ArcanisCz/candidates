define([
    "Factory",
    "core/controller/BaseController"
], function (factory, BaseController) {
    return factory.controller('ListController', ['$scope', function ($scope) {
        factory.inheritScope(BaseController, $scope);

        $scope.setMsgNS("view.ListController");
    }]);
});