define([
    "service!app/service/CandidateLoad"
], function (CandidateLoad) {
    return function ($scope) {
        $scope.candidateList = {
            candidates: [],
            load: CandidateLoad.loadList
        }

        $scope.candidateList.load(function (data) {
            console.log(data);
            $scope.candidateList.candidates = data;
            $scope.$apply();
        })
    }
});