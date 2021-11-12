/**
 * Make your magic here!
 */

import ContactForm from './ContactForm';
import Classie from './util/Classie';
import { Carrousel } from './utilCustom.carrousel';
import pl from './pl';
import ElSlider from './el-slider';
// import Swiper from './Swiper';


(() => {
    'use strict'
    // Register service worker.
    if ("serviceWorker" in navigator) {
        const swPath = 'fragment/themes/cyborgconsulting/sw.js';

        navigator.serviceWorker.register(swPath)
            .then(res => { console.log('Service worker registered.') })
            .catch(res => { console.log('Can not find service worker.') })
    }

    const q = (selector: string, target?: any) => (target || document).querySelector(selector);
    const qa = (selector: string, target?: any) => (target || document).querySelectorAll(selector);

    const isMobile = () => {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window['opera']);
        return check;
    }

    const formatDate = datetime => {
        let formated = '';
        try {
            const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
            const parts = datetime.split(' ');
            const date = parts[0].split('-');

            formated = `${date[2]} ${months[Number(date[1]) - 1]} ${date[0]} - ${parts[1]}`
        } catch (e) { formated = datetime; }

        return formated;
    }

    const Page = {
        init() {
            Page.homeCarousel();
            Page.Navigation.init();
            Page.sideBar();
            Page.Blog.init();
            Page.modal();
            Page.scrollTo();
            Page.hasHash();
        },
        hasHash: function () {
            window.addEventListener('load', () => {
                if (location.hash.length > 0) {
                    const headHeight = $('.navigation').outerHeight();
                    $('html, body').animate({
                        scrollTop: $(location.hash).offset().top - headHeight
                    }, 1000);
                }
            });
        },
        scrollTo: function () {
            $('.sub-menu')
                .on('click', function (event) {
                    let headHeight = $('.navigation').outerHeight();
                    if (location.pathname.replace(/^\//, '') == this['pathname'].replace(/^\//, '') && location.hostname == this['hostname']) {
                        var target = $(this['hash']);
                        target = target.length ? target : $('[name=' + this['hash'].slice(1) + ']');
                        if (target.length) {
                            event.preventDefault();
                            $('html, body').animate({
                                scrollTop: target.offset().top - headHeight
                            }, 1000, function () {
                                $.fn['focusNoScroll'] = function () {
                                    let x = window.scrollX, y = window.scrollY;
                                    this.focus();
                                    window.scrollTo(x, y);
                                    return this;

                                };
                                let $target = $(target);
                                $target['focusNoScroll']();
                                if ($target.is(":focus")) {
                                    return false;
                                } else {
                                    $target.attr('tabindex', '-1');
                                    $target['focusNoScroll']();
                                };
                            });
                        }
                    }
                });
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
                    thumbsToDisplay: 3,
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
                    thumbsToDisplay: 4,
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
                    window['webkitRequestAnimationFrame'] ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
                let calc = () => {
                    let rect = generalWrapper.getBoundingClientRect();
                    let rectWrapperSections = wrapperSections.getBoundingClientRect();
                    if (rect.top <= 80) {
                        Page.setStyleAttribute(sideBar, { 'position': 'fixed', 'left': '0', 'top': '80px' });
                        Page.setStyleAttribute(wrapperSections, { 'margin-left': 'auto', 'width': 'calc(100% - 350px)' });
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

                reqAnimFrame(calc);
            }
        },
        modal() {
            // Point to needed elements.
            const button = q('.big-btn', document);
            if (button) {
                const initializeForm = wrapper => {
                    const form = q('form', wrapper);
                    initForm(form);
                }

                button.addEventListener('click', e => {
                    e.preventDefault();

                    const formWrapper = q('.cv-form-wrapper');
                    const clone = formWrapper.cloneNode(true)
                    const modal = new pl.Modal({ effectName: 'pl-effect-2' });
                    const elems = qa('*', clone);

                    Classie.addClass(modal.modal, 'cv-modal');

                    [].forEach.call(elems, el => {
                        el.addEventListener(pl.Modal.transitionSelect(), e => {
                            e.stopPropagation();
                        });
                    });

                    modal.opened.add(() => initializeForm(clone));
                    modal.open(clone);
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
                const { intro, image } = post.fragments;
                let abstract = intro ? intro.value : '';
                let imagestr = image ? image.value : '';
                let title = post.title || '';
                let name = post.key;
                let created = formatDate(post.created);

                pl.Classie.addClass(gridItem, 'grid-item');
                gridItem.href = post.key;

                gridItem.innerHTML = `
                    <div class="number" hidden>${index}</div>
                    <div class="name" hidden>${name}</div>
                    <div class="inner" data-name="${name}">
                        <div class="inner-image">${imagestr}</div>
                        <div class="title-blog color-highlight-color">${title}</div>
                        <div class="date-blog">${created}</div>
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

                    let images = elems.filter(el => q('img', el));

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
                this.toggleBtns = qa('.toggle-btns', this.navigation);
                this.wrapper = q('.list-wrapper', this.navigation);

                this.toggleCollapsed = this.toggleCollapsed.bind(this);
                this.toggleBtn.addEventListener('click', this.toggleCollapsed);
                [].forEach.call(this.toggleBtns, el => {
                    el.addEventListener('click', this.toggleCollapsed);
                });
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

    // Initialize Cover
    const cover = q('.cover');

    if (cover) {
        const videoPath = '/fragment/themes/cyborgconsulting/videos';

        if (isMobile()) {
            const image = document.createElement('img');
            image.src = `${videoPath}/cover-home.gif`;
            image.alt = `Video intro`;
            cover.appendChild(image);
        } else {
            const video = document.createElement('video');
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            // video.playsInline = true;
            video.innerHTML = `<source src="${videoPath}/cover-home.mp4" type="video/mp4">`;
            cover.appendChild(video);
        }
    }

    // Initialize Contact Form
    function initForm(formEl) {
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
        function handleSuccess(form, response, status, statusText) {
            // Show message in console.
            console.log('The message has been sent successfuly. \nStatus: %s\nStatusText: %s', status, statusText);
            console.log(response);

            if (parseInt(response) === 1) {
                message.innerHTML = `<div class="text sent">¡Mensaje enviado!</div>`;

                setTimeout(function () {
                    showElement(wrapper, true);
                    showElement(message, false);

                    message.innerHTML = "";

                    if (Classie.hasClass(form.element, 'ebook-form')) {
                        const download: HTMLElement = document.createElement('a');
                        download.setAttribute('href', '/fragment/themes/cyborgconsulting/ebook.pdf');
                        download.setAttribute('download', 'download');
                        download.click();
                    }
                }, 3000);
            } else {
                handleError(status, statusText);
            }
        }

        var message = q('.message', formEl);
        var wrapper = q('.wrapper', formEl);
        var form = new ContactForm(formEl, {
            url: '/fragment/themes/cyborgconsulting/send-mail.php',
            useAjax: true,
            inputSelectors: [
                "input[type=text]",
                "input[type=email]",
                "input[type=file]",
                "input[type=checkbox]",
                "select",
                "textarea"
            ]
        })

        form.error.add(handleError);
        form.sending.add(handleSending);
        form.success.add((response, status, statusText) => handleSuccess(form, response, status, statusText));
    }


    var formElement = q('.home-form, .ebook-form, .industries-form');
    if (formElement) {
        initForm(formElement);
    }

    // Book Ad
    const bookAd = q('.book-ad');
    const closeBtn = q('.book-ad .close-button');

    if (bookAd && closeBtn) {
        closeBtn.addEventListener('click', () => {
            Classie.removeClass(bookAd, 'displayed');
        });

        window.addEventListener('load', () => {
            Classie.addClass(bookAd, 'displayed');
        });
    }

    // Nosotros envía tu CV
    const usJoin = q('.us-join');

    if (usJoin) {
        const cvBtn = q('.button', usJoin);
        const initializeForm = wrapper => {
            const form = q('form', wrapper);
            const uploadBtn = q('.cv-button', wrapper);
            const label = q('.cv-label', wrapper);
            const file = q('input[type="file"]', wrapper);

            initForm(form);

            uploadBtn.addEventListener('click', e => {
                e.preventDefault();
                file.click();
            });

            file.addEventListener('change', e => {
                const files = e.target.files;

                if (files && files.length > 0) {
                    const { name, size } = files[0];

                    if (name.toLowerCase().lastIndexOf('.pdf') === -1) {
                        Classie.addClass(label, 'label-error');
                        label.innerText = `Sólo se permiten archivos PDF`;
                        file.value = null;
                    } else if (size > 20971520) {
                        Classie.addClass(label, 'label-error');
                        label.innerText = `El archivo no debe pesar más de 20 mb`;
                        file.value = null;
                    } else {
                        Classie.removeClass(label, 'label-error');
                        label.innerText = name;
                    }
                }
            });
        }

        cvBtn.addEventListener('click', e => {
            e.preventDefault();

            const formWrapper = q('.cv-form-wrapper', usJoin);
            const clone = formWrapper.cloneNode(true);
            const modal = new pl.Modal({ effectName: 'pl-effect-2' });
            const elems = qa('*', clone);

            Classie.addClass(modal.modal, 'cv-modal');

            [].forEach.call(elems, el => {
                el.addEventListener(pl.Modal.transitionSelect(), e => {
                    e.stopPropagation();
                });
            });

            modal.opened.add(() => initializeForm(clone));
            modal.open(clone);
        });
    }

    // Blog post
    const blogPost = q('.blog-post');
    if (blogPost) {
        const date = q('.post-date span', blogPost);
        date.innerText = formatDate(date.innerText);
    }

    // Rpa robots
    const rpaRobots = q('.rpa-robots');
    if (rpaRobots) {
        const demoBtn = q('.btn-demo', rpaRobots);

        demoBtn.addEventListener('click', e => {
            const id = e.target.dataset['id'];
            const headHeight = $('.navigation').outerHeight();

            $('html, body').animate({
                scrollTop: $(`#${id}`).offset().top - headHeight
            }, 1000);
        });
    }

    const elSlider = q('.el-slider');
    if (elSlider) {
        new ElSlider(elSlider);
    }

    // Override styles of hubspot chat
    /* const timer = setInterval(() => {
        const hubspotBtn: HTMLElement = q('#hubspot-messages-iframe-container');

        if (hubspotBtn && hubspotBtn.getAttribute('style')) {
            const style = hubspotBtn.getAttribute('style');
            hubspotBtn.setAttribute('style', `${style} bottom: 50px !important;`);
            clearInterval(timer);
        }
    }, 100); */
    ((testimonials) => {
        if (testimonials) {
            const swiper = new window['Swiper']('.swiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },

                autoplay: {
                    delay: 5000,
                },
            });
        }
    })(q('.block.testimonials'));

})()