define("utilCustom.carrousel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Carrousel = void 0;
    var Carrousel = (function () {
        function Carrousel() {
            this.onResize = function () {
                this.calculateWidths();
                this.adaptImage(this.thumbsImages);
                this.animate(false);
            };
            this.getDefaultSettings = function () {
                return {
                    autoPlay: false,
                    delay: 2000,
                    easing: 'swing',
                    infiniteScroll: true,
                    thumbsToDisplay: 3,
                    scaleImages: false,
                    scrollSpeed: 500
                };
            };
            this.adaptImage = function (images) {
                var _this = this;
                var adapt = function (image) {
                    if (_this.settings.scaleImages)
                        _this.scaleImage(image, true);
                    else
                        _this.resizeImage(image, true);
                    _this.centerItem(image, true);
                };
                images.each(function (index, element) { adapt($(element)); });
            };
            this.animate = function (duration) {
                var _this = this;
                if (duration === void 0) {
                    duration = true;
                }
                var offset = -(this.thumbs.outerWidth(true) * this.currentThumb);
                var time = (duration) ? this.settings.scrollSpeed : 0;
                this.increasedThumbs.removeClass('current-thumb');
                this.increasedThumbs.eq(this.currentThumb + 1).addClass('current-thumb');
                this.elem.trigger('before-animate');
                this.thumbsContainer
                    .stop()
                    .animate({ 'margin-left': offset }, time, this.settings.easing, function () {
                    _this.elem.trigger('after-animate');
                });
            };
            this.calculateWidths = function () {
                var thumbMargin = parseInt(this.thumbs.css('margin-left')) + parseInt(this.thumbs.css('margin-right')), thumbWidth = (this.carrouselWrapper.width() / this.settings.thumbsToDisplay), totWidth = thumbWidth * this.increasedThumbs.length;
                this.thumbsContainer.width(totWidth);
                this.increasedThumbs.width(thumbWidth - thumbMargin);
            };
            this.centerItem = function (item, toParent, orientation) {
                if (orientation === void 0) {
                    orientation = 'BOTH';
                }
                var container = (toParent) ? item.parent() : $(window), position = item.css('position');
                var left = (container.outerWidth() - item.outerWidth()) / 2, top = (container.outerHeight() - item.outerHeight()) / 2;
                if (position === 'absolute' || position === 'fixed') {
                    if (orientation === 'HORIZONTAL' || orientation === 'BOTH')
                        item.css({ 'left': left });
                    if (orientation === 'VERTICAL' || orientation === 'BOTH')
                        item.css({ 'top': top });
                }
                else {
                    if (orientation === 'HORIZONTAL' || orientation === 'BOTH')
                        item.css({ 'margin-left': left });
                    if (orientation === 'VERTICAL' || orientation === 'BOTH')
                        item.css({ 'margin-top': top });
                }
            };
            this.cloneThumbs = function () {
                if (this.settings.infiniteScroll) {
                    this.increasedThumbs = this.thumbs;
                    for (var i = 0; i < this.settings.thumbsToDisplay; i++)
                        this.increasedThumbs = this.increasedThumbs.add(this.thumbs.eq(i).clone());
                    this.thumbsImages = this.increasedThumbs.find('.image img');
                }
            };
            this.createLayout = function () {
                var _this = this;
                this.carrouselWrapper = $('<div class="carrousel-wrapper">');
                this.thumbsContainer = $('<div class="thumbs-container clearfix">');
                this.prevButton = $('<div class="prev-button">');
                this.nextButton = $('<div class="next-button">');
                this.elem.append(this.prevButton, this.carrouselWrapper, this.nextButton);
                this.cloneThumbs();
                this.thumbsContainer.append(this.increasedThumbs);
                this.carrouselWrapper.append(this.thumbsContainer);
                this.prevButton.on('click', function (event, autoClick) { _this.next('prev', autoClick); });
                this.nextButton.on('click', function (event, autoClick) { _this.next('next', autoClick); });
                this.thumbsContainer.mouseenter(function () { _this.cont = false; });
                this.thumbsContainer.mouseleave(function () { _this.cont = true; });
            };
            this.displayImages = function (images) {
                var _this = this;
                images.each(function (index, element) {
                    var image = $(element);
                    _this.waitForImages(image, function () {
                        _this.adaptImage(image);
                        image.fadeIn('slow');
                    });
                });
            };
            this.handleTouchStart = function (ev) {
                this.xDown = ev.touches[0].clientX;
                this.yDown = ev.touches[0].clientY;
            };
            this.handleTouchMove = function (ev) {
                if (!this.xDown || !this.yDown) {
                    return;
                }
                var xUp = ev.touches[0].clientX;
                var yUp = ev.touches[0].clientY;
                var xDiff = this.xDown - xUp;
                var yDiff = this.yDown - yUp;
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        this.next('next');
                    }
                    else {
                        this.next('prev');
                    }
                }
                else {
                    if (yDiff > 0) { }
                    else { }
                }
                this.xDown = null;
                this.yDown = null;
            };
            this.initAutoPlay = function () {
                var _this = this;
                if (this.settings.autoPlay) {
                    this.interval = window.setInterval(function () {
                        _this.nextButton.trigger('click', [true]);
                    }, this.settings.delay);
                }
            };
            this.next = function (direction, autoClick) {
                if (autoClick === void 0) {
                    autoClick = false;
                }
                if (autoClick)
                    this.resetAutoPlay();
                if (direction === 'prev') {
                    if (this.currentThumb > 0) {
                        this.currentThumb--;
                    }
                    else {
                        if (this.settings.infiniteScroll) {
                            this.thumbsContainer.css('margin-left', -((this.thumbs.length) * this.thumbs.outerWidth(true)));
                            this.currentThumb = this.thumbs.length - 1;
                        }
                    }
                }
                else {
                    if (this.currentThumb < this.thumbs.length) {
                        this.currentThumb++;
                    }
                    else {
                        if (this.settings.infiniteScroll) {
                            this.currentThumb = 1;
                            this.thumbsContainer.css('margin-left', 0);
                        }
                    }
                }
                this.animate(true);
            };
            this.resetAutoPlay = function () {
                if (this.interval) {
                    window.clearInterval(this.interval);
                    this.initAutoPlay();
                }
            };
            this.resizeImage = function (image, outerSizes) {
                if (outerSizes === void 0) {
                    outerSizes = false;
                }
                var container = image.parent(), cWidth = (outerSizes) ? container.outerWidth() : container.width(), cHeight = (outerSizes) ? container.outerHeight() : container.height(), iWidth = 0, iHeight = 0, width = 0, height = 0;
                if (!image.data('pl-real-width'))
                    image.data('pl-real-width', image.outerWidth());
                if (!image.data('pl-real-height'))
                    image.data('pl-real-height', image.outerHeight());
                iWidth = image.data('pl-real-width');
                iHeight = image.data('pl-real-height');
                width = cWidth;
                height = cWidth * iHeight / iWidth;
                if (height < cHeight) {
                    height = cHeight;
                    width = cHeight * iWidth / iHeight;
                }
                image.height(height);
                image.width(width);
            };
            this.scaleImage = function (image, outerSizes) {
                if (outerSizes === void 0) {
                    outerSizes = false;
                }
                var container = image.parent(), cHeight = (outerSizes) ? container.outerHeight() : container.height(), cWidth = (outerSizes) ? container.outerWidth() : container.width(), iHeight = 0, iWidth = 0, ratio, min;
                if (!image.data('pl-real-width'))
                    image.data('pl-real-width', image.outerWidth());
                if (!image.data('pl-real-height'))
                    image.data('pl-real-height', image.outerHeight());
                iWidth = image.data('pl-real-width');
                iHeight = image.data('pl-real-height');
                ratio = [cWidth / iWidth, cHeight / iHeight];
                min = Math.min(ratio[0], ratio[1]);
                image.width(iWidth * min);
                image.height(iHeight * min);
            };
            this.setThumbsToDisplay = function (thumbsToDisplay) {
                this.settings.thumbsToDisplay = thumbsToDisplay;
                this.cloneThumbs();
                this.thumbsContainer
                    .empty()
                    .append(this.increasedThumbs);
                this.calculateWidths();
                this.adaptImage(this.thumbsImages);
                this.animate(false);
            };
            this.waitForImages = function (images, callback) {
                var totalImages = images.length, loadedImages = 0;
                function onImageLoaded() {
                    if (++loadedImages >= totalImages)
                        if (callback && typeof callback === 'function')
                            callback();
                }
                images.each(function () {
                    var image = $(this);
                    if (image.get(0).complete)
                        onImageLoaded();
                    else
                        image.on('load', function () { onImageLoaded(); });
                });
            };
        }
        Carrousel.prototype.init = function (elem, settings, callback) {
            var _this = this;
            if (settings === void 0) {
                settings = {};
            }
            if (callback === void 0) {
                callback = null;
            }
            if (!(elem && elem instanceof jQuery && elem.length))
                return;
            this.$window = $(window);
            this.elem = elem;
            this.thumbs = this.elem.find('.thumb').detach();
            this.increasedThumbs = this.thumbs;
            this.thumbsImages = this.increasedThumbs.find('.image img');
            this.settings = $.extend(this.getDefaultSettings(), settings);
            this.currentThumb = 0;
            this.interval = null;
            this.cont = true;
            this.createLayout();
            this.calculateWidths();
            this.displayImages(this.thumbsImages);
            this.increasedThumbs.eq(this.currentThumb + 1).addClass('current-thumb');
            this.initAutoPlay();
            this.$window.on('resize', function () { _this.onResize(); });
            var el = this.elem.get(0);
            this.xDown = null;
            this.yDown = null;
            if (typeof callback === 'function') {
                callback(this);
            }
        };
        return Carrousel;
    }());
    exports.Carrousel = Carrousel;
});
define("scripts", ["require", "exports", "utilCustom.carrousel"], function (require, exports, utilCustom_carrousel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        'use strict';
        if ("serviceWorker" in navigator) {
            var swPath = 'sw.js';
            navigator.serviceWorker.register(swPath)
                .then(function (res) { console.log('Service worker registered.'); })
                .catch(function (res) { console.log('Can not find service worker.'); });
        }
        var q = function (selector, target) { return (target || document).querySelector(selector); };
        var qa = function (selector, target) { return (target || document).querySelectorAll(selector); };
        var Page = {
            init: function () {
                Page.homeCarousel();
                Page.Navigation.init();
                Page.sideBar();
            },
            setStyleAttribute: function (element, attrs) {
                if (attrs !== undefined) {
                    Object.keys(attrs).forEach(function (key) {
                        return element.style.setProperty(key, attrs[key]);
                    });
                }
            },
            homeCarousel: function () {
                var carrouselClients = new utilCustom_carrousel_1.Carrousel;
                var carrouselPartners = new utilCustom_carrousel_1.Carrousel;
                var utilC = $('.block.clients .util-carrousel');
                var utilP = $('.block.partners .util-carrousel');
                if (!utilC || !utilP)
                    return;
                carrouselClients.init(utilC, {
                    autoPlay: true,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 5,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }, '');
                carrouselPartners.init(utilP, {
                    autoPlay: false,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 3,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }, '');
            },
            sideBar: function () {
                var generalWrapper = q('.block.wrapper-template', document);
                var sideBar = q('.sidebar-menu', generalWrapper);
                var wrapperSections = q('.wrapper-sections', generalWrapper);
                if (generalWrapper) {
                    var reqAnimFrame_1 = window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };
                    var calc_1 = function () {
                        var rect = generalWrapper.getBoundingClientRect();
                        var rectWrapperSections = wrapperSections.getBoundingClientRect();
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
                    };
                    window.onscroll = function () {
                        reqAnimFrame_1(calc_1);
                    };
                    window.onresize = function () {
                        reqAnimFrame_1(calc_1);
                    };
                }
            },
            Navigation: {
                toggleBtn: null,
                navigation: null,
                wrapper: null,
                init: function () {
                    this.navigation = q('.navigation', null);
                    this.toggleBtn = q('.toggle-btn', this.navigation);
                    this.wrapper = q('.list-wrapper', this.navigation);
                    this.toggleCollapsed = this.toggleCollapsed.bind(this);
                    this.toggleBtn.addEventListener('click', this.toggleCollapsed);
                },
                toggleCollapsed: function () {
                    if (this.wrapper.classList.contains('list-collapsed')) {
                        this.wrapper.classList.remove('list-collapsed');
                    }
                    else {
                        this.wrapper.classList.add('list-collapsed');
                    }
                }
            }
        };
        Page.init();
    })();
});
