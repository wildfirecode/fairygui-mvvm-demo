var TestClient = /** @class */ (function () {
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
//# sourceMappingURL=TestClient.js.map