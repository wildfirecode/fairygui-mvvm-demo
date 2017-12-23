class TestViewModel {
    private onclick1: { listener, thisobj };
    private onclick2: { listener, thisobj };
    private clickedText: string;

    constructor() {
        this.clickedText = 'please click the buttons.';
        this.onclick1 = {
            listener: () => {
                this.clickedText = 'button1 clicked.';
                console.log(this.clickedText)
            },
            thisobj: this
        };

        this.onclick2 = {
            listener: () => {
                this.clickedText = 'button2 clicked.';
                console.log(this.clickedText)
            },
            thisobj: this
        };
    }
}