type ITest2View = {
    setOnclick1(listener: Function, thisObj: any);
    setOnclick2(listener: Function, thisObj: any);
    text1Text: string;
}

class Test2View extends fairygui.GComponent {
    private button1: fairygui.GButton;
    private button2: fairygui.GButton;
    private text1: fairygui.GTextField;

    constructFromXML(xml) {
        super.constructFromXML(xml);
        this['button1'] = this.getChild('button1') as fairygui.GButton
        this['button2'] = this.getChild('button2') as fairygui.GButton
        this['text1'] = this.getChild('text1') as fairygui.GTextField
    }

    /////////////////view interface declare start
    setOnclick1(listener: Function, thisObj: any) {
        this.button1.addClickListener(listener, thisObj);
    }

    setOnclick2(listener: Function, thisObj: any) {
        this.button2.addClickListener(listener, thisObj);
    }

    set text1Text(content: string) {
        this.text1.text = content;
    }
    /////////////////////view interface declare over
}