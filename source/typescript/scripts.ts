/**
 * Make your magic here!
 */

(() => {
    'use strict'

    // Register service worker.
    if ("serviceWorker" in navigator) {
        const swPath = 'sw.js';

        navigator.serviceWorker.register(swPath)
            .then(res => { console.log('Service worker registered.') })
            .catch(res => { console.log('Can not find service worker.') })
    }

    const Page = {
        init() {
            Page.homeCarousel();
        },

        homeCarousel() {
            let utilC = $('.block.clients .util-carrousel');
            let utilP = $('.block.partners .util-carrousel');
            if (!utilC || !utilP) return;

            let carrouselClients = new util.Carrousel(
                utilC,
                {
                    autoPlay: true,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 5,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }
            );
            let carrouselPartners = new util.Carrousel(
                utilP,
                {
                    autoPlay: true,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 3,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }
            )
        }
    }

    Page.init();

})()