!function(){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(e){console.log("Service worker registered.")}).catch(function(e){console.log("Can not find service worker.")});var e={init:function(){e.homeCarousel()},homeCarousel:function(){var e=$(".block.clients .util-carrousel");e&&new util.Carrousel(e,{autoPlay:!0,easing:"linear",delay:4990,infiniteScroll:!0,thumbsToDisplay:5,scaleImages:!0,scrollSpeed:5e3})}};e.init()}();