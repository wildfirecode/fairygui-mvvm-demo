var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MyGLoader = (function (_super) {
    __extends(MyGLoader, _super);
    function MyGLoader() {
        return _super.call(this) || this;
    }
    MyGLoader.prototype.loadExternal = function () {
        RES.getResByUrl(this.url, this.__myGetResCompleted, this);
    };
    MyGLoader.prototype.__myGetResCompleted = function (res, key) {
        if (res instanceof egret.Texture)
            this.onExternalLoadSuccess(res);
        else
            this.onExternalLoadFailed();
    };
    return MyGLoader;
}(fairygui.GLoader));
__reflect(MyGLoader.prototype, "MyGLoader");
//# sourceMappingURL=MyGLoader.js.map