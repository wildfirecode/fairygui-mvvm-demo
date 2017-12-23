(function () {
    Object.defineProperty(fairygui.GButton.prototype, "$onclick", {
        set: function (val) {
            if (!val)
                return;
            this.onClick(val.thisobj, val.listener);
        },
        enumerable: true,
        configurable: true
    });

    const setup_beforeAdd = fairygui.GButton.prototype.setup_beforeAdd;
    fairygui.GButton.prototype.setup_beforeAdd = function (xml) {
        setup_beforeAdd.call(this, xml);
        if (xml.attributes.onclick)
            this['$onclickChain'] = xml.attributes.onclick.textContent;
    };

    fairygui.GButton.prototype.bindClick = function (chainStr) {
        if (!chainStr)
            return;
        if (chainStr.indexOf('{') != -1 && chainStr.indexOf('}') != -1) {
            chainStr = chainStr.slice(1, chainStr.length - 1);
            var chain = chainStr.split('.');
            ui.Binding.bindProperty(this.parent, chain, this, '$onclick');
        }
    };
    const setup_afterAdd = fairygui.GButton.prototype.setup_afterAdd;
    fairygui.GButton.prototype.setup_afterAdd = function (xml) {
        setup_afterAdd.call(this, xml);
        this.bindClick(this['$onclickChain']);
        this['$onclickChain'] = null;
    };
})();
