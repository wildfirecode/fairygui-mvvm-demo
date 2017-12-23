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
var GameTextField = (function (_super) {
    __extends(GameTextField, _super);
    function GameTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameTextField.prototype.bindText = function () {
        var chainStr = this.text;
        if (!chainStr)
            return;
        if (chainStr.indexOf('{') != -1 && chainStr.indexOf('}') != -1) {
            chainStr = chainStr.slice(1, chainStr.length - 1);
            var chain = chainStr.split('.');
            ui.Binding.bindProperty(this.parent, chain, this, 'text');
        }
    };
    GameTextField.prototype.setup_afterAdd = function (xml) {
        _super.prototype.setup_afterAdd.call(this, xml);
        this.bindText();
    };
    return GameTextField;
}(fairygui.GTextField));
__reflect(GameTextField.prototype, "GameTextField");
fairygui.GTextField = GameTextField;
//# sourceMappingURL=GameTextField.js.map