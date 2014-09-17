define([
    "service!core/service/NlsService"
], function (NlsService) {
    return function ($scope, namespace) {
        $scope.msg = NlsService.getMessage;
        $scope.msgNamespace = "";
        $scope.setMsgNS = NlsService.setNamespace.bind(null, $scope, "msgNamespace");
        $scope.msgNS = NlsService.getMessageNS.bind(null, $scope, "msgNamespace");

        if(namespace){
            $scope.setMsgNS(namespace);
        }
    }
});