define([
    "core/scope/NlsScope",
    "app/scope/CandidateListScope"
], function (NlsScope, CandidateListScope, jsTagScope) {
    return ['$scope', "JSTagsCollection", function ($scope, JSTagsCollection) {
        NlsScope($scope, "view.HomeController");
        CandidateListScope($scope);


        $scope.popover = {
            "title": "Title",
            "content": "Hello Popover<br />This is a multiline message!"
        };
    }];
});