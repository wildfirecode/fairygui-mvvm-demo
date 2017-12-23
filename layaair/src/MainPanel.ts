class MainPanel {
    private _view: fairygui.GComponent;
    private _list: fairygui.GList;

    public constructor() {
        this._view = fairygui.UIPackage.createObject("Bag","Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        
        this._list = this._view.getChild("list").asList;
        this._list.on(fairygui.Events.CLICK_ITEM, this, this.__clickItem);	

       	for(var i:number = 0;i < 10; i++)
        {
            var button:fairygui.GButton = this._list.getChildAt(i).asButton;
            button.icon = "res/i" + Math.floor(Math.random() * 10) + ".png";
            button.title = "" + Math.floor(Math.random() * 100);
        }
    }
    
    private __clickItem(itemObject:fairygui.GObject):void {
        var item: fairygui.GButton = <fairygui.GButton>itemObject;
        this._view.getChild("n3").asLoader.url = item.icon;
        this._view.getChild("n5").text = item.icon;
    }
}
