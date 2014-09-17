define([
    "core/service/CacheService"
], function (CacheService) {
   return [ "A CacheService", function () {

       var service;
       var f;

        beforeEach(function () {
            service = new CacheService();

            var count =  0;
            var count1 = 0;
             f = {
                count: function(){
                    return count;
                },
                 count1: function(){
                     return count;
                 },
                valueFunc: function(done) {
                    count++;
                    done("value");
                },
                valueFunc1: function(done) {
                    count1++;
                    done("value1");
                },
                valueFuncSync: function() {
                    return "value";
                }
            }
        });


        it("has API", function () {
            expect(service.get).toBeDefined();
            expect(service.remove).toBeDefined();
        });

        it("throws error when valueFunc not defined", function () {
            try {service.get("key", undefined);} catch (e) {} finally {
                expect(service.get).toThrow();
            }
        });

        it("throws error when valueFunc null", function () {
            try {service.get("key", null);} catch (e) {} finally {
                expect(service.get).toThrow();
            }
        });

        it("throws error when returnFunc not callable", function () {
            try {service.get("key", f.valueFunc, "aaa");} catch (e) {} finally {
                expect(service.get).toThrow();
            }
        });

        it("will call value function if key requested first time and retrieve value", function (complete) {
            service.get("key", f.valueFunc, function (value) {
                expect(f.count()).toEqual(1);
                expect(value).toEqual("value");
                complete();
            });
        });

        it("will return previously stored value when requesting saved key", function (complete) {
            service.get("key", f.valueFunc, function () {
                service.get("key", f.valueFunc1, function (value) {
                    expect(value).toEqual("value");
                    complete();
                });
            });
        });
        it("will not call value function if value for key is stored from previous call", function (complete) {
            service.get("key", f.valueFunc, function () {
                service.get("key", f.valueFunc, function () {
                    service.get("key", f.valueFunc1, function () {
                        expect(f.count()).toEqual(1);
                        expect(f.count1()).toEqual(1);
                        complete();
                    });
                });
            });
        });

        it("will only save key if no return function specified", function (complete) {
            service.get("key", f.valueFunc);
            service.get("key", f.valueFunc1, function (value) {
                expect(value).toEqual("value");
                expect(f.count()).toEqual(1);
                expect(f.count1()).toEqual(1);
                complete();
            });
        });

        it("values are saved for each key", function (complete) {
            service.get("key", f.valueFunc, function (value) {
                service.get("key1", f.valueFunc1, function (value1) {
                    service.get("key", f.valueFunc, function (valueAgain) {
                        expect(value).toEqual("value");
                        expect(value1).toEqual("value1");
                        expect(valueAgain).toEqual("value");
                        complete();
                    });
                });
            });
        });


        it("can remove saved key value from", function(complete){
            service.get("key", f.valueFunc, function () {
                service.remove("key");
                service.get("key", f.valueFunc, function () {
                    expect(f.count()).toEqual(2);
                    complete();
                });
            });
        });

        it("removing key value doesnt affect other saved keys", function (complete) {
            service.get("key", f.valueFunc, function () {
                service.get("key1", f.valueFunc1, function () {
                    service.remove("key");
                    service.get("key1", f.valueFunc1, function (value1) {
                        expect(value1).toEqual("value1");
                        expect(f.count()).toEqual(1);
                        complete();
                    });
                });
            });
        });


        it("if valueFunc has no argument return value as 'return' from function", function(){
            var value = service.get("key", f.valueFuncSync);
            expect(value).toEqual("value");
        });

    }]
});



