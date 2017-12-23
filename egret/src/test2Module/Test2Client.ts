class Test2Client {
    private _view: ITest2View;
    private _presenter: Test2Presenter;

    public constructor() {
        this._view = fairygui.UIPackage.createObject("demo", "Test2", Test2View) as any;
        
        this._presenter = new Test2Presenter(this._view);

        (this._view as any).setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        console.log(fairygui.GRoot.inst.width);
        fairygui.GRoot.inst.addChild((this._view as any));
    }
}
