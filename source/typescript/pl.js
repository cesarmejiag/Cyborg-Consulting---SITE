/**
 * Created by cesarmejia on 26/09/2017.
 */
var pl;
(function (pl) {
    var Key;
    (function (Key) {
        Key[Key["ALT"] = 18] = "ALT";
        Key[Key["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        Key[Key["CTRL"] = 17] = "CTRL";
        Key[Key["DOWN_ARROW"] = 40] = "DOWN_ARROW";
        Key[Key["LEFT_ARROW"] = 37] = "LEFT_ARROW";
        Key[Key["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
        Key[Key["SELECT"] = 93] = "SELECT";
        Key[Key["SHIFT"] = 16] = "SHIFT";
        Key[Key["UP_ARROW"] = 38] = "UP_ARROW";
        Key[Key["TAB"] = 9] = "TAB";
    })(Key = pl.Key || (pl.Key = {}));
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 20/08/2017.
 */
(function (pl) {
    var PLEvent = /** @class */ (function () {
        // endregion
        /**
         * Create a PLEvent instance.
         * @constructor
         */
        function PLEvent() {
            this._handlers = [];
            this._scope = this || window;
        }
        // region Methods
        /**
         * Add new handler.
         * @param {function} handler
         */
        PLEvent.prototype.add = function (handler) {
            if (handler) {
                this._handlers.push(handler);
            }
        };
        /**
         * Excecute all suscribed handlers.
         */
        PLEvent.prototype.fire = function () {
            var _this = this;
            var args = arguments;
            this._handlers.forEach(function (handler) {
                handler.apply(_this._scope, args);
            });
        };
        /**
         * Remove handler from handlers.
         * @param {function} handler
         */
        PLEvent.prototype.remove = function (handler) {
            this._handlers = this._handlers.filter(function (fn) {
                if (fn != handler)
                    return fn;
            });
        };
        return PLEvent;
    }());
    pl.PLEvent = PLEvent;
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 07/02/2018.
 */
(function (pl) {
    var Classie = /** @class */ (function () {
        function Classie() {
        }
        /**
         * Adds the specified class to an element.
         * @param {HTMLElement} elem
         * @param {string} className
         */
        Classie.addClass = function (elem, className) {
            if (elem.classList)
                elem.classList.add(className);
            else if (!Classie.hasClass(elem, className))
                elem.className += " " + className;
        };
        /**
         * Determine whether any of the matched elements are assigned the given class.
         * @param {HTMLElement} elem
         * @param {string} className
         * @returns {boolean}
         */
        Classie.hasClass = function (elem, className) {
            return elem.classList
                ? elem.classList.contains(className)
                : new RegExp("\\b" + className + "\\b").test(elem.className);
        };
        /**
         * Remove class from element.
         * @param {HTMLElement} elem
         * @param {string} className
         */
        Classie.removeClass = function (elem, className) {
            if (elem.classList)
                elem.classList.remove(className);
            else
                elem.className = elem.className.replace(new RegExp("\\b" + className + "\\b", "g"), '');
        };
        /**
         * Remove all classes in element.
         * @param {HTMLElement} elem
         */
        Classie.reset = function (elem) {
            elem.className = '';
        };
        /**
         * Add or remove class from element.
         * @param {HTMLElement} elem
         * @param {string} className
         */
        Classie.toggleClass = function (elem, className) {
            if (elem.classList)
                elem.classList.toggle(className);
            else
                Classie.hasClass(elem, className)
                    ? Classie.removeClass(elem, className)
                    : Classie.addClass(elem, className);
        };
        return Classie;
    }());
    pl.Classie = Classie;
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 29/08/2017.
 */
/**
 * Created by Sexar on 07/02/2018.
 */
(function (pl) {
    var Util = /** @class */ (function () {
        function Util() {
        }
        /**
         * Capitalize text.
         * @param {string} text
         * @returns {string}
         */
        Util.capitalizeText = function (text) {
            return text.replace(/\w/, function (l) { return l.toUpperCase(); });
        };
        /**
         * Merge objects and create a new one.
         * @param {Array<Object>} objects
         * @return {Object}
         */
        Util.extendsDefaults = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            var result = {}, i;
            for (i = 0; i < objects.length; i++) {
                (function (currentObj) {
                    var prop;
                    for (prop in currentObj) {
                        if (currentObj.hasOwnProperty(prop)) {
                            result[prop] = currentObj[prop];
                        }
                    }
                })(objects[i]);
            }
            return result;
        };
        return Util;
    }());
    pl.Util = Util;
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 26/10/2017.
 */
(function (pl) {
    var ScrollFire = /** @class */ (function () {
        // endregion
        /**
         * Create a Scroll Fire instance.
         * @param {HTMLElement|HTMLCollection|Node|NodeList} elements
         * @param {Object} settings
         */
        function ScrollFire(elements, settings) {
            // region Fields
            /**
             * @type {boolean}
             */
            this.isScrolling = false;
            // endregion
            // region Events
            /**
             * @type {pl.PLEvent}
             */
            this._inview = null;
            // endregion
            // region Fields
            /**
             * Elements field.
             * @type {HTMLElement|HTMLCollection|Node|NodeList}
             */
            this._elements = null;
            this.settings = pl.Util.extendsDefaults({
                method: 'markerOver',
                markerPercentage: 55,
                rangeMin: 10,
                rangeMax: 90
            }, settings);
            this.method = this["is" + pl.Util.capitalizeText(this.settings['method'])];
            // Avoid create the instance if elements does not match with the allowed types.
            if (!this.isAllowedType(elements)) {
                throw 'Make sure that elements you\'re passing HTMLElement, HTMLCollection, Node or NodeList';
            }
            // Avoid create the instance if the method does not exists.
            if ("function" !== typeof this.method) {
                throw "Method " + this.settings.method + " does not exist";
            }
            this._elements = elements;
            this.initEvents();
        }

        // region Private Methods
        /**
         * Initialize scroll fire elements.
         */
        ScrollFire.prototype.initEvents = function () {
            this.scrolling = this.scrolling.bind(this);
            this.throttleScroll = this.throttleScroll.bind(this);
            // document.addEventListener("DOMContentLoaded", this.scrolling, false);
            window.addEventListener('load', this.scrolling, false);
            window.addEventListener("scroll", this.throttleScroll, false);
            window.addEventListener("resize", this.throttleScroll, false);
        };
        /**
         * Handle on inview event.
         * @param {HTMLElement} element
         */
        ScrollFire.prototype.onInview = function (element) {
            if (this.inview) {
                this.inview.fire(element);
            }
        };
        /**
         * Validate if an element is inview.
         * @param {Event} ev
         */
        ScrollFire.prototype.scrolling = function (ev) {
            var elements = "length" in this.elements ? this.elements : [this.elements];
            var i = 0, length = elements.length;
            for (; i < length; i++) {
                if (this.method.call(this, elements[i])) {
                    pl.Classie.addClass(elements[i], 'inview');
                    this.onInview(elements[i]);
                }
                else {
                    pl.Classie.removeClass(elements[i], 'inview');
                }
            }
        };
        /**
         * Enhance scroll.
         * @param {Event} ev
         */
        ScrollFire.prototype.throttleScroll = function (ev) {
            var _this = this;
            var reqAnimFrame = this.reqAnimFrame;
            if (this.isScrolling === false) {
                reqAnimFrame(function () {
                    _this.scrolling(ev);
                    _this.isScrolling = false;
                });
            }
            this.isScrolling = true;
        };
        /**
         * Validate the type of instance of the element.
         * @param {HTMLElement, HTMLCollection, Node, Node} element
         * @returns {boolean}
         */
        ScrollFire.prototype.isAllowedType = function (element) {
            var allowedTypes = [HTMLElement, HTMLCollection, Node, NodeList];
            var i = 0;
            for (; i < allowedTypes.length; i++) {
                if (element instanceof allowedTypes[i]) {
                    return true;
                }
            }
            return false;
        };
        Object.defineProperty(ScrollFire.prototype, "inview", {
            /**
             * Gets inview event.
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._inview) {
                    this._inview = new pl.PLEvent();
                }
                return this._inview;
            },
            enumerable: true,
            configurable: true
        });
        // endregion
        // region Methods
        /**
         * Determine if element is fully visible.
         * @param {HTMLElement|Node} element
         * @returns {boolean}
         */
        ScrollFire.prototype.isFullyVisible = function (element) {
            var rect = element.getBoundingClientRect();
            var top = rect.top, bottom = rect.bottom;
            return ((top >= 0) && (bottom <= window.innerHeight));
        };
        /**
         * Determine if element is in range.
         * @param {HTMLElement|Node} element
         * @returns {boolean}
         */
        ScrollFire.prototype.isInRange = function (element) {
            var rangeMin = window.innerHeight * (this.settings['rangeMin'] / 100);
            var rangeMax = window.innerHeight * (this.settings['rangeMax'] / 100);
            var rect = element.getBoundingClientRect();
            return rect.top <= rangeMax && rect.bottom >= rangeMin;
        };
        /**
         * Determine if element is under the marker.
         * @param {HTMLElement|Node} element
         * @returns {boolean}
         */
        ScrollFire.prototype.isMarkerOver = function (element) {
            var percent = (this.settings['markerPercentage'] / 100);
            var rect = element.getBoundingClientRect();
            var top = rect.top, height = rect.height, marker = window.innerHeight * percent;
            return marker > top && (top + height) > marker;
        };
        /**
         * Determine if element is partially visible.
         * @param {HTMLElement|Node} element
         * @returns boolean
         */
        ScrollFire.prototype.isPartiallyVisible = function (element) {
            var rect = element.getBoundingClientRect();
            var top = rect.top, bottom = rect.bottom, height = rect.height;
            return ((top + height >= 0) && (height + window.innerHeight >= bottom));
        };
        Object.defineProperty(ScrollFire.prototype, "elements", {
            /**
             * Get elements field.
             * @returns {HTMLElement|HTMLCollection|Node|NodeList}
             */
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollFire.prototype, "reqAnimFrame", {
            /**
             * Get requestAnimationFrame field.
             * @returns {any}
             */
            get: function () {
                if (!this._reqAnimFrame) {
                    this._reqAnimFrame = window['requestAnimationFrame']
                        || window['webkitRequestAnimationFrame']
                        || window['mozRequestAnimationFrame']
                        || function (callback) {
                            setTimeout(callback, 1000 / 60);
                        };
                }
                return this._reqAnimFrame;
            },
            enumerable: true,
            configurable: true
        });
        return ScrollFire;
    }());
    pl.ScrollFire = ScrollFire;
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 23/05/2018.
 */
(function (pl) {
    var Pagination = /** @class */ (function () {
        //endregion
        /**
         * Create a pagination instance.
         * @param {number} page
         * @param {number} pageSize
         * @param {string[]} fragments
         * @param {string[]} settings
         */
        function Pagination(page, pageSize, fragments, settings) {
            //region Fields
            this.loading = false;
            /**
             * Current page.
             * @type {number}
             * @private
             */
            this._page = 1;
            /**
             * Page size.
             * @type {number}
             * @private
             */
            this._pageSize = 10;
            this.page = page;
            this.pageSize = pageSize;
            this.fragments = fragments;
            this.settings = settings;
        }
        //region Private Methods
        /**
         *
         */
        Pagination.prototype.getItems = function () {
            this.loading = true;
            this.onStatusChange('LOADING');
            var method = 'POST';
            var url = '/fragment/themes/cyborgconsulting/utils/get_posts.php';
            var async = true;
            var data = { page: this.page, pageSize: this.pageSize, fragments: this.fragments, settings: this.settings };
            var stringData = "data=" + JSON.stringify(data);
            this.req.open(method, url, async);
            this.req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.req.send(stringData);            
        };
        //endregion
        //region Methods
        /**
         *
         */
        Pagination.prototype.next = function () {
            if (!this.loading) {
                this.getItems();
                this._page += 1;
            }
        };
        //endregion
        //region Events
        /**
         *
         * @param ev
         */
        Pagination.prototype.handleStateChange = function (ev) {
            var _this = this;
            // readyState 4 the operation is complete.
            if (this._req.readyState === 4) {
                // status 200 DONE
                if (this._req.status === 200) {
                    setTimeout(function () {
                        _this.loading = false;
                        _this.onStatusChange('OK');
                        _this.onDataArrived(_this.req.response);
                    }, 1000);
                }
            }
        };
        /**
         * Fires statusChange event.
         * @param data
         */
        Pagination.prototype.onStatusChange = function (data) {
            if (this.statusChange) {
                this.statusChange.fire(data);
            }
        };
        /**
         * Fires dataArrived event.
         * @param status
         */
        Pagination.prototype.onDataArrived = function (status) {
            if (this.dataArrived) {
                this.dataArrived.fire(status);
            }
        };
        Object.defineProperty(Pagination.prototype, "req", {
            get: function () {
                if (!this._req) {
                    this._req = new XMLHttpRequest();
                    this._req.onreadystatechange = this.handleStateChange.bind(this);
                }
                return this._req;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pagination.prototype, "dataArrived", {
            /**
             * Get dataArrived event.
             * @returns {PLEvent}
             */
            get: function () {
                if (!this._dataArrived) {
                    this._dataArrived = new pl.PLEvent();
                }
                return this._dataArrived;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pagination.prototype, "statusChange", {
            /**
             * Get statusChange event.
             * @returns {PLEvent}
             */
            get: function () {
                if (!this._statusChange) {
                    this._statusChange = new pl.PLEvent();
                }
                return this._statusChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pagination.prototype, "page", {
            /**
             * Get current page.
             * @returns {number}
             */
            get: function () {
                return this._page;
            },
            /**
             * Set current page.
             * @param {number} value
             */
            set: function (value) {
                this._page = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pagination.prototype, "pageSize", {
            /**
             * Get pageSize.
             * @returns {number}
             */
            get: function () {
                return this._pageSize;
            },
            /**
             * Set pageSize.
             * @param {number} value
             */
            set: function (value) {
                this._pageSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pagination.prototype, "fragments", {
            /**
             * Get fragments.
             * @returns {string[]}
             */
            get: function () {
                return this._fragments;
            },
            /**
             * Set fragments.
             * @param {string[]} value
             */
            set: function (value) {
                this._fragments = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pagination.prototype, "settings", {
            /**
             * Get settings.
             * @returns {string[]}
             */
            get: function () {
                return this._settings;
            },
            /**
             * Set settings.
             * @param {string[]} value
             */
            set: function (value) {
                this._settings = value;
            },
            enumerable: true,
            configurable: true
        });
        return Pagination;
    }());
    pl.Pagination = Pagination;
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 20/08/2017.
 * https://validatejs.org/#validators-datetime
 */
(function (pl) {
    var Validator = /** @class */ (function () {
        function Validator() {
        }
        /**
         * Validate if value has an specific length.
         * @param {any} value
         * @param {any} length
         */
        Validator.count = function (value, length) {
            var string = Validator.toString(value);
            if (string === "undefined"
                || string === "null"
                || string === "NaN"
                || string === "Infinity")
                return false;
            return string.length === length;
        };
        /**
         * Validate if value is a valid credit card number.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.creditCardNumber = function (value) {
            if (!Validator.isString(value))
                return false;
            return /^(\d{4}-?){3}\d{4}$/.test(value);
        };
        /**
         * Validate if value is a valid date "dd/mm/yyyy".
         * @param {string} value
         * @returns {boolean}
         */
        Validator.date = function (value) {
            if (!Validator.isString(value))
                return false;
            // First check for the pattern
            if (!/^\d{1,2}\/|-\d{1,2}\/|-\d{4}$/.test(value))
                return false;
            // Parse the date parts to integers
            var parts = value.split(/\/|-/);
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);
            // Check the ranges of month and year
            if (year < 1000 || year > 3000 || month == 0 || month > 12)
                return false;
            var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            // Adjust for leap years
            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                monthLength[1] = 29;
            // Check the range of the day
            return day > 0 && day <= monthLength[month - 1];
        };
        /**
         * Validate if value is a valid datetime.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.datetime = function (value) {
            throw 'Not implemented yet';
        };
        /**
         * Validate if value is a valid email.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.email = function (value) {
            if (!Validator.isString(value))
                return false;
            return /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(value);
        };
        /**
         * Validate if two values are equal.
         * @param {string} value
         * @param {string} confirm
         * @returns {boolean}
         */
        Validator.equality = function (value, confirm) {
            if (!Validator.isString(value) && !Validator.isString(confirm))
                return false;
            return value === confirm;
        };
        /**
         * Validate if value is a valid hash.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.hash = function (value) {
            if (!Validator.isString(value))
                return false;
            return /^#\w*/.test(value);
        };
        /**
         * Validate if value is not empty.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.notEmpty = function (value) {
            if (!Validator.isString(value))
                return false;
            return !!value.length;
        };
        /**
         * Validate if value is a valid phone number.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.phone = function (value) {
            if (!Validator.isString(value))
                return false;
            return value.replace(/[^\d]/g, '').length === 10;
        };
        /**
         * Validate the length of a string in a range.
         * @param {string} value
         * @param {any} min
         * @param {any} max
         * @returns {boolean}
         */
        Validator.range = function (value, min, max) {
            var string = Validator.toString(value);
            if (string === "undefined"
                || string === "null"
                || string === "NaN"
                || string === "Infinity")
                return false;
            min = Validator.toInteger(min);
            max = Validator.toInteger(max);
            if ("number" === typeof max && !isNaN(max)) {
                return string.length >= min && string.length <= max;
            }
            else {
                return string.length >= min;
            }
        };
        /**
         * Validate if value is a valid url.
         * @param {string} value
         * @returns {boolean}
         */
        Validator.url = function (value) {
            if (!Validator.isString(value))
                return false;
            return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value);
        };
        /**
         * Validate if value is an array.
         * @param {any} value
         * @returns {boolean}
         */
        Validator.isArray = function (value) {
            return value instanceof Array;
        };
        /**
         * Validate if value is boolean.
         * @param {any} value
         * @returns {boolean}
         */
        Validator.isBoolean = function (value) {
            return "boolean" === typeof value;
        };
        /**
         * Validate if value is number.
         * @param {any} value
         * @returns {boolean}
         */
        Validator.isNumber = function (value) {
            return "number" === typeof value;
        };
        /**
         * Validate if value is string.
         * @param value
         * @returns {boolean}
         */
        Validator.isString = function (value) {
            return "string" === typeof value;
        };
        /**
         * Parse given value to float.
         * @param {string} value
         * @returns {number}
         */
        Validator.toFloat = function (value) {
            return parseFloat(value);
        };
        /**
         * Parse given value to integer.
         * @param {string} value
         * @returns {number}
         */
        Validator.toInteger = function (value) {
            return parseInt(value);
        };
        /**
         * Parse given value to string.
         * @param {any} value
         * @returns {string}
         */
        Validator.toString = function (value) {
            return String(value);
        };
        return Validator;
    }());
    pl.Validator = Validator;
})(pl || (pl = {}));

/**
 * Created by cesarmejia on 20/08/2017.
 */
(function (pl) {
    var ContactForm = /** @class */ (function () {
        // endregion
        /**
         * Create a contact form instance.
         * @param {HTMLElement} element
         * @param {object} settings
         */
        function ContactForm(element, settings) {
            if (settings === void 0) { settings = {}; }
            /**
             * Determine if window could close or not.
             * @type {boolean}
             */
            this._letCloseWindow = true;
            /**
             * Object that will be used to make requests.
             * @type {XMLHttpRequest}
             */
            this._req = new XMLHttpRequest();
            /**
             * Contains info for contact form.
             * @type {object}
             */
            this._settings = {};
            if (!(element instanceof HTMLElement))
                throw 'Template is not an HTMLFormElement';
            var defaults = {
                url: 'fragment/mailer/send-mail-v1.php',
                //url: 'fragment/themes/n1/process-ajax.php',
                useAjax: true,
                inputSelectors: [
                    "input[type=text]",
                    "select",
                    "textarea"
                ]
            };
            this._form = element;
            this._element = element;
            this._captcha = false;
            this._settings = pl.Util.extendsDefaults(defaults, settings);
            this.initializeEvents();
        }
        // region Private Methods
        /**
         * Make an ajax request with contact form data.
         * @param {object} data
         */
        ContactForm.prototype.ajaxRequest = function (data) {
            var async = true;
            var method = 'POST';
            var settings = this._settings;
            var dataString = "data=" + JSON.stringify(data);
            this.onSending();
            this._req.open(method, settings['url'], async);
            this._req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            this._req.send(dataString);
        };
        /**
         * Shows message while contact form is working
         * and avoid user closes the window.
         */
        ContactForm.prototype.beforeUnload = function () {
            if (!this._letCloseWindow) {
                return 'Sending message';
            }
        };
        /**
         * Disable or enable form.
         */
        ContactForm.prototype.disableForm = function () {
            var _this = this;
            if (this._disabled)
                pl.Classie.addClass(this.element, 'disabled');
            else
                pl.Classie.removeClass(this.element, 'disabled');
            [].forEach.call(this.inputs, function (input) {
                input.disabled = _this._disabled;
            });
        };
        /**
         * Get input container if have it.
         * @param {HTMLElement} input
         * @param {boolean} isText
         * @returns {HTMLElement|null}
         */
        ContactForm.prototype.getInputContainer = function (input, isText) {
            var container = null, parent = input;
            while (parent = parent.parentNode) {
                if (parent instanceof HTMLElement) {
                    if (isText && pl.Classie.hasClass(parent, 'input-container')) {
                        break;
                    }
                    if (!isText && (pl.Classie.hasClass(parent, 'input-group') || 'fieldset' === parent.tagName.toLowerCase())) {
                        break;
                    }
                }
            }
            return parent;
        };
        /**
         * Handle input change event.
         * @param {Event} ev
         */
        ContactForm.prototype.handleChange = function (ev) {
            // Do nothing if key is invalid.
            if (this.isInvalidKey(ev.which || ev.keyCode || 0))
                return;
            // Retrieve input and some attrs.
            var input = ev.target;
            // Validate input.
            this.validate(input);
        };
        /**
         * Handles state changes of request.
         * @param {Event} ev
         */
        ContactForm.prototype.handleReadyStateChange = function (ev) {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (this._req.readyState === DONE) {
                if (this._req.status === OK) {
                    this.onSuccess(this._req.responseText, this._req.status, this._req.statusText);
                }
                else {
                    this.onError(this._req.status, this._req.statusText);
                }
            }
        };
        /**
         * Attach handlers to contact form elements.
         */
        ContactForm.prototype.initializeEvents = function () {
            var _this = this;
            this.beforeUnload = this.beforeUnload.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.submit = this.submit.bind(this);
            this.isCaptchaValid = this.isCaptchaValid.bind(this);
            this.handleReadyStateChange = this.handleReadyStateChange.bind(this);
            // Attach handleChange handler to each input in form.
            [].forEach.call(this.inputs, function (input) {
                if (input.type === 'text' || input.tagName.toLowerCase() === 'textarea')
                    input.addEventListener('keyup', _this.handleChange, false);
                input.addEventListener('change', _this.handleChange, false);
            });
            // Attach on submit handler to form.
            this.element.addEventListener('submit', this.submit, false);
            // Attach onbeforeunload handler.
            window.onbeforeunload = this.beforeUnload;
            // Attach handler to state change of request.
            this._req.onreadystatechange = this.handleReadyStateChange;
        };
        /**
         * Return if code is an invalid key.
         * @param {number} code
         */
        ContactForm.prototype.isInvalidKey = function (code) {
            var i, invalidKeys = [
                pl.Key.ALT,
                pl.Key.CAPS_LOCK,
                pl.Key.CTRL,
                pl.Key.DOWN_ARROW,
                pl.Key.LEFT_ARROW,
                pl.Key.RIGHT_ARROW,
                pl.Key.SELECT,
                pl.Key.SHIFT,
                pl.Key.UP_ARROW,
                pl.Key.TAB
            ];
            for (i = 0; i < invalidKeys.length; i++) {
                if (invalidKeys[i] === code)
                    return true;
            }
            return false;
        };
        /**
         * Validate input checkbox.
         * @param {HTMLInputElement} input
         * @returns {boolean}
         */
        ContactForm.prototype.isCheckboxValid = function (input) {
            var name = input.name;
            var group = this.checkboxes[name];
            var valid = false;
            group.forEach(function (item) {
                if (item.checked) {
                    valid = true;
                }
            });
            return valid;
        };
        /**
         * Validate input radio.
         * @param {HTMLInputElement} input
         * @returns {boolean}
         */
        ContactForm.prototype.isRadioValid = function (input) {
            var name = input.name;
            var group = this.radios[name];
            var valid = false;
            group.forEach(function (item) {
                if (item.checked) {
                    valid = true;
                }
            });
            return valid;
        };
        /**
         * Validate input text value.
         * @param {HTMLInputElement} input
         * @returns {boolean}
         */
        ContactForm.prototype.isTextValid = function (input) {
            if ("string" === typeof input.dataset['validate']) {
                // Validation rules could be in this form "notEmpty|count:3|range:5,10"
                var rules = input.dataset['validate'].split('|'), name_1 = input.name, value = input.value, valid = false;
                var _loop_1 = function (i) {
                    var rule = rules[i], args, array = [];
                    // Value that will be valued need to be the first argument
                    // to Validator methods.
                    array.push(value);
                    try {
                        if (rules[i].indexOf(":") > -1) {
                            rule = rules[i].slice(0, rules[i].indexOf(":"));
                            args = rules[i].slice(rules[i].indexOf(":") + 1);
                            // When the rule is equality we must find the element with which
                            // we're going to do the comparison.
                            if (rule === "equality") {
                                var filter = this_1.texts.filter(function (e) { return e.name === args; });
                                array.push(filter[0].value);
                            }
                            else {
                                array = array.concat(args.split(','));
                            }
                        }
                        // Validate!!
                        valid = pl.Validator[rule].apply(this_1, array);
                    }
                    catch (e) {
                        "console" in window
                            && console.log("Unknown \"%s\" validation in \"%s\" input", rule, name_1);
                    }
                    // All rules must be true, if one fails break the loop.
                    if (!valid) {
                        return "break";
                    }
                };
                var this_1 = this;
                for (var i = 0; i < rules.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
                return valid;
            }
            return true;
        };
        /**
         * Add or remove error from input
         * @param {HTMLElement} input
         * @param {boolean} isValid
         */
        ContactForm.prototype.toggleInputError = function (input, isValid) {
            var type = input['type'];
            // If input has an error get it.
            var clueElem = input['clue-elem'];
            var clueText = "";
            // Points to parent node.
            var isText = ("checkbox" !== type && "radio" !== type);
            var inputContainer = this.getInputContainer(input, isText);
            // Toggle error of the input.
            if (isValid) {
                if (clueElem) {
                    // Disappears and remove error element from DOM.
                    clueElem.parentNode.removeChild(clueElem);
                    // Set as null clue elem.
                    input['clue-elem'] = null;
                }
                // Remove invalid class.
                pl.Classie.removeClass(input, 'invalid');
                pl.Classie.addClass(input, 'dirty');
                // Unmark as invalid input parent if has class ".input-container"
                inputContainer && pl.Classie.removeClass(inputContainer, 'invalid');
                inputContainer && pl.Classie.removeClass(inputContainer, 'dirty');
            }
            else {
                if (!clueElem) {
                    // Retrieve input clue.
                    clueText = input.dataset['clue'] || 'Inválido';
                    input.setAttribute('placeholder', clueText);
                    // Create clue element.
                    clueElem = document.createElement('span');
                    clueElem.innerText = clueText;
                    pl.Classie.addClass(clueElem, 'input-clue');

                }
                // Set invalid class.
                pl.Classie.addClass(input, 'invalid');
                // Mark as invalid input parent if has class ".input-container"
                inputContainer && pl.Classie.addClass(inputContainer, 'invalid');
            }
        };
        /**
         * Validate input.
         * @param {HTMLInputElement} input
         * @returns {boolean}
         */
        ContactForm.prototype.validate = function (input) {
            var _this = this;
            var type = input.type;
            var name = input.name;
            var valid;
            // Get validity of "checkbox" and toggle his error.
            if ("checkbox" === type) {
                valid = this.isCheckboxValid(input);
                this.checkboxes[name].forEach(function (checkbox) { _this.toggleInputError(checkbox, valid); });
            }
            else if ("radio" === type) {
                valid = this.isRadioValid(input);
                this.radios[name].forEach(function (radio) { _this.toggleInputError(radio, valid); });
            }
            else {
                valid = this.isTextValid(input);
                this.toggleInputError(input, valid);
            }
            if (!valid) {
                this.onInputError(input);
            }
            return valid;
        };
        // endregion
        /**
         * Validate Captcha.
         * @param {HTMLInputElement}
         * @returns {boolean}
         */
        ContactForm.prototype.isCaptchaValid = function (isValid) {
            this._captcha = (isValid) ? isValid : false;
            return this.isValid;
        };
        // endregion
        // region Methods
        /**
         * Gets all values of inputs in JSON format.
         * @returns {object}
         */
        ContactForm.prototype.getFormValues = function () {
            var data = {}, name, type;
            [].forEach.call(this.inputs, function (input) {
                name = input.name;
                type = input.type;
                // Checkboxes
                if ("checkbox" === type && input.checked) {
                    if ("string" === typeof data[name]) {
                        data[name] += ", " + input.value;
                    }
                    else {
                        data[name] = input.value;
                    }
                }
                // Radios
                if ("radio" === type && input.checked) {
                    data[name] = input.value;
                }
                // Texts
                if ("text" === type || "hidden" === type || "textarea" === input.tagName.toLowerCase()) {
                    data[name] = input.value;
                }
            });
            return data;
        };
        /**
         * Validates all inputs in the form.
         * @returns {boolean}
         */
        ContactForm.prototype.isFormValid = function () {
            var _this = this;
            var valid = true;
            var prop, input;
            // Check validity of checkboxes.
            for (prop in this.checkboxes) {
                // Check first element of a group.
                input = this.checkboxes[prop][0];
                if (!this.validate(input)) {
                    valid = false;
                }
            }
            // Check validity of radios.
            for (prop in this.radios) {
                // Check first element of a group.
                input = this.radios[prop][0];
                if (!this.validate(input)) {
                    valid = false;
                }
            }
            // Check validity of texts and textarea.
            this.texts.forEach(function (input) {
                if (!_this.validate(input)) {
                    valid = false;
                }
            });
            return valid;
        };
        /**
         * Reset form inputs.
         */
        ContactForm.prototype.reset = function () {
            this.element.reset();
        };
        /**
         * Handle submit event.
         * @param {Event} ev
         */
        ContactForm.prototype.submit = function (ev) {
            let residencial = document.querySelector('.outer-wrapper.residential-wrapper'),
                shelter = document.querySelector('.outer-wrapper.shelter');
            // Validate form.
            if (this.isFormValid()) {
                // If we're using ajax make other validations. Else let the flow keeps going.
                if (this._settings['useAjax'] && this._settings['withCaptcha']) {
                    // if(this._captcha) {
                    if (this._captcha) {
                        // If form is disabled, it's possible that contact form is sending a request.
                        if (this._disabled)
                            return;
                        // Maybe submit is called manually and there is no ev.
                        ev && ev.preventDefault();
                        var data = {
                            host: location.hostname,
                            data: this.getFormValues()
                        };
                        this.ajaxRequest(data);
                        this._captcha = 'false';
                    }
                    else {
                        // Maybe submit is called manually and there is no ev.
                        ev && ev.preventDefault();
                        if (residencial) {
                            Page.Contact.trembleCaptcha();
                        } else {
                            Page.shelterContact.trembleCaptcha();
                        }
                    }
                }
            }
            else {
                // Maybe submit is called manually and there is no ev.
                ev && ev.preventDefault();
            }
        };
        // endregion
        // region Events
        /**
         * Fires when contact form request has an error.
         * @param {number} status
         * @param {string} statusText
         */
        ContactForm.prototype.onError = function (status, statusText) {
            if (this._error) {
                this._error.fire(status, statusText, this._form);
            }
            this.disabled = false;
            this._letCloseWindow = true;
        };
        /**
         * Fires when an input has an error.
         * @param {HTMLInputElement} input
         */
        ContactForm.prototype.onInputError = function (input) {
            if (this._inputError) {
                this._inputError.fire(input);
            }
        };
        /**
         * Fires when contact form is sending.
         */
        ContactForm.prototype.onSending = function () {
            if (this._sending) {
                this._sending.fire(this._form);
            }
            this.disabled = true;
            this._letCloseWindow = false;
        };
        /**
         * Fires when contact form request was success.
         * @param {string} response
         * @param {number} status
         * @param {string} statusText
         */
        ContactForm.prototype.onSuccess = function (response, status, statusText) {
            if (this._success) {
                this._success.fire(response, status, statusText, this._form);
            }
            this.disabled = false;
            this._letCloseWindow = true;
            // Specific line to Goplek.
            var data = parseInt(response);
            if (!isNaN(data) && data === 1) {
                this.reset();
            }
        };
        Object.defineProperty(ContactForm.prototype, "error", {
            /**
             * Get error event.
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._error) {
                    this._error = new pl.PLEvent();
                }
                return this._error;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "inputError", {
            /**
             * Get input error event.
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._inputError) {
                    this._inputError = new pl.PLEvent();
                }
                return this._inputError;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "sending", {
            /**
             * Get sending event
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._sending) {
                    this._sending = new pl.PLEvent();
                }
                return this._sending;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "success", {
            /**
             * Get success event.
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._success) {
                    this._success = new pl.PLEvent();
                }
                return this._success;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "disabled", {
            /**
             * Get disable mode.
             * @returns {boolean}
             */
            get: function () {
                return this._disabled;
            },
            /**
             * Set disable mode.
             * @param {boolean} disabled
             */
            set: function (disabled) {
                if (disabled !== this._disabled) {
                    this._disabled = disabled;
                    this.disableForm();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "element", {
            /**
             * Get form element.
             * @returns {HTMLFormElement}
             */
            get: function () {
                return this._element;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "inputs", {
            /**
             * Get form inputs.
             * @returns {NodeListOf<Element>}
             */
            get: function () {
                if (!this._inputs) {
                    var selectors = this._settings['inputSelectors'];
                    this._inputs = this._element.querySelectorAll(selectors.join(","));
                }
                return this._inputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "checkboxes", {
            /**
             * Get checkboxes.
             * @returns {Object}
             */
            get: function () {
                var _this = this;
                if (!this._checkboxes) {
                    this._checkboxes = {};
                    [].forEach.call(this.inputs, function (input) {
                        if ("checkbox" === input.type) {
                            if (!_this._checkboxes.hasOwnProperty(input.name)) {
                                _this._checkboxes[input.name] = [];
                            }
                            _this._checkboxes[input.name].push(input);
                        }
                    });
                }
                return this._checkboxes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "radios", {
            /**
             * Get radios.
             * @returns {Object}
             */
            get: function () {
                var _this = this;
                if (!this._radios) {
                    this._radios = {};
                    [].forEach.call(this.inputs, function (input) {
                        if ("radio" === input.type) {
                            if (!_this._radios.hasOwnProperty(input.name)) {
                                _this._radios[input.name] = [];
                            }
                            _this._radios[input.name].push(input);
                        }
                    });
                }
                return this._radios;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "texts", {
            /**
             * Get texts.
             * @returns {Object}
             */
            get: function () {
                var _this = this;
                if (!this._texts) {
                    this._texts = [];
                    [].forEach.call(this.inputs, function (input) {
                        if ("text" === input.type || "hidden" === input.type || "textarea" === input.tagName.toLowerCase()) {
                            _this._texts.push(input);
                        }
                    });
                }
                return this._texts;
            },
            enumerable: true,
            configurable: true
        });
        return ContactForm;
    }());
    pl.ContactForm = ContactForm;
})(pl || (pl = {}));
/**
 * Created by cesarmejia on 20/08/2017.
 */
(function (pl) {
    var Modal = /** @class */ (function () {
        // endregion
        /**
         * Create an instance of Modal.
         * @constructor
         * @param {object} settings
         */
        function Modal(settings) {
            // endregion
            // region Fields
            /**
             * Flag that indicate if the modal is open or not.
             * @type {boolean}
             */
            this._isOpen = false;
            // Define default options.
            var defaults = {
                avoidClose: false,
                closeWithOverlay: false,
                effectName: ''
            };
            // Create settings by extending defaults with passed
            // settings in constructor.
            this._settings = pl.Util.extendsDefaults(defaults, settings || {});
            // Select transitionend that browser support.
            this._transitionend = Modal.transitionSelect();
            this.buildOut();
            this.initializeEvents();
        }
        // region Static
        /**
         * Get transitionend event depending of the browser.
         * @return {string}
         */
        Modal.transitionSelect = function () {
            var el = document.createElement('div');
            var transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'otransitionend',
                transition: 'transitionend'
            };
            for (var name_1 in transEndEventNames) {
                if (el.style[name_1] !== undefined)
                    return transEndEventNames[name_1];
            }
        };
        ;
        // region Private Methods
        /**
         * Create modal elements.
         */
        Modal.prototype.buildOut = function () {
            // Create modal content.
            this.modal.appendChild(this.content);
            // Create close button element.
            if (!this._settings['avoidClose']) {
                this.content.appendChild(this.closeButton);
            }
        };
        /**
         * Attach handlers to modal elements.
         */
        Modal.prototype.initializeEvents = function () {
            var _this = this;
            if (!this._settings['avoidClose']) {
                var ESC_KEY_1 = 27;
                // Close modal if user press esc key.
                document.addEventListener('keydown', function (ev) {
                    if (ev.keyCode == ESC_KEY_1)
                        _this.close();
                }, false);
                // Close modal if user clicks the close button.
                this.closeButton.addEventListener('click', function (ev) {
                    _this.close();
                }, false);
                // Close modal if user clicks the overlay.
                if (this._settings['closeWithOverlay']) {
                    this.overlay.addEventListener('click', function (ev) {
                        _this.close();
                    }, false);
                }
            }
            // Bind "this" context to toggleTransition handler.
            this.toggleTransitionend = this.toggleTransitionend.bind(this);
            // Attach handler to transitionend event, when the event occurs for the first time
            // remove the event because transitionend handler will execute the same times as
            // styles modified.
            this.content.addEventListener(this._transitionend, this.toggleTransitionend, false);
        };
        /**
         * Remove elements from DOM.
         */
        Modal.prototype.removeFromDom = function () {
            this.overlay.parentNode.removeChild(this.overlay);
            this.modal.parentNode.removeChild(this.modal);
        };
        /**
         * Control the flow of transitionend handler and modal.
         * @param {TransitionEvent} ev
         */
        Modal.prototype.toggleTransitionend = function (ev) {
            var _this = this;
            var functionToCall = this._isOpen ? this.onClosed : this.onOpened;
            // Remove transitionend handler to avoid multiple calls depending on css properties modfied.
            this.content.removeEventListener(this._transitionend, this.toggleTransitionend);
            this._isOpen = !this._isOpen;
            functionToCall.call(this);
            setTimeout(function () {
                _this.content.addEventListener(_this._transitionend, _this.toggleTransitionend, false);
            }, 50);
        };
        // endregion
        // region Methods
        /**
         * Close modal and remove from DOM.
         */
        Modal.prototype.close = function () {
            if (!this._isOpen)
                return;
            var body = document.body;
            // Fire closing event.
            this.onClosing();
            // Let scroll in body
            pl.Classie.removeClass(body, 'no-scroll');
            pl.Classie.removeClass(this.overlay, 'pl-modal-open');
            pl.Classie.removeClass(this.modal, 'pl-modal-open');
        };
        /**
         * Change effect from modal.
         * @param {string} effectName
         */
        Modal.prototype.changeEffect = function (effectName) {
            this._settings['effectName'] = effectName;
            pl.Classie.reset(this.modal);
            pl.Classie.addClass(this.modal, 'pl-modal');
            pl.Classie.addClass(this.modal, this._settings['effectName']);
        };
        /**
         * Add modal to DOM and show it.
         * @param {HTMLElement|string} element
         */
        Modal.prototype.open = function (element) {
            if (this._isOpen)
                return;
            var body = document.body;
            this.setContent(element);
            body.appendChild(this.overlay);
            body.appendChild(this.modal);
            // Avoid scroll in void since modal is open.
            pl.Classie.addClass(body, 'no-scroll');
            // Fire opening event.
            this.onOpening();
            // Force the browser to recognize the elements that we just added.
            window.getComputedStyle(this.overlay).backgroundColor;
            window.getComputedStyle(this.modal).opacity;
            window.getComputedStyle(this.content).opacity;
            pl.Classie.addClass(this.overlay, 'pl-modal-open');
            pl.Classie.addClass(this.modal, 'pl-modal-open');
        };
        /**
         * Set modal content.
         * @param {HTMLElement|string} element
         */
        Modal.prototype.setContent = function (element) {
            if (element === void 0) { element = ""; }
            // Empty content element.
            this.content.innerHTML = '';
            if (!this._settings['avoidClose']) {
                this.content.appendChild(this.closeButton);
            }
            if ("string" === typeof element) {
                this.content.appendChild(document.createTextNode(element));
            }
            else {
                this.content.appendChild(element);
            }
        };
        // endregion
        // region Events
        /**
         * Fires when modal is closed.
         */
        Modal.prototype.onClosing = function () {
            if (this._closing) {
                this._closing.fire();
            }
        };
        /**
         * Fires when modal is opened.
         */
        Modal.prototype.onOpening = function () {
            if (this._opening) {
                this._opening.fire();
            }
        };
        /**
         * Fires when modal is closed.
         */
        Modal.prototype.onClosed = function () {
            if (this._closed) {
                this._closed.fire();
            }
            this.removeFromDom();
        };
        /**
         * Fires when modal is opened.
         */
        Modal.prototype.onOpened = function () {
            if (this._opened) {
                this._opened.fire();
            }
        };
        Object.defineProperty(Modal.prototype, "closing", {
            /**
             * Get modal closing event.
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._closing) {
                    this._closing = new pl.PLEvent();
                }
                return this._closing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "opening", {
            /**
             * Get modal opening event.
             * @returns {pl.PLEvent}
             */
            get: function () {
                if (!this._opening) {
                    this._opening = new pl.PLEvent();
                }
                return this._opening;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "closed", {
            /**
             * Get modal closed event.
             * @return {pl.PLEvent}
             */
            get: function () {
                if (!this._closed) {
                    this._closed = new pl.PLEvent();
                }
                return this._closed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "opened", {
            /**
             * Get modal opened event.
             * @return {pl.PLEvent}
             */
            get: function () {
                if (!this._opened) {
                    this._opened = new pl.PLEvent();
                }
                return this._opened;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "overlay", {
            /**
             * Get overlay element.
             * @returns {HTMLElement}
             */
            get: function () {
                if (!this._overlay) {
                    this._overlay = document.createElement('div');
                    pl.Classie.addClass(this._overlay, 'pl-modal-overlay');
                }
                return this._overlay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "modal", {
            /**
             * Get modal element.
             * @returns {HTMLElement}
             */
            get: function () {
                if (!this._modal) {
                    this._modal = document.createElement('div');
                    pl.Classie.addClass(this._modal, 'pl-modal');
                    pl.Classie.addClass(this._modal, this._settings['effectName']);
                }
                return this._modal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "content", {
            /**
             * Get content element.
             * @returns {HTMLElement}
             */
            get: function () {
                if (!this._content) {
                    this._content = document.createElement('div');
                    pl.Classie.addClass(this._content, 'pl-modal-content');
                }
                return this._content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Modal.prototype, "closeButton", {
            /**
             * Get close button element.
             * @returns {HTMLElement}
             */
            get: function () {
                if (!this._closeButton) {
                    this._closeButton = document.createElement('div');
                    pl.Classie.addClass(this._closeButton, 'pl-modal-close-button');
                }
                return this._closeButton;
            },
            enumerable: true,
            configurable: true
        });
        return Modal;
    }());
    pl.Modal = Modal;
})(pl || (pl = {}));

export default pl;