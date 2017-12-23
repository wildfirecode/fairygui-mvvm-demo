var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TestViewModel = (function () {
    function TestViewModel() {
        var _this = this;
        this.clickedText = 'please click the buttons.';
        this.onclick1 = {
            listener: function () {
                _this.clickedText = 'button1 clicked.';
                console.log(_this.clickedText);
            },
            thisobj: this
        };
        this.onclick2 = {
            listener: function () {
                _this.clickedText = 'button2 clicked.';
                console.log(_this.clickedText);
            },
            thisobj: this
        };
    }
    return TestViewModel;
}());
__reflect(TestViewModel.prototype, "TestViewModel");
//# sourceMappingURL=TestComponentViewModel.js.map