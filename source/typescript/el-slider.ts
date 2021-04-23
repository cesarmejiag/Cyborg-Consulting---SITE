class ElSlider {

    private slides: NodeList;
    private buttons: NodeList;

    constructor(el: HTMLElement) {
        if (!el) {
            throw new Error(`Can't initialize ElSlider`);
        }

        this.slides = el.querySelectorAll('.slides .slide');
        this.buttons = el.querySelectorAll('.buttons button');

        this.initEvents();
    }

    private initEvents() {
        for (let i = 0; i < this.buttons.length; i++) {
            const button: HTMLElement = <HTMLElement>this.buttons[i];
            button.addEventListener('click', this.handleClick)
        }
    }

    private handleClick({ currentTarget }) {
        const key = currentTarget.dataset['key'];
        console.log(key);
    }

}

export default ElSlider;