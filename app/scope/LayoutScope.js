define([
], function () {
    return function ($scope, $routeSegment) {
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