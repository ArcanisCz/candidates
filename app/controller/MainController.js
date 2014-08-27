define([
    "Factory",
    "core/controller/BaseController"
], function (factory, BaseController) {
    return factory.controller('MainController', ['$scope', "$routeSegment", function ($scope, $routeSegment) {
        factory.inheritScope(BaseController, $scope);

        $scope.setMsgNS("view.MainController");

        layoutScopePart($scope, $routeSegment);
        document.title = $scope.msgNS("title");
    }]);


    function layoutScopePart($scope, $routeSegment) {
        $scope.$on('routeSegmentChange', function (event) {
            var segment = $routeSegment.chain.slice(-1)[0];
            if (segment.name != "s1") {
                $scope.layout.active = segment.name;
            }
        });

        $scope.layout = {
            active: $routeSegment.chain.slice(-1)[0].name,
            menu: [
                {
                    name: $scope.msgNS("menu.candidates"),
                    ico: "table",
                    link: "home"
                },
                {
                    name: $scope.msgNS("menu.detail"),
                    ico: "check",
                    link: "detail"
                }
            ],
            getActiveClass: function (name) {
                if (name == $scope.layout.active) {
                    return "active";
                }
                return "";
            }
        }
    }
});

