var TestViewModel = /** @class */ (function () {
    function TestViewModel() {
        var _this = this;
        this.clickedText = 'please click the buttons.';
        this.onclick1 = {
            listener: function () {
                _this.clickedText = 'button1 clicked.';
            },
            thisobj: this
        };
        this.onclick2 = {
            listener: function () {
                _this.clickedText = 'button2 clicked.';
            },
            thisobj: this
        };
    }
    return TestViewModel;
}());
//# sourceMappingURL=TestViewModel.js.map