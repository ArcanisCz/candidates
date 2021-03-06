"use strict";
function getNumberOfProperties(a) {
    return Object.keys(a).length
}
function getFirstProperty(a) {
    var b = Object.keys(a);
    return a[b[0]]
}
function getLastProperty(a) {
    var b = Object.keys(a);
    return a[b[b.length - 1]]
}
function getNextProperty(a, b) {
    var c = Object.keys(a), d = c.indexOf(b.toString()), e = c[d + 1];
    return a[e]
}
function getPreviousProperty(a, b) {
    var c = Object.keys(a), d = c.indexOf(b.toString()), e = c[d - 1];
    return a[e]
}
var jsTag = angular.module("jsTag", []);
jsTag.constant("jsTagDefaults", {edit: !0, defaultTags: [], breakCodes: [13, 44], splitter: ",", texts: {inputPlaceHolder: "Input text", removeSymbol: String.fromCharCode(215)}});
var jsTag = angular.module("jsTag");
jsTag.filter("inArray", function () {
    return function (a, b) {
        for (var c in b)if (a === b[c])return!0;
        return!1
    }
}), jsTag.filter("toArray", function () {
    return function (a) {
        var b = [];
        for (var c in a) {
            var d = a[c];
            b.push(d)
        }
        return b
    }
});
var jsTag = angular.module("jsTag");
jsTag.factory("JSTag", function () {
    function a(a, b) {
        this.value = a, this.id = b
    }

    return a
});
var jsTag = angular.module("jsTag");
jsTag.factory("JSTagsCollection", ["JSTag", "$filter", function (a, b) {
    function c(a) {
        this.tags = {}, this.tagsCounter = 0;
        for (var b in a) {
            var c = a[b];
            this.addTag(c)
        }
        this.unsetActiveTags(), this.unsetEditedTag()
    }

    return c.prototype.addTag = function (b) {
        var c = this.tagsCounter;
        this.tagsCounter++;
        var d = new a(b, c);
        this.tags[c] = d
    }, c.prototype.removeTag = function (a) {
        delete this.tags[a]
    }, c.prototype.getNumberOfTags = function () {
        return getNumberOfProperties(this.tags)
    }, c.prototype.getPreviousTag = function (a) {
        var b = getFirstProperty(this.tags);
        return b.id === a.id ? a : getPreviousProperty(this.tags, a.id)
    }, c.prototype.getNextTag = function (a) {
        var b = getLastProperty(this.tags);
        return a.id === b.id ? a : getNextProperty(this.tags, a.id)
    }, c.prototype.isTagActive = function (a) {
        return b("inArray")(a, this._activeTags)
    }, c.prototype.setActiveTag = function (a) {
        this.isTagActive(a) || this._activeTags.push(a)
    }, c.prototype.setLastTagActive = function () {
        if (getNumberOfProperties(this.tags) > 0) {
            var a = getLastProperty(this.tags);
            this.setActiveTag(a)
        }
    }, c.prototype.unsetActiveTag = function (a) {
        this._activeTags.splice(this._activeTags.indexOf(a), 1)
    }, c.prototype.unsetActiveTags = function () {
        this._activeTags = []
    }, c.prototype.getActiveTag = function () {
        var a = null;
        return 1 === this._activeTags.length && (a = this._activeTags[0]), a
    }, c.prototype.getNumOfActiveTags = function () {
        return this._activeTags.length
    }, c.prototype.getEditedTag = function () {
        return this._editedTag
    }, c.prototype.isTagEdited = function (a) {
        return a === this._editedTag
    }, c.prototype.setEditedTag = function (a) {
        this._editedTag = a
    }, c.prototype.unsetEditedTag = function () {
        void 0 !== this._editedTag && null !== this._editedTag && "" === this._editedTag.value && this.removeTag(this._editedTag.id), this._editedTag = null
    }, c
}]);
var jsTag = angular.module("jsTag");
jsTag.factory("InputService", ["$filter", function (a) {
    function b(a) {
        this.input = "", this.isWaitingForInput = a.autoFocus || !1, this.options = a
    }

    return b.prototype.onKeydown = function (b, c, d) {
        var e = d.$event, f = e.which, g = $(e.currentTarget);
        if (a("inArray")(f, this.options.breakCodes) !== !1)b.breakCodeHit(c, this.options); else switch (f) {
            case 9:
                break;
            case 37:
            case 8:
                "" === b.input && c.setLastTagActive()
        }
    }, b.prototype.tagInputKeydown = function (b, c) {
        {
            var d = c.$event, e = d.which;
            $(d.currentTarget)
        }
        a("inArray")(e, this.options.breakCodes) !== !1 && this.breakCodeHitOnEdit(b)
    }, b.prototype.resetInput = function () {
        var a = this.input;
        return this.input = "", a
    }, b.prototype.focusInput = function () {
        this.isWaitingForInput = !0
    }, b.prototype.breakCodeHit = function (a, b) {
        if ("" !== this.input) {
            var c = this.resetInput();
            c instanceof Object && (c = c[Object.keys(c)[0]]);
            var d = c.split(b.splitter);
            for (var e in d) {
                var f = d[e];
                a.addTag(f)
            }
        }
    }, b.prototype.breakCodeHitOnEdit = function (a) {
        var b = a.getEditedTag();
        b.value instanceof Object && (b.value = b.value[Object.keys(b.value)[0]]), a.unsetEditedTag(), this.isWaitingForInput = !0
    }, b
}]);
var jsTag = angular.module("jsTag");
jsTag.factory("TagsInputService", ["JSTag", "JSTagsCollection", function (a, b) {
    function c(a) {
        this.options = a;
        var c = a.tags;
        if (c && c.__proto__ === b.prototype)this.tagsCollection = c; else {
            var d = a.defaultTags;
            this.tagsCollection = new b(d)
        }
        this.shouldBlurActiveTag = !0
    }

    return c.prototype.tagClicked = function (a) {
        this.tagsCollection.setActiveTag(a)
    }, c.prototype.tagDblClicked = function (a) {
        var b = this.options.edit;
        b && this.tagsCollection.setEditedTag(a)
    }, c.prototype.onActiveTagKeydown = function (a, b) {
        var c = this.tagsCollection.getActiveTag();
        if (null !== c) {
            var d = b.$event, e = function () {
                this.shouldBlurActiveTag && this.onActiveTagBlur(b)
            };
            switch (d.which) {
                case 13:
                    var f = this.options.edit;
                    f && (e.apply(this), this.tagsCollection.setEditedTag(c));
                    break;
                case 8:
                    this.tagsCollection.removeTag(c.id), a.isWaitingForInput = !0;
                    break;
                case 37:
                    e.apply(this);
                    var g = this.tagsCollection.getPreviousTag(c);
                    this.tagsCollection.setActiveTag(g);
                    break;
                case 39:
                    e.apply(this);
                    var h = this.tagsCollection.getNextTag(c);
                    h !== c ? this.tagsCollection.setActiveTag(h) : a.isWaitingForInput = !0
            }
        }
    }, c.prototype.onActiveTagBlur = function () {
        var a = this.tagsCollection.getActiveTag();
        null !== a && this.tagsCollection.unsetActiveTag(a)
    }, c.prototype.onEditTagBlur = function (a) {
        a.unsetEditedTag(), this.isWaitingForInput = !0
    }, c
}]);
var jsTag = angular.module("jsTag"), jsTag = angular.module("jsTag");
jsTag.controller("JSTagMainCtrl", ["$attrs", "$scope", "InputService", "TagsInputService", "jsTagDefaults", function (a, b, c, d, e) {
    var f = {};
    try {
        f = b.$eval(a.jsTagOptions)
    } catch (g) {
        console.log("jsTag Error: Invalid user options, using defaults only")
    }
    var h = angular.copy(e);
    void 0 !== f && (f.texts = angular.extend(h.texts, f.texts || {}), angular.extend(h, f)), b.options = h, b.tagsInputService = new d(b.options), b.inputService = new c(b.options);
    var i = b.tagsInputService.tagsCollection;
    b.tagsCollection = i, b.$watch("tagsCollection._editedTag", function (a) {
        b.isThereAnEditedTag = null !== a
    }), b.$watchCollection("tagsCollection._activeTags", function (a) {
        b.isThereAnActiveTag = a.length > 0
    })
}]);
var jsTag = angular.module("jsTag");
jsTag.directive("jsTag", ["$templateCache", function () {
    return{restrict: "E", scope: !0, controller: "JSTagMainCtrl", templateUrl: function (a, b) {
        var c = b.jsTagMode || "default";
        return"jsTag/source/templates/" + c + "/js-tag.html"
    }}
}]), jsTag.directive("ngBlur", ["$parse", function (a) {
    return{restrict: "A", link: function (b, c, d) {
        var e = a(d.ngBlur);
        c.bind("blur", function (a) {
            b.$apply(function () {
                e(b, {$event: a})
            })
        })
    }}
}]), jsTag.directive("focusMe", ["$parse", "$timeout", function (a, b) {
    return{restrict: "A", link: function (c, d, e) {
        var f = a(e.focusMe);
        c.$watch(f, function (a) {
            a === !0 && b(function () {
                d[0].focus()
            })
        }), d.bind("blur", function () {
            c.$apply(f.assign(c, !1))
        })
    }}
}]), jsTag.directive("focusOnce", ["$timeout", function (a) {
    return{restrict: "A", link: function (b, c) {
        a(function () {
            c[0].select()
        })
    }}
}]), jsTag.directive("autoGrow", ["$timeout", function (a) {
    return{link: function (b, c) {
        var d = (c.css("paddingLeft"), c.css("paddingRight"), angular.element("<span></span>").css({position: "absolute", top: "-10000px", left: "-10000px", fontSize: c.css("fontSize"), fontFamily: c.css("fontFamily"), "white-space": "pre"}));
        c.after(d);
        var e = function () {
            var a = c.val().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");
            d.html("" !== a ? a : c[0].placeholder);
            var b = d[0].offsetWidth + 10 + "px";
            c.css("width", b)
        }, f = c.attr("ng-model");
        f ? b.$watch(f, e) : c.bind("keyup keydown", e), a(e)
    }}
}]), angular.module("jsTag").run(["$templateCache", function (a) {
    a.put("jsTag/source/templates/default/js-tag.html", '<div\n  class="jt-editor"\n  ng-click="inputService.focusInput()" >\n  <span\n    ng-repeat="tag in tagsCollection.tags | toArray:orderBy:\'id\'"\n    ng-switch="tagsCollection.isTagEdited(tag)">\n    <span\n      ng-switch-when="false"\n      class="jt-tag active-{{tagsCollection.isTagActive(this.tag)}}">\n      <span\n        class="value"\n        ng-click="tagsInputService.tagClicked(this.tag)"\n        ng-dblclick="tagsInputService.tagDblClicked(this.tag)">\n        {{tag.value}}\n      </span>\n      <span class="remove-button" ng-click="tagsCollection.removeTag(this.tag.id)">{{options.texts.removeSymbol}}</span>\n    </span>\n    <span\n      ng-switch-when="true">\n      <input\n        type="text"\n        class="jt-tag-edit"\n        focus-once\n        ng-model="tag.value"\n        data-tag-id="{{tag.id}}"\n        ng-keydown="inputService.tagInputKeydown(tagsCollection, {$event: $event})"\n        placeholder="{{options.texts.inputPlaceHolder}}"\n        auto-grow\n        />\n    </span>\n  </span>\n  <input\n    class="jt-tag-new"\n    type="text"\n    focus-me="inputService.isWaitingForInput"\n    ng-model="inputService.input"\n    ng-hide="isThereAnEditedTag"\n    ng-keydown="inputService.onKeydown(inputService, tagsCollection, {$event: $event})"\n    placeholder="{{options.texts.inputPlaceHolder}}"\n    auto-grow\n  />\n  <input\n    class="jt-fake-input"\n    focus-me="isThereAnActiveTag"\n    ng-keydown="tagsInputService.onActiveTagKeydown(inputService, {$event: $event})"\n    ng-blur="tagsInputService.onActiveTagBlur()" />\n</div>'), a.put("jsTag/source/templates/typeahead/js-tag.html", '<div\n  class="jt-editor"\n  ng-click="inputService.focusInput()" >\n  <span\n    ng-repeat="tag in tagsCollection.tags | toArray:orderBy:\'id\'"\n    ng-switch="tagsCollection.isTagEdited(tag)">\n    <span\n      ng-switch-when="false"\n      class="jt-tag active-{{tagsCollection.isTagActive(this.tag)}}">\n      <span\n        class="value"\n        ng-click="tagsInputService.tagClicked(this.tag)"\n        ng-dblclick="tagsInputService.tagDblClicked(this.tag)">\n        {{tag.value}}\n      </span>\n      <span class="remove-button" ng-click="tagsCollection.removeTag(this.tag.id)">{{options.texts.removeSymbol}}</span>\n    </span>\n    <span\n      ng-switch-when="true">\n      <input\n        type="text"\n        class="jt-tag-edit"\n        focus-once\n        ng-model="tag.value"\n        data-tag-id="{{tag.id}}"\n        ng-keydown="inputService.tagInputKeydown(tagsCollection, {$event: $event})"\n        placeholder="{{options.texts.inputPlaceHolder}}"\n        auto-grow\n        options="exampleOptions" datasets="exampleData"\n        bs-typeahead\n        />\n    </span>\n  </span>\n  <input\n    class="jt-tag-new"\n    type="text"\n    focus-me="inputService.isWaitingForInput"\n    ng-model="inputService.input"\n    ng-hide="isThereAnEditedTag"\n    ng-keydown="inputService.onKeydown(inputService, tagsCollection, {$event: $event})"\n    placeholder="{{options.texts.inputPlaceHolder}}"\n    auto-grow\n    options="exampleOptions" datasets="exampleData"\n    bs-typeahead\n  />\n  <input\n    class="jt-fake-input"\n    focus-me="isThereAnActiveTag"\n    ng-keydown="tagsInputService.onActiveTagKeydown(inputService, {$event: $event})"\n    ng-blur="tagsInputService.onActiveTagBlur()" />\n</div>')
}]);