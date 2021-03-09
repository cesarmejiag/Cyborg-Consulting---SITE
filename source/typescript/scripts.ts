/**
 * Make your magic here!
 */

import { Carrousel } from './utilCustom.carrousel';
import pl from './pl'

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
            Page.Blog.init();
            Page.modal();
        },
        isMobileSize: function () {
            return window.innerWidth < 767;
        },
        waitForImages: function (images, callback) {
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
        modal() {
            // Point to needed elements.
            let button = q('.big-btn', document);
            let dummyTemplate = q('.dummy-template', document);
            let modal = new pl.Modal({ effectName: 'pl-effect-2' });

            if (button && dummyTemplate) {
                button.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    let effect = button.dataset['plModalEffect'];
                    modal.changeEffect(effect);
                    modal.open(dummyTemplate);
                });
            }

        },
        Blog: {

            /**
             * @type {HTMLElement}
             */
            el: null,

            /**
             * @type {HTMLElement}
             */
            grid: null,

            /**
             * @type {Pagination}
             */
            pagination: null,

            /**
             * Initialize section.
             */
            init: function () {
                this.el = q('.blog-posts', document);
                if (this.el) {
                    this.grid = q('.grid', this.el);

                    let numPosts = (Page.isMobileSize()) ? 3 : 6;

                    this.pagination = new pl.Pagination(1, numPosts, ["image", "intro", "main-image", "modal"], ["creation-date"]);
                    this.pagination.next();

                    this.pagination.statusChange.add(this.handleStatusChanged.bind(this));
                    this.pagination.dataArrived.add(this.handleDataArrived.bind(this));

                    this.setupBlogPosts();

                    window.addEventListener('scroll', this.reachBottom.bind(this), false);
                    window.addEventListener('resize', this.reachBottom.bind(this), false);
                }
            },
            /**
             *
             */
            createPost: function (post, index) {

                let gridItem = document.createElement('a');
                let image = "";
                let abstract = "intro" in post.fragments ? post.fragments['intro'].value : '';
                let title = post.title || '';
                let name = post.key;

                image = post.fragments['image'].value;

                pl.Classie.addClass(gridItem, 'grid-item');
                gridItem.href = post.key;

                gridItem.innerHTML = `
                    <div class="number" hidden>${index}</div>
                    <div class="name" hidden>${name}</div>
                    <div class="inner" data-name="${name}">
                        <div class="inner-image">${image}</div>
                        <div class="title-blog color-highlight-color">${title}</div>
                        <div class="intro">${abstract}</div>
                        <!--<div class="complete-article">Leer</div>-->
                    </div>
                `;
                return gridItem;
            },

            /**
             *
             * @param data
             */
            handleDataArrived: function (data) {

                let response = JSON.parse(data);
                // let response = data;
                let delay_blog = 1000;
                let delay_bl = 100000;
                let elems = [];

                if (response.records.length) {
                    let records = response.records;

                    for (let i = 0; i < records.length; i++) {
                        let elem = this.createPost(records[i], i);
                        let $img = $(elem).find('img');
                        let $inner = $(elem).find('.inner');

                        this.grid.appendChild(elem);
                        elems.push(elem);
                    }

                    let images = elems.map((el) => q('img', el));

                    Page.waitForImages($(images), () => {
                        let gridItems = qa('.grid-item .inner', document);

                        [].forEach.call(gridItems, gridItem => {
                            pl.Classie.addClass(gridItem, 'displayed');
                        });

                        let key = location.hash.replace(/[#|\/]/g, "");
                        let note = q('[href*="' + key + '"]', document);
                        note && (note.click());

                        // Auto open note if key comes from hash
                        window.addEventListener('load', ev => {
                            if (location.hash) {
                                let key = location.hash.replace(/[#|\/]/g, "");
                                let note = q('[href*="' + key + '"]', document);
                                note.click();
                            }
                        });
                    });
                }
            },
            /**
             *s
             * @param status
             */
            handleStatusChanged: function (status) {
                if ("LOADING" === status) {
                    pl.Classie.addClass(this.grid, 'loading');
                } else {
                    pl.Classie.removeClass(this.grid, 'loading');
                }
            },

            /**
             *
             */
            reachBottom: function (ev) {
                let scrollHeight = $(document).height();
                let scrollPosition = $(window).height() + $(window).scrollTop();

                /*
                 // this block detect when do scroll in the page (scroll top and scroll down ) to active the actualization of elements
                 let elRect = this.el.getBoundingClientRect();
                 let limit = window.scrollY + window.innerHeight;
                 if (limit >= elRect.bottom) {
                 this.pagination.next();
                 }*/
                if (!Page.isMobileSize()) {

                    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                        this.pagination.next();
                    }

                } else {

                    let _this = this;
                    let $btn_load = $('.load-more');
                    $btn_load.on('click', function () {
                        _this.pagination.next();
                    });
                }

            },

            /**
             * Setup blog posts.
             */
            setupBlogPosts: function () {
                let posts = qa('.grid-item ', document);
                if (posts) {
                    for (let i = 0; i < posts.length; i++) {
                        (post => {
                            post.addEventListener('click', ev => {
                                ev.preventDefault();

                                let href = post.href;
                                this.showPost(href);
                            }, false);
                        })(posts[i]);
                    }
                }
            },
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