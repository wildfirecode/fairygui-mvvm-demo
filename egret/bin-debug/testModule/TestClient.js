var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TestClient = (function () {
    function TestClient() {
        this._view = fairygui.UIPackage.createObject("demo", "Test");
        this._viewModel = new TestViewModel();
        this._view['vm'] = this._viewModel;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        console.log(fairygui.GRoot.inst.width);
        fairygui.GRoot.inst.addChild(this._view);
    }
    return TestClient;
}());
__reflect(TestClient.prototype, "TestClient");
//# sourceMappingURL=TestClient.js.map