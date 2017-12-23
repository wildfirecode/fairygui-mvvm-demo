var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test2View = /** @class */ (function (_super) {
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
        this.button1.onClick(thisObj, listener);
    };
    Test2View.prototype.setOnclick2 = function (listener, thisObj) {
        this.button2.onClick(thisObj, listener);
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
//# sourceMappingURL=Test2View.js.map