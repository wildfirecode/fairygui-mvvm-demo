var Test2Presenter = /** @class */ (function () {
    function Test2Presenter(view) {
        this._view = view;
        this._view.setOnclick1(this.onclick1, this);
        this._view.setOnclick2(this.onclick2, this);
        this._view.text1Text = 'please click the buttons.';
    }
    Test2Presenter.prototype.onclick1 = function () {
        this._view.text1Text = 'button1 clicked.';
    };
    Test2Presenter.prototype.onclick2 = function () {
        this._view.text1Text = 'button2 clicked.';
    };
    return Test2Presenter;
}());
//# sourceMappingURL=Test2Presenter.js.map