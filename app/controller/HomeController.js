define([
    "core/scope/NlsScope",
    "app/scope/CandidateListScope"
], function (NlsScope, CandidateListScope) {
    return ['$scope', function ($scope) {
        NlsScope($scope, "view.HomeController");
        CandidateListScope($scope);
    }];
});