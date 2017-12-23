class Test2Presenter {
    private _view: ITest2View;
    constructor(view: ITest2View) {
        this._view = view;
        this._view.button1.addClickListener(this.onclick1,this);
        this._view.button2.addClickListener(this.onclick2,this);
        this._view.text1.text = 'please click the buttons.';
    }

    private onclick1() {
        this._view.text1.text = 'button1 clicked.';
    }

    private onclick2() {
        this._view.text1.text = 'button2 clicked.';
    }
}