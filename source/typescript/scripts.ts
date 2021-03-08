/**
 * Make your magic here!
 */

import ContactForm from './ContactForm';
import Classie from './util/Classie';
import { Carrousel } from './utilCustom.carrousel';


(() => {
    'use strict'
    // Register service worker.
    if ("serviceWorker" in navigator) {
        const swPath = 'sw.js';

        navigator.serviceWorker.register(swPath)
            .then(res => { console.log('Service worker registered.') })
            .catch(res => { console.log('Can not find service worker.') })
    }

    let q = (selector: string, target?: any) => (target || document).querySelector(selector);
    let qa = (selector: string, target?: any) => (target || document).querySelectorAll(selector);


    const Page = {
        init() {
            Page.homeCarousel();
            Page.Navigation.init();
            Page.sideBar();
        },
        setStyleAttribute(element: HTMLElement, attrs: { [key: string]: string }) {
            if (attrs !== undefined) {
                Object.keys(attrs).forEach((key: string) => {
                    return element.style.setProperty(key, attrs[key]);
                });
            }
        },
        homeCarousel() {
            let carrouselClients = new Carrousel;
            let carrouselPartners = new Carrousel;
            let utilC = $('.block.clients .util-carrousel');
            let utilP = $('.block.partners .util-carrousel');
            if (!utilC || !utilP) return;

            carrouselClients.init(
                utilC,
                {
                    autoPlay: true,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 5,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }, ''
            );
            carrouselPartners.init(
                utilP,
                {
                    autoPlay: false,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 3,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }, ''
            )
        },
        sideBar() {
            let generalWrapper = q('.block.wrapper-template', document);
            let sideBar = q('.sidebar-menu', generalWrapper);
            let wrapperSections = q('.wrapper-sections', generalWrapper);
            if (generalWrapper) {
                let reqAnimFrame = window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
                let calc = () => {
                    let rect = generalWrapper.getBoundingClientRect();
                    let rectWrapperSections = wrapperSections.getBoundingClientRect();
                    if (rect.top <= 80) {
                        Page.setStyleAttribute(sideBar, { 'position': 'fixed', 'left': '0', 'top': '80px' });
                        Page.setStyleAttribute(wrapperSections, { 'margin-left': 'auto' });
                    }

                    if (rect.top >= 80) {
                        Page.setStyleAttribute(sideBar, { 'position': 'relative', 'left': 'unset', 'top': 'unset' });
                        Page.setStyleAttribute(wrapperSections, { 'margin-left ': 'auto' });
                        Page.setStyleAttribute(generalWrapper, { 'align-items': 'flex-start' });
                    }

                    if (rectWrapperSections.bottom <= window.innerHeight) {
                        Page.setStyleAttribute(sideBar, { 'position': 'relative', 'left': 'unset', 'top': 'unset' });
                        Page.setStyleAttribute(wrapperSections, { 'margin-left ': 'auto' });
                        Page.setStyleAttribute(generalWrapper, { 'align-items': 'flex-end' });
                    }
                }

                window.onscroll = function () {
                    reqAnimFrame(calc);
                };

                window.onresize = function () {
                    reqAnimFrame(calc);
                };
            }
        },
        Navigation: {
            toggleBtn: null,
            navigation: null,
            wrapper: null,
            init() {
                this.navigation = q('.navigation', null);
                this.toggleBtn = q('.toggle-btn', this.navigation);
                this.wrapper = q('.list-wrapper', this.navigation);

                this.toggleCollapsed = this.toggleCollapsed.bind(this);
                this.toggleBtn.addEventListener('click', this.toggleCollapsed);
            },
            toggleCollapsed() {
                if (this.wrapper.classList.contains('list-collapsed')) {
                    this.wrapper.classList.remove('list-collapsed');
                }
                else {
                    this.wrapper.classList.add('list-collapsed');
                }
            }
        }
    }

    Page.init();

    // Initialize Contact Form

    /**
     * Show or hide element
     * @param {HTMLElement} element
     * @param {boolean} show
     */
    function showElement(element, show) {
        show
            ? Classie.addClass(element, 'displayed')
            : Classie.removeClass(element, 'displayed');
    }

    /**
     * Handle form error event.
     * @param {number} status
     * @param {string} statusText
     */
    function handleError(status, statusText) {
        // Show message in console.
        console.log('There was an error. \nStatus: %s\nStatusText: %s', status, statusText);

        message.innerHTML = `<div class="text error">No pudimos enviar tu mensaje, por favor intentalo más tarde.</div>`;

        setTimeout(function () {
            showElement(wrapper, true);
            showElement(message, false);

            message.innerText = "";
        }, 3000);
    }

    /**
     * Handle form sending event.
     */
    function handleSending() {
        // Show message in console.
        console.log('Sending...');

        showElement(wrapper, false);
        showElement(message, true);

        message.innerHTML = `<div class="text sending">Enviando mensaje...</div>`;
    }

    /**
     * Handle form success event.
     * @param {object} response
     * @param {string} status
     * @param {string} statusText
     */
    function handleSuccess(response, status, statusText) {
        // Show message in console.
        console.log('The message has been sent successfuly. \nStatus: %s\nStatusText: %s', status, statusText);
        console.log(response);

        if (parseInt(response) === 1) {
            message.innerHTML = `<div class="text sent">¡Mensaje enviado!</div>`;

            setTimeout(function () {
                showElement(wrapper, true);
                showElement(message, false);

                message.innerHTML = "";
            }, 3000);
        } else {
            handleError(status, statusText);
        }
    }


    var formElement = q('.contact-form');
    var message = q('.message');
    var wrapper = q('.wrapper');
    var form = new ContactForm(formElement, {
        url: '/fragment/themes/cyborgconsulting/send-mail.php',
        useAjax: true,
        inputSelectors: [
            "input[type=text]",
            "input[type=email]",
            "select",
            "textarea"
        ]
    })

    form.error.add(handleError);
    form.sending.add(handleSending);
    form.success.add(handleSuccess);

})()