var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Test2Presenter = (function () {
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
__reflect(Test2Presenter.prototype, "Test2Presenter");
//# sourceMappingURL=Test2Presenter.js.map