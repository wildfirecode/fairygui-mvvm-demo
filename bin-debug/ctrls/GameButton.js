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
var GameButton = (function (_super) {
    __extends(GameButton, _super);
    function GameButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GameButton.prototype, "$onclick", {
        set: function (val) {
            if (!val)
                return;
            this.addClickListener(val.listener, val.thisobj);
        },
        enumerable: true,
        configurable: true
    });
    GameButton.prototype.setup_beforeAdd = function (xml) {
        _super.prototype.setup_beforeAdd.call(this, xml);
        this['$onclickChain'] = xml.attributes.onclick;
    };
    GameButton.prototype.bindClick = function (chainStr) {
        if (!chainStr)
            return;
        if (chainStr.indexOf('{') != -1 && chainStr.indexOf('}') != -1) {
            chainStr = chainStr.slice(1, chainStr.length - 1);
            var chain = chainStr.split('.');
            ui.Binding.bindProperty(this.parent, chain, this, '$onclick');
        }
    };
    GameButton.prototype.setup_afterAdd = function (xml) {
        _super.prototype.setup_afterAdd.call(this, xml);
        this.bindClick(this['$onclickChain']);
        this['$onclickChain'] = null;
    };
    return GameButton;
}(fairygui.GButton));
__reflect(GameButton.prototype, "GameButton");
fairygui.GButton = GameButton;
//# sourceMappingURL=GameButton.js.map