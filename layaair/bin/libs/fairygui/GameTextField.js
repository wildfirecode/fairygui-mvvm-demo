(function () {
    fairygui.GTextField.prototype.bindText = function () {
        var chainStr = this.text;
        if (!chainStr)
            return;
        if (chainStr.indexOf('{') != -1 && chainStr.indexOf('}') != -1) {
            chainStr = chainStr.slice(1, chainStr.length - 1);
            var chain = chainStr.split('.');
            ui.Binding.bindProperty(this.parent, chain, this, 'text');
        }
    };
    const setup_afterAdd = fairygui.GTextField.prototype.setup_afterAdd;
    fairygui.GTextField.prototype.setup_afterAdd = function (xml) {
        setup_afterAdd.call(this, xml);
        this.bindText();
    };
})();