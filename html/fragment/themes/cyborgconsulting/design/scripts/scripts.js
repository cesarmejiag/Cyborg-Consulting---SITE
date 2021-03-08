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
                if ("text" === type || "email" === type || "hidden" === type || "textarea" === input.tagName.toLowerCase()) {
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
                        if ("text" === input.type || "email" === input.type || "hidden" === input.type || "textarea" === input.tagName.toLowerCase()) {
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
define("scripts", ["require", "exports", "ContactForm", "util/Classie", "utilCustom.carrousel"], function (require, exports, ContactForm_1, Classie_2, utilCustom_carrousel_1) {
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
                    autoPlay: true,
                    easing: 'linear',
                    delay: 4990,
                    infiniteScroll: true,
                    thumbsToDisplay: 3,
                    scaleImages: true,
                    scrollSpeed: 5000,
                }, '');
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
        var formElement = q('.contact-form');
        var message = q('.message');
        var wrapper = q('.wrapper');
        var form = new ContactForm_1.default(formElement, {
            url: '/fragment/themes/cyborgconsulting/send-mail.php',
            useAjax: true,
            inputSelectors: [
                "input[type=text]",
                "input[type=email]",
                "select",
                "textarea"
            ]
        });
        form.error.add(handleError);
        form.sending.add(handleSending);
        form.success.add(handleSuccess);
    })();
});
