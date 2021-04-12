define("util/Classie", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Classie = (function () {
        function Classie() {
        }
        Classie.addClass = function (elem, className) {
            if (elem.classList)
                elem.classList.add(className);
            else if (!Classie.hasClass(elem, className))
                elem.className += " " + className;
        };
        Classie.hasClass = function (elem, className) {
            return elem.classList
                ? elem.classList.contains(className)
                : new RegExp("\\b" + className + "\\b").test(elem.className);
        };
        Classie.removeClass = function (elem, className) {
            if (elem.classList)
                elem.classList.remove(className);
            else
                elem.className = elem.className.replace(new RegExp("\\b" + className + "\\b", "g"), '');
        };
        Classie.reset = function (elem) {
            elem.className = '';
        };
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
    exports.default = Classie;
});
define("util/Util", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util = (function () {
        function Util() {
        }
        Util.capitalizeText = function (text) {
            return text.replace(/\w/, function (l) { return l.toUpperCase(); });
        };
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
    exports.default = Util;
});
define("core/Key", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    })(Key || (Key = {}));
    exports.default = Key;
});
define("util/Validator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validator = (function () {
        function Validator() {
        }
        Validator.count = function (value, length) {
            var string = Validator.toString(value);
            if (string === "undefined"
                || string === "null"
                || string === "NaN"
                || string === "Infinity")
                return false;
            return string.length === length;
        };
        Validator.creditCardNumber = function (value) {
            if (!Validator.isString(value))
                return false;
            return /^(\d{4}-?){3}\d{4}$/.test(value);
        };
        Validator.date = function (value) {
            if (!Validator.isString(value))
                return false;
            if (!/^\d{1,2}\/|-\d{1,2}\/|-\d{4}$/.test(value))
                return false;
            var parts = value.split(/\/|-/);
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);
            if (year < 1000 || year > 3000 || month == 0 || month > 12)
                return false;
            var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                monthLength[1] = 29;
            return day > 0 && day <= monthLength[month - 1];
        };
        Validator.datetime = function (value) {
            throw 'Not implemented yet';
        };
        Validator.email = function (value) {
            if (!Validator.isString(value))
                return false;
            return /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(value);
        };
        Validator.equality = function (value, confirm) {
            if (!Validator.isString(value) && !Validator.isString(confirm))
                return false;
            return value === confirm;
        };
        Validator.hash = function (value) {
            if (!Validator.isString(value))
                return false;
            return /^#\w*/.test(value);
        };
        Validator.notEmpty = function (value) {
            if (!Validator.isString(value))
                return false;
            return !!value.length;
        };
        Validator.phone = function (value) {
            if (!Validator.isString(value))
                return false;
            return value.replace(/[^\d]/g, '').length === 10;
        };
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
        Validator.url = function (value) {
            if (!Validator.isString(value))
                return false;
            return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value);
        };
        Validator.isArray = function (value) {
            return value instanceof Array;
        };
        Validator.isBoolean = function (value) {
            return "boolean" === typeof value;
        };
        Validator.isNumber = function (value) {
            return "number" === typeof value;
        };
        Validator.isString = function (value) {
            return "string" === typeof value;
        };
        Validator.toFloat = function (value) {
            return parseFloat(value);
        };
        Validator.toInteger = function (value) {
            return parseInt(value);
        };
        Validator.toString = function (value) {
            return String(value);
        };
        return Validator;
    }());
    exports.default = Validator;
});
define("core/PLEvent", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PLEvent = (function () {
        function PLEvent() {
            this._handlers = [];
            this._scope = this || window;
        }
        PLEvent.prototype.add = function (handler) {
            if (handler) {
                this._handlers.push(handler);
            }
        };
        PLEvent.prototype.fire = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._handlers.forEach(function (handler) {
                handler.apply(_this._scope, args);
            });
        };
        PLEvent.prototype.remove = function (handler) {
            this._handlers = this._handlers.filter(function (fn) {
                if (fn != handler)
                    return fn;
            });
        };
        return PLEvent;
    }());
    exports.default = PLEvent;
});
define("ContactForm", ["require", "exports", "util/Classie", "util/Util", "core/Key", "util/Validator", "core/PLEvent"], function (require, exports, Classie_1, Util_1, Key_1, Validator_1, PLEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactForm = (function () {
        function ContactForm(element, settings) {
            if (settings === void 0) { settings = {}; }
            this._letCloseWindow = true;
            this._req = new XMLHttpRequest();
            this._settings = {};
            if (!(element instanceof HTMLElement))
                throw 'Template is not an HTMLFormElement';
            var defaults = {
                url: 'process-ajax.php',
                useAjax: true,
                inputSelectors: [
                    "input[type=text]",
                    "select",
                    "textarea"
                ]
            };
            this._element = element;
            this._settings = Util_1.default.extendsDefaults(defaults, settings);
            this.initializeEvents();
        }
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
        ContactForm.prototype.beforeUnload = function () {
            if (!this._letCloseWindow) {
                return 'Sending message';
            }
        };
        ContactForm.prototype.disableForm = function () {
            var _this = this;
            if (this._disabled)
                Classie_1.default.addClass(this.element, 'disabled');
            else
                Classie_1.default.removeClass(this.element, 'disabled');
            [].forEach.call(this.inputs, function (input) {
                input.disabled = _this._disabled;
            });
        };
        ContactForm.prototype.getInputContainer = function (input, isText) {
            var container = null, parent = input;
            while (parent = parent.parentNode) {
                if (parent instanceof HTMLElement) {
                    if (isText && Classie_1.default.hasClass(parent, 'input-container')) {
                        break;
                    }
                    if (!isText && (Classie_1.default.hasClass(parent, 'input-group') || 'fieldset' === parent.tagName.toLowerCase())) {
                        break;
                    }
                }
            }
            return parent;
        };
        ContactForm.prototype.handleChange = function (ev) {
            if (this.isInvalidKey(ev.which || ev.keyCode || 0))
                return;
            var input = ev.target;
            var valid = this.validate(input);
            this.onInputChange(input, valid);
        };
        ContactForm.prototype.handleReadyStateChange = function (ev) {
            var DONE = 4;
            var OK = 200;
            if (this._req.readyState === DONE) {
                if (this._req.status === OK) {
                    this.onSuccess(this._req.responseText, this._req.status, this._req.statusText);
                }
                else {
                    this.onError(this._req.status, this._req.statusText);
                }
            }
        };
        ContactForm.prototype.initializeEvents = function () {
            var _this = this;
            this.beforeUnload = this.beforeUnload.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.submit = this.submit.bind(this);
            this.handleReadyStateChange = this.handleReadyStateChange.bind(this);
            [].forEach.call(this.inputs, function (input) {
                if (input.type === 'text' || input.type === 'email' || input.tagName.toLowerCase() === 'textarea')
                    input.addEventListener('keyup', _this.handleChange, false);
                input.addEventListener('change', _this.handleChange, false);
            });
            this.element.addEventListener('submit', this.submit, false);
            window.onbeforeunload = this.beforeUnload;
            this._req.onreadystatechange = this.handleReadyStateChange;
        };
        ContactForm.prototype.isInvalidKey = function (code) {
            var i, invalidKeys = [
                Key_1.default.ALT,
                Key_1.default.CAPS_LOCK,
                Key_1.default.CTRL,
                Key_1.default.DOWN_ARROW,
                Key_1.default.LEFT_ARROW,
                Key_1.default.RIGHT_ARROW,
                Key_1.default.SELECT,
                Key_1.default.SHIFT,
                Key_1.default.UP_ARROW,
                Key_1.default.TAB
            ];
            for (i = 0; i < invalidKeys.length; i++) {
                if (invalidKeys[i] === code)
                    return true;
            }
            return false;
        };
        ContactForm.prototype.isCheckboxValid = function (input) {
            var name = input.name;
            var group = this.checkboxes[name];
            var valid = false;
            group.forEach(function (item) { if (item.checked) {
                valid = true;
            } });
            return valid;
        };
        ContactForm.prototype.isRadioValid = function (input) {
            var name = input.name;
            var group = this.radios[name];
            var valid = false;
            group.forEach(function (item) { if (item.checked) {
                valid = true;
            } });
            return valid;
        };
        ContactForm.prototype.isTextValid = function (input) {
            if ("string" === typeof input.dataset['validate']) {
                var rules = input.dataset['validate'].split('|'), name_1 = input.name, value = input.value, valid = false;
                var _loop_1 = function (i) {
                    var rule = rules[i], args, array = [];
                    array.push(value);
                    try {
                        if (rules[i].indexOf(":") > -1) {
                            rule = rules[i].slice(0, rules[i].indexOf(":"));
                            args = rules[i].slice(rules[i].indexOf(":") + 1);
                            if (rule === "equality") {
                                var filter = this_1.texts.filter(function (e) { return e.name === args; });
                                array.push(filter[0].value);
                            }
                            else {
                                array = array.concat(args.split(','));
                            }
                        }
                        valid = Validator_1.default[rule].apply(this_1, array);
                    }
                    catch (e) {
                        "console" in window
                            && console.log("Unknown \"%s\" validation in \"%s\" input", rule, name_1);
                    }
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
        ContactForm.prototype.toggleInputError = function (input, isValid) {
            var type = input['type'];
            var clueElem = input['clue-elem'];
            var clueText = "";
            var isText = ("checkbox" !== type && "radio" !== type);
            var inputContainer = this.getInputContainer(input, isText);
            if (isValid) {
                if (clueElem) {
                    clueElem.parentNode.removeChild(clueElem);
                    input['clue-elem'] = null;
                }
                Classie_1.default.removeClass(input, 'invalid');
                inputContainer && Classie_1.default.removeClass(inputContainer, 'invalid');
            }
            else {
                if (!clueElem) {
                    clueText = input.dataset['clue'] || 'Invalid';
                    clueElem = document.createElement('span');
                    clueElem.innerText = clueText;
                    Classie_1.default.addClass(clueElem, 'input-clue');
                    input['clue-elem'] = clueElem;
                    input.parentNode.insertBefore(clueElem, input);
                }
                Classie_1.default.addClass(input, 'invalid');
                inputContainer && Classie_1.default.addClass(inputContainer, 'invalid');
            }
        };
        ContactForm.prototype.validate = function (input) {
            var _this = this;
            var type = input.type;
            var name = input.name;
            var valid;
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
        ContactForm.prototype.getFormValues = function () {
            var data = {}, name, type;
            [].forEach.call(this.inputs, function (input) {
                name = input.name;
                type = input.type;
                if ("checkbox" === type && input.checked) {
                    if ("string" === typeof data[name]) {
                        data[name] += ", " + input.value;
                    }
                    else {
                        data[name] = input.value;
                    }
                }
                if ("radio" === type && input.checked) {
                    data[name] = input.value;
                }
                if ("text" === type || "email" === type || "hidden" === type || "select" === input.tagName.toLowerCase() || "textarea" === input.tagName.toLowerCase()) {
                    data[name] = input.value;
                }
            });
            return data;
        };
        ContactForm.prototype.isFormValid = function () {
            var _this = this;
            var valid = true;
            var prop, input;
            for (prop in this.checkboxes) {
                input = this.checkboxes[prop][0];
                if (!this.validate(input)) {
                    valid = false;
                }
            }
            for (prop in this.radios) {
                input = this.radios[prop][0];
                if (!this.validate(input)) {
                    valid = false;
                }
            }
            this.texts.forEach(function (input) { if (!_this.validate(input)) {
                valid = false;
            } });
            return valid;
        };
        ContactForm.prototype.reset = function () {
            this.element.reset();
        };
        ContactForm.prototype.submit = function (ev) {
            if (this.isFormValid()) {
                if (this._settings['useAjax']) {
                    if (this._disabled)
                        return;
                    ev && ev.preventDefault();
                    var data = {
                        host: location.hostname,
                        data: this.getFormValues()
                    };
                    this.ajaxRequest(data);
                }
            }
            else {
                ev && ev.preventDefault();
            }
        };
        ContactForm.prototype.onError = function (status, statusText) {
            if (this._error) {
                this._error.fire(status, statusText);
            }
            this.disabled = false;
            this._letCloseWindow = true;
        };
        ContactForm.prototype.onInputChange = function (input, valid) {
            if (this._inputChange) {
                this._inputChange.fire(input, valid);
            }
        };
        ContactForm.prototype.onInputError = function (input) {
            if (this._inputError) {
                this._inputError.fire(input);
            }
        };
        ContactForm.prototype.onSending = function () {
            if (this._sending) {
                this._sending.fire();
            }
            this.disabled = true;
            this._letCloseWindow = false;
        };
        ContactForm.prototype.onSuccess = function (response, status, statusText) {
            if (this._success) {
                this._success.fire(response, status, statusText);
            }
            this.disabled = false;
            this._letCloseWindow = true;
            var data = parseInt(response);
            if (!isNaN(data) && data === 1) {
                this.reset();
            }
        };
        Object.defineProperty(ContactForm.prototype, "error", {
            get: function () {
                if (!this._error) {
                    this._error = new PLEvent_1.default();
                }
                return this._error;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "inputError", {
            get: function () {
                if (!this._inputError) {
                    this._inputError = new PLEvent_1.default();
                }
                return this._inputError;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "inputChange", {
            get: function () {
                if (!this._inputChange) {
                    this._inputChange = new PLEvent_1.default();
                }
                return this._inputChange;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "sending", {
            get: function () {
                if (!this._sending) {
                    this._sending = new PLEvent_1.default();
                }
                return this._sending;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "success", {
            get: function () {
                if (!this._success) {
                    this._success = new PLEvent_1.default();
                }
                return this._success;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (disabled) {
                if (disabled !== this._disabled) {
                    this._disabled = disabled;
                    this.disableForm();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "element", {
            get: function () {
                return this._element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "inputs", {
            get: function () {
                if (!this._inputs) {
                    var selectors = this._settings['inputSelectors'];
                    this._inputs = this._element.querySelectorAll(selectors.join(","));
                }
                return this._inputs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "checkboxes", {
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "radios", {
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContactForm.prototype, "texts", {
            get: function () {
                var _this = this;
                if (!this._texts) {
                    this._texts = [];
                    [].forEach.call(this.inputs, function (input) {
                        if ("text" === input.type || "email" === input.type || "hidden" === input.type || "textarea" === input.tagName.toLowerCase() || "select" === input.tagName.toLowerCase()) {
                            _this._texts.push(input);
                        }
                    });
                }
                return this._texts;
            },
            enumerable: false,
            configurable: true
        });
        return ContactForm;
    }());
    exports.default = ContactForm;
});
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
define("pl", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    (function (pl) {
        var PLEvent = (function () {
            function PLEvent() {
                this._handlers = [];
                this._scope = this || window;
            }
            PLEvent.prototype.add = function (handler) {
                if (handler) {
                    this._handlers.push(handler);
                }
            };
            PLEvent.prototype.fire = function () {
                var _this = this;
                var args = arguments;
                this._handlers.forEach(function (handler) {
                    handler.apply(_this._scope, args);
                });
            };
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
    (function (pl) {
        var Classie = (function () {
            function Classie() {
            }
            Classie.addClass = function (elem, className) {
                if (elem.classList)
                    elem.classList.add(className);
                else if (!Classie.hasClass(elem, className))
                    elem.className += " " + className;
            };
            Classie.hasClass = function (elem, className) {
                return elem.classList
                    ? elem.classList.contains(className)
                    : new RegExp("\\b" + className + "\\b").test(elem.className);
            };
            Classie.removeClass = function (elem, className) {
                if (elem.classList)
                    elem.classList.remove(className);
                else
                    elem.className = elem.className.replace(new RegExp("\\b" + className + "\\b", "g"), '');
            };
            Classie.reset = function (elem) {
                elem.className = '';
            };
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
    (function (pl) {
        var Util = (function () {
            function Util() {
            }
            Util.capitalizeText = function (text) {
                return text.replace(/\w/, function (l) { return l.toUpperCase(); });
            };
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
    (function (pl) {
        var ScrollFire = (function () {
            function ScrollFire(elements, settings) {
                this.isScrolling = false;
                this._inview = null;
                this._elements = null;
                this.settings = pl.Util.extendsDefaults({
                    method: 'markerOver',
                    markerPercentage: 55,
                    rangeMin: 10,
                    rangeMax: 90
                }, settings);
                this.method = this["is" + pl.Util.capitalizeText(this.settings['method'])];
                if (!this.isAllowedType(elements)) {
                    throw 'Make sure that elements you\'re passing HTMLElement, HTMLCollection, Node or NodeList';
                }
                if ("function" !== typeof this.method) {
                    throw "Method " + this.settings.method + " does not exist";
                }
                this._elements = elements;
                this.initEvents();
            }
            ScrollFire.prototype.initEvents = function () {
                this.scrolling = this.scrolling.bind(this);
                this.throttleScroll = this.throttleScroll.bind(this);
                window.addEventListener('load', this.scrolling, false);
                window.addEventListener("scroll", this.throttleScroll, false);
                window.addEventListener("resize", this.throttleScroll, false);
            };
            ScrollFire.prototype.onInview = function (element) {
                if (this.inview) {
                    this.inview.fire(element);
                }
            };
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
                get: function () {
                    if (!this._inview) {
                        this._inview = new pl.PLEvent();
                    }
                    return this._inview;
                },
                enumerable: true,
                configurable: true
            });
            ScrollFire.prototype.isFullyVisible = function (element) {
                var rect = element.getBoundingClientRect();
                var top = rect.top, bottom = rect.bottom;
                return ((top >= 0) && (bottom <= window.innerHeight));
            };
            ScrollFire.prototype.isInRange = function (element) {
                var rangeMin = window.innerHeight * (this.settings['rangeMin'] / 100);
                var rangeMax = window.innerHeight * (this.settings['rangeMax'] / 100);
                var rect = element.getBoundingClientRect();
                return rect.top <= rangeMax && rect.bottom >= rangeMin;
            };
            ScrollFire.prototype.isMarkerOver = function (element) {
                var percent = (this.settings['markerPercentage'] / 100);
                var rect = element.getBoundingClientRect();
                var top = rect.top, height = rect.height, marker = window.innerHeight * percent;
                return marker > top && (top + height) > marker;
            };
            ScrollFire.prototype.isPartiallyVisible = function (element) {
                var rect = element.getBoundingClientRect();
                var top = rect.top, bottom = rect.bottom, height = rect.height;
                return ((top + height >= 0) && (height + window.innerHeight >= bottom));
            };
            Object.defineProperty(ScrollFire.prototype, "elements", {
                get: function () {
                    return this._elements;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScrollFire.prototype, "reqAnimFrame", {
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
    (function (pl) {
        var Pagination = (function () {
            function Pagination(page, pageSize, fragments, settings) {
                this.loading = false;
                this._page = 1;
                this._pageSize = 10;
                this.page = page;
                this.pageSize = pageSize;
                this.fragments = fragments;
                this.settings = settings;
            }
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
            Pagination.prototype.next = function () {
                if (!this.loading) {
                    this.getItems();
                    this._page += 1;
                }
            };
            Pagination.prototype.handleStateChange = function (ev) {
                var _this = this;
                if (this._req.readyState === 4) {
                    if (this._req.status === 200) {
                        setTimeout(function () {
                            _this.loading = false;
                            _this.onStatusChange('OK');
                            _this.onDataArrived(_this.req.response);
                        }, 1000);
                    }
                }
            };
            Pagination.prototype.onStatusChange = function (data) {
                if (this.statusChange) {
                    this.statusChange.fire(data);
                }
            };
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
                get: function () {
                    return this._page;
                },
                set: function (value) {
                    this._page = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pagination.prototype, "pageSize", {
                get: function () {
                    return this._pageSize;
                },
                set: function (value) {
                    this._pageSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pagination.prototype, "fragments", {
                get: function () {
                    return this._fragments;
                },
                set: function (value) {
                    this._fragments = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pagination.prototype, "settings", {
                get: function () {
                    return this._settings;
                },
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
    (function (pl) {
        var Validator = (function () {
            function Validator() {
            }
            Validator.count = function (value, length) {
                var string = Validator.toString(value);
                if (string === "undefined"
                    || string === "null"
                    || string === "NaN"
                    || string === "Infinity")
                    return false;
                return string.length === length;
            };
            Validator.creditCardNumber = function (value) {
                if (!Validator.isString(value))
                    return false;
                return /^(\d{4}-?){3}\d{4}$/.test(value);
            };
            Validator.date = function (value) {
                if (!Validator.isString(value))
                    return false;
                if (!/^\d{1,2}\/|-\d{1,2}\/|-\d{4}$/.test(value))
                    return false;
                var parts = value.split(/\/|-/);
                var day = parseInt(parts[0], 10);
                var month = parseInt(parts[1], 10);
                var year = parseInt(parts[2], 10);
                if (year < 1000 || year > 3000 || month == 0 || month > 12)
                    return false;
                var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                    monthLength[1] = 29;
                return day > 0 && day <= monthLength[month - 1];
            };
            Validator.datetime = function (value) {
                throw 'Not implemented yet';
            };
            Validator.email = function (value) {
                if (!Validator.isString(value))
                    return false;
                return /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(value);
            };
            Validator.equality = function (value, confirm) {
                if (!Validator.isString(value) && !Validator.isString(confirm))
                    return false;
                return value === confirm;
            };
            Validator.hash = function (value) {
                if (!Validator.isString(value))
                    return false;
                return /^#\w*/.test(value);
            };
            Validator.notEmpty = function (value) {
                if (!Validator.isString(value))
                    return false;
                return !!value.length;
            };
            Validator.phone = function (value) {
                if (!Validator.isString(value))
                    return false;
                return value.replace(/[^\d]/g, '').length === 10;
            };
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
            Validator.url = function (value) {
                if (!Validator.isString(value))
                    return false;
                return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value);
            };
            Validator.isArray = function (value) {
                return value instanceof Array;
            };
            Validator.isBoolean = function (value) {
                return "boolean" === typeof value;
            };
            Validator.isNumber = function (value) {
                return "number" === typeof value;
            };
            Validator.isString = function (value) {
                return "string" === typeof value;
            };
            Validator.toFloat = function (value) {
                return parseFloat(value);
            };
            Validator.toInteger = function (value) {
                return parseInt(value);
            };
            Validator.toString = function (value) {
                return String(value);
            };
            return Validator;
        }());
        pl.Validator = Validator;
    })(pl || (pl = {}));
    (function (pl) {
        var ContactForm = (function () {
            function ContactForm(element, settings) {
                if (settings === void 0) {
                    settings = {};
                }
                this._letCloseWindow = true;
                this._req = new XMLHttpRequest();
                this._settings = {};
                if (!(element instanceof HTMLElement))
                    throw 'Template is not an HTMLFormElement';
                var defaults = {
                    url: 'fragment/mailer/send-mail-v1.php',
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
            ContactForm.prototype.beforeUnload = function () {
                if (!this._letCloseWindow) {
                    return 'Sending message';
                }
            };
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
            ContactForm.prototype.handleChange = function (ev) {
                if (this.isInvalidKey(ev.which || ev.keyCode || 0))
                    return;
                var input = ev.target;
                this.validate(input);
            };
            ContactForm.prototype.handleReadyStateChange = function (ev) {
                var DONE = 4;
                var OK = 200;
                if (this._req.readyState === DONE) {
                    if (this._req.status === OK) {
                        this.onSuccess(this._req.responseText, this._req.status, this._req.statusText);
                    }
                    else {
                        this.onError(this._req.status, this._req.statusText);
                    }
                }
            };
            ContactForm.prototype.initializeEvents = function () {
                var _this = this;
                this.beforeUnload = this.beforeUnload.bind(this);
                this.handleChange = this.handleChange.bind(this);
                this.submit = this.submit.bind(this);
                this.isCaptchaValid = this.isCaptchaValid.bind(this);
                this.handleReadyStateChange = this.handleReadyStateChange.bind(this);
                [].forEach.call(this.inputs, function (input) {
                    if (input.type === 'text' || input.tagName.toLowerCase() === 'textarea')
                        input.addEventListener('keyup', _this.handleChange, false);
                    input.addEventListener('change', _this.handleChange, false);
                });
                this.element.addEventListener('submit', this.submit, false);
                window.onbeforeunload = this.beforeUnload;
                this._req.onreadystatechange = this.handleReadyStateChange;
            };
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
            ContactForm.prototype.isTextValid = function (input) {
                if ("string" === typeof input.dataset['validate']) {
                    var rules = input.dataset['validate'].split('|'), name_1 = input.name, value = input.value, valid = false;
                    var _loop_1 = function (i) {
                        var rule = rules[i], args, array = [];
                        array.push(value);
                        try {
                            if (rules[i].indexOf(":") > -1) {
                                rule = rules[i].slice(0, rules[i].indexOf(":"));
                                args = rules[i].slice(rules[i].indexOf(":") + 1);
                                if (rule === "equality") {
                                    var filter = this_1.texts.filter(function (e) { return e.name === args; });
                                    array.push(filter[0].value);
                                }
                                else {
                                    array = array.concat(args.split(','));
                                }
                            }
                            valid = pl.Validator[rule].apply(this_1, array);
                        }
                        catch (e) {
                            "console" in window
                                && console.log("Unknown \"%s\" validation in \"%s\" input", rule, name_1);
                        }
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
            ContactForm.prototype.toggleInputError = function (input, isValid) {
                var type = input['type'];
                var clueElem = input['clue-elem'];
                var clueText = "";
                var isText = ("checkbox" !== type && "radio" !== type);
                var inputContainer = this.getInputContainer(input, isText);
                if (isValid) {
                    if (clueElem) {
                        clueElem.parentNode.removeChild(clueElem);
                        input['clue-elem'] = null;
                    }
                    pl.Classie.removeClass(input, 'invalid');
                    pl.Classie.addClass(input, 'dirty');
                    inputContainer && pl.Classie.removeClass(inputContainer, 'invalid');
                    inputContainer && pl.Classie.removeClass(inputContainer, 'dirty');
                }
                else {
                    if (!clueElem) {
                        clueText = input.dataset['clue'] || 'Inválido';
                        input.setAttribute('placeholder', clueText);
                        clueElem = document.createElement('span');
                        clueElem.innerText = clueText;
                        pl.Classie.addClass(clueElem, 'input-clue');
                    }
                    pl.Classie.addClass(input, 'invalid');
                    inputContainer && pl.Classie.addClass(inputContainer, 'invalid');
                }
            };
            ContactForm.prototype.validate = function (input) {
                var _this = this;
                var type = input.type;
                var name = input.name;
                var valid;
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
            ContactForm.prototype.isCaptchaValid = function (isValid) {
                this._captcha = (isValid) ? isValid : false;
                return this.isValid;
            };
            ContactForm.prototype.getFormValues = function () {
                var data = {}, name, type;
                [].forEach.call(this.inputs, function (input) {
                    name = input.name;
                    type = input.type;
                    if ("checkbox" === type && input.checked) {
                        if ("string" === typeof data[name]) {
                            data[name] += ", " + input.value;
                        }
                        else {
                            data[name] = input.value;
                        }
                    }
                    if ("radio" === type && input.checked) {
                        data[name] = input.value;
                    }
                    if ("text" === type || "hidden" === type || "textarea" === input.tagName.toLowerCase()) {
                        data[name] = input.value;
                    }
                });
                return data;
            };
            ContactForm.prototype.isFormValid = function () {
                var _this = this;
                var valid = true;
                var prop, input;
                for (prop in this.checkboxes) {
                    input = this.checkboxes[prop][0];
                    if (!this.validate(input)) {
                        valid = false;
                    }
                }
                for (prop in this.radios) {
                    input = this.radios[prop][0];
                    if (!this.validate(input)) {
                        valid = false;
                    }
                }
                this.texts.forEach(function (input) {
                    if (!_this.validate(input)) {
                        valid = false;
                    }
                });
                return valid;
            };
            ContactForm.prototype.reset = function () {
                this.element.reset();
            };
            ContactForm.prototype.submit = function (ev) {
                var residencial = document.querySelector('.outer-wrapper.residential-wrapper'), shelter = document.querySelector('.outer-wrapper.shelter');
                if (this.isFormValid()) {
                    if (this._settings['useAjax'] && this._settings['withCaptcha']) {
                        if (this._captcha) {
                            if (this._disabled)
                                return;
                            ev && ev.preventDefault();
                            var data = {
                                host: location.hostname,
                                data: this.getFormValues()
                            };
                            this.ajaxRequest(data);
                            this._captcha = 'false';
                        }
                        else {
                            ev && ev.preventDefault();
                            if (residencial) {
                                Page.Contact.trembleCaptcha();
                            }
                            else {
                                Page.shelterContact.trembleCaptcha();
                            }
                        }
                    }
                }
                else {
                    ev && ev.preventDefault();
                }
            };
            ContactForm.prototype.onError = function (status, statusText) {
                if (this._error) {
                    this._error.fire(status, statusText, this._form);
                }
                this.disabled = false;
                this._letCloseWindow = true;
            };
            ContactForm.prototype.onInputError = function (input) {
                if (this._inputError) {
                    this._inputError.fire(input);
                }
            };
            ContactForm.prototype.onSending = function () {
                if (this._sending) {
                    this._sending.fire(this._form);
                }
                this.disabled = true;
                this._letCloseWindow = false;
            };
            ContactForm.prototype.onSuccess = function (response, status, statusText) {
                if (this._success) {
                    this._success.fire(response, status, statusText, this._form);
                }
                this.disabled = false;
                this._letCloseWindow = true;
                var data = parseInt(response);
                if (!isNaN(data) && data === 1) {
                    this.reset();
                }
            };
            Object.defineProperty(ContactForm.prototype, "error", {
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
                get: function () {
                    return this._disabled;
                },
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
                get: function () {
                    return this._element;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ContactForm.prototype, "inputs", {
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
    (function (pl) {
        var Modal = (function () {
            function Modal(settings) {
                this._isOpen = false;
                var defaults = {
                    avoidClose: false,
                    closeWithOverlay: false,
                    effectName: ''
                };
                this._settings = pl.Util.extendsDefaults(defaults, settings || {});
                this._transitionend = Modal.transitionSelect();
                this.buildOut();
                this.initializeEvents();
            }
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
            Modal.prototype.buildOut = function () {
                this.modal.appendChild(this.content);
                if (!this._settings['avoidClose']) {
                    this.content.appendChild(this.closeButton);
                }
            };
            Modal.prototype.initializeEvents = function () {
                var _this = this;
                if (!this._settings['avoidClose']) {
                    var ESC_KEY_1 = 27;
                    document.addEventListener('keydown', function (ev) {
                        if (ev.keyCode == ESC_KEY_1)
                            _this.close();
                    }, false);
                    this.closeButton.addEventListener('click', function (ev) {
                        _this.close();
                    }, false);
                    if (this._settings['closeWithOverlay']) {
                        this.overlay.addEventListener('click', function (ev) {
                            _this.close();
                        }, false);
                    }
                }
                this.toggleTransitionend = this.toggleTransitionend.bind(this);
                this.content.addEventListener(this._transitionend, this.toggleTransitionend, false);
            };
            Modal.prototype.removeFromDom = function () {
                this.overlay.parentNode.removeChild(this.overlay);
                this.modal.parentNode.removeChild(this.modal);
            };
            Modal.prototype.toggleTransitionend = function (ev) {
                var _this = this;
                var functionToCall = this._isOpen ? this.onClosed : this.onOpened;
                this.content.removeEventListener(this._transitionend, this.toggleTransitionend);
                this._isOpen = !this._isOpen;
                functionToCall.call(this);
                setTimeout(function () {
                    _this.content.addEventListener(_this._transitionend, _this.toggleTransitionend, false);
                }, 50);
            };
            Modal.prototype.close = function () {
                if (!this._isOpen)
                    return;
                var body = document.body;
                this.onClosing();
                pl.Classie.removeClass(body, 'no-scroll');
                pl.Classie.removeClass(this.overlay, 'pl-modal-open');
                pl.Classie.removeClass(this.modal, 'pl-modal-open');
            };
            Modal.prototype.changeEffect = function (effectName) {
                this._settings['effectName'] = effectName;
                pl.Classie.reset(this.modal);
                pl.Classie.addClass(this.modal, 'pl-modal');
                pl.Classie.addClass(this.modal, this._settings['effectName']);
            };
            Modal.prototype.open = function (element) {
                if (this._isOpen)
                    return;
                var body = document.body;
                this.setContent(element);
                body.appendChild(this.overlay);
                body.appendChild(this.modal);
                pl.Classie.addClass(body, 'no-scroll');
                this.onOpening();
                window.getComputedStyle(this.overlay).backgroundColor;
                window.getComputedStyle(this.modal).opacity;
                window.getComputedStyle(this.content).opacity;
                pl.Classie.addClass(this.overlay, 'pl-modal-open');
                pl.Classie.addClass(this.modal, 'pl-modal-open');
            };
            Modal.prototype.setContent = function (element) {
                if (element === void 0) {
                    element = "";
                }
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
            Modal.prototype.onClosing = function () {
                if (this._closing) {
                    this._closing.fire();
                }
            };
            Modal.prototype.onOpening = function () {
                if (this._opening) {
                    this._opening.fire();
                }
            };
            Modal.prototype.onClosed = function () {
                if (this._closed) {
                    this._closed.fire();
                }
                this.removeFromDom();
            };
            Modal.prototype.onOpened = function () {
                if (this._opened) {
                    this._opened.fire();
                }
            };
            Object.defineProperty(Modal.prototype, "closing", {
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
    exports.default = pl;
});
define("scripts", ["require", "exports", "ContactForm", "util/Classie", "utilCustom.carrousel", "pl"], function (require, exports, ContactForm_1, Classie_2, utilCustom_carrousel_1, pl_1) {
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
        var isMobile = function () {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor || window['opera']);
            return check;
        };
        var formatDate = function (datetime) {
            var formated = '';
            try {
                var months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
                var parts = datetime.split(' ');
                var date = parts[0].split('-');
                formated = date[2] + " " + months[Number(date[1]) - 1] + " " + date[0] + " - " + parts[1];
            }
            catch (e) {
                formated = datetime;
            }
            return formated;
        };
        var Page = {
            init: function () {
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
                    thumbsToDisplay: 4,
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
            modal: function () {
                var button = q('.big-btn', document);
                if (button) {
                    var initializeForm_1 = function (wrapper) {
                        var form = q('form', wrapper);
                        initForm(form);
                    };
                    button.addEventListener('click', function (e) {
                        e.preventDefault();
                        var formWrapper = q('.cv-form-wrapper');
                        var clone = formWrapper.cloneNode(true);
                        var modal = new pl_1.default.Modal({ effectName: 'pl-effect-2' });
                        var elems = qa('*', clone);
                        Classie_2.default.addClass(modal.modal, 'cv-modal');
                        [].forEach.call(elems, function (el) {
                            el.addEventListener(pl_1.default.Modal.transitionSelect(), function (e) {
                                e.stopPropagation();
                            });
                        });
                        modal.opened.add(function () { return initializeForm_1(clone); });
                        modal.open(clone);
                    });
                }
            },
            Blog: {
                el: null,
                grid: null,
                pagination: null,
                init: function () {
                    this.el = q('.blog-posts', document);
                    if (this.el) {
                        this.grid = q('.grid', this.el);
                        var numPosts = (Page.isMobileSize()) ? 3 : 6;
                        this.pagination = new pl_1.default.Pagination(1, numPosts, ["image", "intro", "main-image", "modal"], ["creation-date"]);
                        this.pagination.next();
                        this.pagination.statusChange.add(this.handleStatusChanged.bind(this));
                        this.pagination.dataArrived.add(this.handleDataArrived.bind(this));
                        this.setupBlogPosts();
                        window.addEventListener('scroll', this.reachBottom.bind(this), false);
                        window.addEventListener('resize', this.reachBottom.bind(this), false);
                    }
                },
                createPost: function (post, index) {
                    var gridItem = document.createElement('a');
                    var image = "";
                    var abstract = "intro" in post.fragments ? post.fragments['intro'].value : '';
                    var title = post.title || '';
                    var name = post.key;
                    var created = formatDate(post.created);
                    image = post.fragments['image'].value;
                    pl_1.default.Classie.addClass(gridItem, 'grid-item');
                    gridItem.href = post.key;
                    gridItem.innerHTML = "\n                    <div class=\"number\" hidden>" + index + "</div>\n                    <div class=\"name\" hidden>" + name + "</div>\n                    <div class=\"inner\" data-name=\"" + name + "\">\n                        <div class=\"inner-image\">" + image + "</div>\n                        <div class=\"title-blog color-highlight-color\">" + title + "</div>\n                        <div class=\"date-blog\">" + created + "</div>\n                        <div class=\"intro\">" + abstract + "</div>\n                        <!--<div class=\"complete-article\">Leer</div>-->\n                    </div>\n                ";
                    return gridItem;
                },
                handleDataArrived: function (data) {
                    var response = JSON.parse(data);
                    var delay_blog = 1000;
                    var delay_bl = 100000;
                    var elems = [];
                    if (response.records.length) {
                        var records = response.records;
                        for (var i = 0; i < records.length; i++) {
                            var elem = this.createPost(records[i], i);
                            var $img = $(elem).find('img');
                            var $inner = $(elem).find('.inner');
                            this.grid.appendChild(elem);
                            elems.push(elem);
                        }
                        var images = elems.map(function (el) { return q('img', el); });
                        Page.waitForImages($(images), function () {
                            var gridItems = qa('.grid-item .inner', document);
                            [].forEach.call(gridItems, function (gridItem) {
                                pl_1.default.Classie.addClass(gridItem, 'displayed');
                            });
                            var key = location.hash.replace(/[#|\/]/g, "");
                            var note = q('[href*="' + key + '"]', document);
                            note && (note.click());
                            window.addEventListener('load', function (ev) {
                                if (location.hash) {
                                    var key_1 = location.hash.replace(/[#|\/]/g, "");
                                    var note_1 = q('[href*="' + key_1 + '"]', document);
                                    note_1.click();
                                }
                            });
                        });
                    }
                },
                handleStatusChanged: function (status) {
                    if ("LOADING" === status) {
                        pl_1.default.Classie.addClass(this.grid, 'loading');
                    }
                    else {
                        pl_1.default.Classie.removeClass(this.grid, 'loading');
                    }
                },
                reachBottom: function (ev) {
                    var scrollHeight = $(document).height();
                    var scrollPosition = $(window).height() + $(window).scrollTop();
                    if (!Page.isMobileSize()) {
                        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                            this.pagination.next();
                        }
                    }
                    else {
                        var _this_1 = this;
                        var $btn_load = $('.load-more');
                        $btn_load.on('click', function () {
                            _this_1.pagination.next();
                        });
                    }
                },
                setupBlogPosts: function () {
                    var _this_1 = this;
                    var posts = qa('.grid-item ', document);
                    if (posts) {
                        for (var i = 0; i < posts.length; i++) {
                            (function (post) {
                                post.addEventListener('click', function (ev) {
                                    ev.preventDefault();
                                    var href = post.href;
                                    _this_1.showPost(href);
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
        var cover = q('.cover');
        if (cover) {
            var videoPath = '/fragment/themes/cyborgconsulting/videos';
            if (isMobile()) {
                var image = document.createElement('img');
                image.src = videoPath + "/cover-home.gif";
                image.alt = "Video intro";
                cover.appendChild(image);
            }
            else {
                var video = document.createElement('video');
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.innerHTML = "<source src=\"" + videoPath + "/cover-home.mp4\" type=\"video/mp4\">";
                cover.appendChild(video);
            }
        }
        function initForm(formEl) {
            function showElement(element, show) {
                show
                    ? Classie_2.default.addClass(element, 'displayed')
                    : Classie_2.default.removeClass(element, 'displayed');
            }
            function handleError(status, statusText) {
                console.log('There was an error. \nStatus: %s\nStatusText: %s', status, statusText);
                message.innerHTML = "<div class=\"text error\">No pudimos enviar tu mensaje, por favor intentalo m\u00E1s tarde.</div>";
                setTimeout(function () {
                    showElement(wrapper, true);
                    showElement(message, false);
                    message.innerText = "";
                }, 3000);
            }
            function handleSending() {
                console.log('Sending...');
                showElement(wrapper, false);
                showElement(message, true);
                message.innerHTML = "<div class=\"text sending\">Enviando mensaje...</div>";
            }
            function handleSuccess(response, status, statusText) {
                console.log('The message has been sent successfuly. \nStatus: %s\nStatusText: %s', status, statusText);
                console.log(response);
                if (parseInt(response) === 1) {
                    message.innerHTML = "<div class=\"text sent\">\u00A1Mensaje enviado!</div>";
                    setTimeout(function () {
                        showElement(wrapper, true);
                        showElement(message, false);
                        message.innerHTML = "";
                    }, 3000);
                }
                else {
                    handleError(status, statusText);
                }
            }
            var message = q('.message', formEl);
            var wrapper = q('.wrapper', formEl);
            var form = new ContactForm_1.default(formEl, {
                url: '/fragment/themes/cyborgconsulting/send-mail.php',
                useAjax: true,
                inputSelectors: [
                    "input[type=text]",
                    "input[type=email]",
                    "input[type=file]",
                    "select",
                    "textarea"
                ]
            });
            form.error.add(handleError);
            form.sending.add(handleSending);
            form.success.add(handleSuccess);
        }
        var formElement = q('.contact-form');
        if (formElement) {
            initForm(formElement);
        }
        var bookAd = q('.book-ad');
        var closeBtn = q('.book-ad .close-button');
        if (bookAd && closeBtn) {
            closeBtn.addEventListener('click', function () {
                Classie_2.default.removeClass(bookAd, 'displayed');
            });
            window.addEventListener('load', function () {
                Classie_2.default.addClass(bookAd, 'displayed');
            });
        }
        var usJoin = q('.us-join');
        if (usJoin) {
            var cvBtn = q('.button', usJoin);
            var initializeForm_2 = function (wrapper) {
                var form = q('form', wrapper);
                var uploadBtn = q('.cv-button', wrapper);
                var label = q('.cv-label', wrapper);
                var file = q('input[type="file"]', wrapper);
                initForm(form);
                uploadBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    file.click();
                });
                file.addEventListener('change', function (e) {
                    var files = e.target.files;
                    if (files && files.length > 0) {
                        label.innerText = e.target.files[0].name;
                    }
                });
            };
            cvBtn.addEventListener('click', function (e) {
                e.preventDefault();
                var formWrapper = q('.cv-form-wrapper', usJoin);
                var clone = formWrapper.cloneNode(true);
                var modal = new pl_1.default.Modal({ effectName: 'pl-effect-2' });
                var elems = qa('*', clone);
                Classie_2.default.addClass(modal.modal, 'cv-modal');
                [].forEach.call(elems, function (el) {
                    el.addEventListener(pl_1.default.Modal.transitionSelect(), function (e) {
                        e.stopPropagation();
                    });
                });
                modal.opened.add(function () { return initializeForm_2(clone); });
                modal.open(clone);
            });
        }
        var blogPost = q('.blog-post');
        if (blogPost) {
            var date = q('.post-date span', blogPost);
            date.innerText = formatDate(date.innerText);
        }
    })();
});
