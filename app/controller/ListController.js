define([
    "core/scope/NlsScope"
], function (NlsScope) {
    return ['$scope', function ($scope) {
        NlsScope($scope);

        $scope.setMsgNS("view.ListController");
    }];
});