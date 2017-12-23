var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Test2View = (function (_super) {
    __extends(Test2View, _super);
    function Test2View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test2View.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this['button1'] = this.getChild('button1');
        this['button2'] = this.getChild('button2');
        this['text1'] = this.getChild('text1');
    };
    /////////////////view interface declare start
    Test2View.prototype.setOnclick1 = function (listener, thisObj) {
        this.button1.addClickListener(listener, thisObj);
    };
    Test2View.prototype.setOnclick2 = function (listener, thisObj) {
        this.button2.addClickListener(listener, thisObj);
    };
    Object.defineProperty(Test2View.prototype, "text1Text", {
        set: function (content) {
            this.text1.text = content;
        },
        enumerable: true,
        configurable: true
    });
    return Test2View;
}(fairygui.GComponent));
__reflect(Test2View.prototype, "Test2View");
//# sourceMappingURL=Test2View.js.map