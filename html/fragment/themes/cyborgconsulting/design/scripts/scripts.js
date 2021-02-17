(function () {
    'use strict';
    if ("serviceWorker" in navigator) {
        var swPath = 'sw.js';
        navigator.serviceWorker.register(swPath)
            .then(function (res) { console.log('Service worker registered.'); })
            .catch(function (res) { console.log('Can not find service worker.'); });
    }
    var Page = {
        init: function () {
            Page.homeCarousel();
        },
        homeCarousel: function () {
            var utilC = $('.block.clients .util-carrousel');
            var utilP = $('.block.partners .util-carrousel');
            console.log(utilC);
        }
    };
    Page.init();
})();
