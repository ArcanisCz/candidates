define([
    "core/scope/NlsScope"
], function (NlsScope) {
    return ["A NlsScope", function () {
        var scope;

        beforeEach(function () {
            scope = {};
        });

        it("is initialized", function () {
            NlsScope(scope);
            expect(scope.msg).toBeDefined();
            expect(scope.msgNamespace).toEqual("");
            expect(scope.setMsgNS).toBeDefined();
            expect(scope.msgNS).toBeDefined();
        });

        it("only add specified properties to scope", function () {
            NlsScope(scope);
            delete scope.msg;
            delete scope.msgNamespace;
            delete scope.setMsgNS;
            delete scope.msgNS;
            expect(scope).toEqual({});
        });

        it("can get message by key", function(){
            NlsScope(scope);
            expect(scope.msg("neco.msg")).toBe("Message");
        });

        it("can set namespace", function(){
            NlsScope(scope);
            scope.setMsgNS("neco");
            expect(scope.msgNamespace).toBe("neco");
            scope.setMsgNS("neco1");
            expect(scope.msgNamespace).toBe("neco1");
        });

        it("can get namespaced message by key", function(){
            NlsScope(scope);
            scope.setMsgNS("neco");
            expect(scope.msgNS("msg")).toBe("Message");
        });

        it("is initialized with namespace", function(){
            NlsScope(scope, "neco");
            expect(scope.msgNamespace).toBe("neco");
        });

    }]
});



