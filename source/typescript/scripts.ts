/**
 * Make your magic here!
 */

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

    let q = (selector, target) => (target || document).querySelector(selector);
    let qa = (selector, target) => (target || document).querySelectorAll(selector);


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

})()