var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("Bag", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._list = this._view.getChild("list").asList;
        this._list.on(fairygui.Events.CLICK_ITEM, this, this.__clickItem);
        for (var i = 0; i < 10; i++) {
            var button = this._list.getChildAt(i).asButton;
            button.icon = "res/i" + Math.floor(Math.random() * 10) + ".png";
            button.title = "" + Math.floor(Math.random() * 100);
        }
    }
    MainPanel.prototype.__clickItem = function (itemObject) {
        var item = itemObject;
        this._view.getChild("n3").asLoader.url = item.icon;
        this._view.getChild("n5").text = item.icon;
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map