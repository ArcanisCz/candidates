define([
    "core/service/NlsService"
], function (NlsService) {

    var service;

    beforeEach(function(){
        service = new NlsService();
    });

    return [ "A NlsService", function () {
        it("has API", function(){
            expect(service.getMessage).toBeDefined();
            expect(service.setNamespace).toBeDefined();
            expect(service.getMessageNS).toBeDefined();
        });


        xit("can retrieve message by key");
        xit("can set namespace in scope");
        xit("can retrieve namespaced message by key");
    }]
});



