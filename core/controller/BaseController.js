define([
    "Factory",
    "core/service/NlsService"
], function (factory, NlsService) {
    return factory.controller('AbstractController', ['$scope', NlsService, function ($scope, $nls) {
        setMessages($scope, $nls);
    }]);

    function setMessages($scope, $nls) {
        $scope.msg = $nls.getMessage;
        $scope.msgNamespace = "";
        $scope.setMsgNS = $nls.setNamespace.bind(null, $scope, "msgNamespace");
        $scope.msgNS = $nls.getMessageNS.bind(null, $scope, "msgNamespace");
    }
});