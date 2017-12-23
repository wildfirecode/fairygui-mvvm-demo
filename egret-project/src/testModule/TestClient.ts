class TestClient {
    private _testComponent;

    public constructor() {
        this._testComponent = fairygui.UIPackage.createObject("demo", "Test");
        this._testComponent['vm'] = new TestViewModel();
        this._testComponent.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        console.log(fairygui.GRoot.inst.width);
        fairygui.GRoot.inst.addChild(this._testComponent);
    }
}
