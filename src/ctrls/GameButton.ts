class GameButton extends fairygui.GButton {
    set $onclick(val: { listener, thisobj }) {
        if(!val)return;
        this.addClickListener(val.listener, val.thisobj);
    }

    setup_beforeAdd(xml: any) {
        super.setup_beforeAdd(xml);
        this['$onclickChain'] = xml.attributes.onclick;
    }

    private bindClick(chainStr: string) {
        if (!chainStr) return;
        if (chainStr.indexOf('{') != -1 && chainStr.indexOf('}') != -1) { //{vm.onclick}
            chainStr = chainStr.slice(1, chainStr.length - 1);
            const chain = chainStr.split('.');
            ui.Binding.bindProperty(this.parent, chain, this, '$onclick');
        }
    }

    setup_afterAdd(xml: any) {
        super.setup_afterAdd(xml);
        this.bindClick(this['$onclickChain']);
        this['$onclickChain'] = null;
    }
}

fairygui.GButton = GameButton;