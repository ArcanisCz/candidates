define([
    "Factory",
    "text!./CountryFlagComponent.html",
    "less!./CountryFlagComponent.less"
], function (factory, template) {
    return factory.directive("countryFlag", [function () {
        return {
            restrict: "E",
            template: template,
            scope: {
                code: "="
            }
        }
    }]);
});