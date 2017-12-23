class Test2Presenter {
    private _view: ITest2View;
    constructor(view: ITest2View) {
        this._view = view;
        this._view.setOnclick1(this.onclick1, this);
        this._view.setOnclick1(this.onclick2, this);
        this._view.text1Text = 'please click the buttons.';
    }

    private onclick1() {
        this._view.text1Text = 'button1 clicked.';
    }

    private onclick2() {
        this._view.text1Text = 'button2 clicked.';
    }
}