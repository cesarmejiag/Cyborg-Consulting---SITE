import Classie from './util/classie';

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
            button.addEventListener('click', this.handleClick.bind(this))
        }
    }

    private handleClick({ currentTarget }) {
        const key = currentTarget.dataset['key'];
        for (let i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i] === currentTarget) {
                Classie.addClass(<HTMLElement>this.buttons[i], 'active');
            } else {
                Classie.removeClass(<HTMLElement>this.buttons[i], 'active');
            }
        }

        this.changeSlide(key);
    }

    changeSlide(key: string) {
        for (let i = 0; i < this.slides.length; i++) {
            const slide: HTMLElement = <HTMLElement>this.slides[i];

            if (slide.dataset['key'] === key) {
                Classie.addClass(slide, 'active');
            } else {
                Classie.removeClass(slide, 'active');
            }
        }
    }

}

export default ElSlider;