class GameTextField extends fairygui.GTextField {
    private bindText() {
        let chainStr = this.text;
        if (!chainStr) return;
        if (chainStr.indexOf('{') != -1 && chainStr.indexOf('}') != -1) { //{vm.clickedText}
            chainStr = chainStr.slice(1, chainStr.length - 1);
            const chain = chainStr.split('.');
            ui.Binding.bindProperty(this.parent, chain, this, 'text');
        }
    }

    setup_afterAdd(xml: any) {
        super.setup_afterAdd(xml);
        this.bindText();
    }
}

fairygui.GTextField = GameTextField;