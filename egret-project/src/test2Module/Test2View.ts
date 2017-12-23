type ITest2View = {
    button1: fairygui.GButton;
    button2: fairygui.GButton;
    text1: fairygui.GTextField;
}

class Test2View extends fairygui.GComponent {
    //view interface declare start

    //view interface declare over
    constructFromXML(xml) {
        super.constructFromXML(xml);
        this['button1'] = this.getChild('button1')
        this['button2'] = this.getChild('button2')
        this['text1'] = this.getChild('text1')
    }
}