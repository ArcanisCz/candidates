define([
    "app/view/LayoutView",
    "app/view/ContentView",
    "app/view/ContentView1"
], function (LayoutView, ContentView,ContentView1) {
    return function (route, segment) {
        segment
            .when('/', 's1')
            .when('/detail', 's1.detail')
            .segment('s1', LayoutView)
            .within()
                .segment("home", ContentView)
                .segment("detail", ContentView1)
            .up();
        route.otherwise({redirectTo: '/'});
    }
});

