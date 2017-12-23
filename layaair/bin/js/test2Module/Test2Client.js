var Test2Client = /** @class */ (function () {
    function Test2Client() {
        this._view = fairygui.UIPackage.createObject("demo", "Test2", Test2View);
        this._presenter = new Test2Presenter(this._view);
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        console.log(fairygui.GRoot.inst.width);
        fairygui.GRoot.inst.addChild(this._view);
    }
    return Test2Client;
}());
//# sourceMappingURL=Test2Client.js.map