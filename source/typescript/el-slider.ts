import Classie from './util/classie';

class ElSlider {

    private slidesWrapper: HTMLElement;
    private slides: NodeList;
    private buttons: NodeList;
    private interval: any;
    private current = 0;

    constructor(el: HTMLElement) {
        if (!el) {
            throw new Error(`Can't initialize ElSlider`);
        }

        this.slidesWrapper = el.querySelector('.slides');
        this.slides = el.querySelectorAll('.slides .slide');
        this.buttons = el.querySelectorAll('.buttons button');

        window.addEventListener('load', () => {
            this.setHeight();
            this.initEvents();
            this.setInterval();
        });
    }

    private setInterval() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.current = (this.current < this.slides.length - 1) ? this.current + 1 : 0;
            (<HTMLElement>this.buttons[this.current]).click();
        }, 5000);
    }

    private initEvents() {
        for (let i = 0; i < this.buttons.length; i++) {
            const button: HTMLElement = <HTMLElement>this.buttons[i];
            button.addEventListener('click', this.handleClick.bind(this));
        }
    }

    private handleClick({ currentTarget }) {
        let j;
        for (let i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i] === currentTarget) {
                Classie.addClass(<HTMLElement>this.buttons[i], 'active');
                j = i;
            } else {
                Classie.removeClass(<HTMLElement>this.buttons[i], 'active');
            }
        }

        this.slidesWrapper.style.transform = `translateX(-${j * 100}%)`;

        this.current = j;
        this.setInterval();
        setTimeout(() => this.setHeight(), 375);
    }

    private setHeight() {
        this.slidesWrapper.style.height = (<HTMLElement>this.slides[this.current]).clientHeight + 'px';
    }

}

export default ElSlider;