define([
    "./view/Layout/LayoutView",
    "./view/Home/HomeView",
    "./view/Detail/DetailView"
], function (LayoutView, HomeView,DetailView) {
    return function (route, segment) {
        segment
            .when('/', 's1')
            .when('/detail', 's1.detail')
            .segment('s1', LayoutView)
            .within()
                .segment("home", HomeView)
                .segment("detail", DetailView)
            .up();
        route.otherwise({redirectTo: '/'});
    }
});

