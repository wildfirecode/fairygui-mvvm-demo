var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TestClient = (function () {
    function TestClient() {
        this._testComponent = fairygui.UIPackage.createObject("demo", "Test");
        this._testComponent['vm'] = new TestViewModel();
        this._testComponent.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        console.log(fairygui.GRoot.inst.width);
        fairygui.GRoot.inst.addChild(this._testComponent);
    }
    return TestClient;
}());
__reflect(TestClient.prototype, "TestClient");
//# sourceMappingURL=TestClient.js.map