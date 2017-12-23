var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Test2Client = (function () {
    function Test2Client() {
        this._view = fairygui.UIPackage.createObject("demo", "Test2", Test2View);
        this._presenter = new Test2Presenter(this._view);
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        console.log(fairygui.GRoot.inst.width);
        fairygui.GRoot.inst.addChild(this._view);
    }
    return Test2Client;
}());
__reflect(Test2Client.prototype, "Test2Client");
//# sourceMappingURL=Test2Client.js.map