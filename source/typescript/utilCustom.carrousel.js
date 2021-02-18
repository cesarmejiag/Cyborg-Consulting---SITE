/**
 * Created by sexar on 29/05/15.
 */
export class Carrousel {
    init(elem, settings, callback) {        
        var _this = this;
        if (settings === void 0) { settings = {}; }
        if (callback === void 0) { callback = null; }
        // Terminate if no elem or no thumbs.
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
        // Show images.
        this.displayImages(this.thumbsImages);
        // Mark first thumb as current.
        this.increasedThumbs.eq(this.currentThumb + 1).addClass('current-thumb');
        // Initialize auto play.
        this.initAutoPlay();
        // Attach hander on resize.
        this.$window.on('resize', function () { _this.onResize(); });

        // Implement swipe functionality.
        let el = this.elem.get(0);

        this.xDown = null;
        this.yDown = null;

        // el.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        // el.addEventListener('touchmove', this.handleTouchMove.bind(this), false);

        // Execute callback when all instructions in constructo are executed.
        if (typeof callback === 'function') {
            callback(this);
        }
    }
    onResize = function () {
        this.calculateWidths();
        this.adaptImage(this.thumbsImages);
        this.animate(false);
    };
    /**
     * Return default settings of carrousel.
     * @returns Object
     */
    getDefaultSettings = function () {
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
    /**
     * Adapt image to his container.
     * @param images
     */
    adaptImage = function (images) {
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
    /**
     * Change margin left of thumbs container with animation.
     * @param duration
     */
    animate = function (duration) {
        var _this = this;
        if (duration === void 0) { duration = true; }
        var offset = -(this.thumbs.outerWidth(true) * this.currentThumb);
        var time = (duration) ? this.settings.scrollSpeed : 0;
        // Add current class to the thumb.
        this.increasedThumbs.removeClass('current-thumb');
        this.increasedThumbs.eq(this.currentThumb + 1).addClass('current-thumb');
        // Trigger before event
        this.elem.trigger('before-animate');
        this.thumbsContainer
            .stop()
            .animate({ 'margin-left': offset }, time, this.settings.easing, function () {
                _this.elem.trigger('after-animate');
            });
    };
    /**
     * Calculate width for thumbs and thumbs container.
     */
    calculateWidths = function () {
        var thumbMargin = parseInt(this.thumbs.css('margin-left')) + parseInt(this.thumbs.css('margin-right')), thumbWidth = (this.carrouselWrapper.width() / this.settings.thumbsToDisplay), totWidth = thumbWidth * this.increasedThumbs.length;
        this.thumbsContainer.width(totWidth);
        this.increasedThumbs.width(thumbWidth - thumbMargin);
    };
    /**
     * Center an item with respect to his parent.
     *
     * @param item
     * @param toParent
     * @param orientation
     */
    centerItem = function (item, toParent, orientation) {
        if (orientation === void 0) { orientation = 'BOTH'; }
        var container = (toParent) ? item.parent() : $(window), position = item.css('position');
        // Obtains values.
        var left = (container.outerWidth() - item.outerWidth()) / 2, top = (container.outerHeight() - item.outerHeight()) / 2;
        // Check if the position is absolute to asign a left and top values.
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
    /**
     * Clone a certain number of thumbs to simulate an infinite carrousel.
     */
    cloneThumbs = function () {
        if (this.settings.infiniteScroll) {
            this.increasedThumbs = this.thumbs;
            for (var i = 0; i < this.settings.thumbsToDisplay; i++)
                this.increasedThumbs = this.increasedThumbs.add(this.thumbs.eq(i).clone());
            this.thumbsImages = this.increasedThumbs.find('.image img');
        }
    };
    /**
     * Builds the layout for the carrousel.
     */
    createLayout = function () {
        var _this = this;
        // Create elements.
        this.carrouselWrapper = $('<div class="carrousel-wrapper">');
        this.thumbsContainer = $('<div class="thumbs-container clearfix">');
        this.prevButton = $('<div class="prev-button">');
        this.nextButton = $('<div class="next-button">');
        this.elem.append(this.prevButton, this.carrouselWrapper, this.nextButton);
        this.cloneThumbs();
        // Add thumbs to thumbs container.
        this.thumbsContainer.append(this.increasedThumbs);
        // Add thumbs container, prev button and next button to elem.
        this.carrouselWrapper.append(this.thumbsContainer);
        // Attach handlers to buttons.
        this.prevButton.on('click', function (event, autoClick) { _this.next('prev', autoClick); });
        this.nextButton.on('click', function (event, autoClick) { _this.next('next', autoClick); });
        this.thumbsContainer.mouseenter(function () { _this.cont = false; });
        this.thumbsContainer.mouseleave(function () { _this.cont = true; });
    };
    /**
     * Display images when are already load.
     * @param images
     */
    displayImages = function (images) {
        var _this = this;
        images.each(function (index, element) {
            var image = $(element);
            _this.waitForImages(image, function () {
                _this.adaptImage(image);
                image.fadeIn('slow');
            });
        });
    };
    /**
     * Handles touch start event.
     * @param ev
     */
    handleTouchStart = function (ev) {
        this.xDown = ev.touches[0].clientX;
        this.yDown = ev.touches[0].clientY;
    };
    /**
     * Handles touch move event.
     * @param ev
     */
    handleTouchMove = function (ev) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        let xUp = ev.touches[0].clientX;
        let yUp = ev.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                this.next('next');
            } else {
                /* right swipe */
                this.next('prev');
            }
        } else {
            if (yDiff > 0) { /* up swipe */ }
            else { /* down swipe */ }
        }

        /* reset values */
        this.xDown = null;
        this.yDown = null;
    };
    /**
     * Initialize autoplay.
     */
    initAutoPlay = function () {
        var _this = this;
        if (this.settings.autoPlay) {
            this.interval = window.setInterval(function () {
                //Stop on hover
                //if(_this.cont)
                _this.nextButton.trigger('click', [true]);
            }, this.settings.delay);
        }
    };
    /**
     * Determine prev or next thumb.
     * @param direction
     * @param autoClick
     */
    next = function (direction, autoClick) {
        if (autoClick === void 0) { autoClick = false; }
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
    /**
     * Reset auto play.
     */
    resetAutoPlay = function () {
        if (this.interval) {
            window.clearInterval(this.interval);
            this.initAutoPlay();
        }
    };
    /**
     * Resize image with respect to his parent.
     * Note: Make sure that image is fully loaded.
     * @param {jQuery} image
     * @param {boolean} outerSizes
     * @returns {void}
     */
    resizeImage = function (image, outerSizes) {
        if (outerSizes === void 0) { outerSizes = false; }
        var container = image.parent(), cWidth = (outerSizes) ? container.outerWidth() : container.width(), cHeight = (outerSizes) ? container.outerHeight() : container.height(), iWidth = 0, iHeight = 0, width = 0, height = 0;
        // Retrieve original sizes.
        if (!image.data('pl-real-width'))
            image.data('pl-real-width', image.outerWidth());
        if (!image.data('pl-real-height'))
            image.data('pl-real-height', image.outerHeight());
        iWidth = image.data('pl-real-width');
        iHeight = image.data('pl-real-height');
        // Calculate new sizes.
        width = cWidth;
        height = cWidth * iHeight / iWidth;
        if (height < cHeight) {
            height = cHeight;
            width = cHeight * iWidth / iHeight;
        }
        // Asign new sizes to image.
        image.height(height);
        image.width(width);
    };
    /**
     * Scale image without lose aspect ratio.
     * Note: Make sure that the image is fully loaded.
     * @param {jQuery} image
     * @param {boolean} outerSizes
     * @return {void}
     */
    scaleImage = function (image, outerSizes) {
        if (outerSizes === void 0) { outerSizes = false; }
        var container = image.parent(), cHeight = (outerSizes) ? container.outerHeight() : container.height(), cWidth = (outerSizes) ? container.outerWidth() : container.width(), iHeight = 0, iWidth = 0, ratio, min;
        // Retrieve original sizes.
        if (!image.data('pl-real-width'))
            image.data('pl-real-width', image.outerWidth());
        if (!image.data('pl-real-height'))
            image.data('pl-real-height', image.outerHeight());
        iWidth = image.data('pl-real-width');
        iHeight = image.data('pl-real-height');
        // Calculate new sizes.
        ratio = [cWidth / iWidth, cHeight / iHeight];
        min = Math.min(ratio[0], ratio[1]);
        // Assign new sizes to image.
        image.width(iWidth * min);
        image.height(iHeight * min);
    };
    /**
     * Set thumbs to display.
     * @param thumbsToDisplay
     */
    setThumbsToDisplay = function (thumbsToDisplay) {
        this.settings.thumbsToDisplay = thumbsToDisplay;
        this.cloneThumbs();
        this.thumbsContainer
            .empty()
            .append(this.increasedThumbs);
        this.calculateWidths();
        this.adaptImage(this.thumbsImages);
        this.animate(false);
    };
    /**
     * Wait to images are already loaded, then excecute a callback.
     *
     * @param images
     * @param callback
     */
    waitForImages = function (images, callback) {
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