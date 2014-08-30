define([
    "angularMocks"
], function (angular, mock) {
    describe("A suite", function () {
        beforeEach(function () {
            mock.module('Application');
        });

        it("contains spec with an expectation", function () {
            expect(true).toBe(true);
        });
    });


    describe("A suite", function () {
        it("contains spec with an expectation", function () {
            expect(true).toBe(true);
        });
    });
});



