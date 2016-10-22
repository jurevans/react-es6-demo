"use strict";
/*! rc_header_v1.js */
var rc = {};

"use strict";
/*! dc_header_v1.js */
var dc = {};

'use strict';
/*! dashboard/dashboard.jsx */
rc.dashboardPageComponent = React.createClass({
    displayName: 'dashboardPageComponent',
    getInitialState: function getInitialState() {
        if (!app.stores.dashboard) {
            app.stores.dashboard = {
                mycourses: {
                    courses: [{
                        course_id: 'Psych101',
                        title: 'Psychology Product Name',
                        book: 'Psychology, 10th Edition, Myers',
                        product: 'LearningCurve',
                        cover: 'https://d67woptvev43m.cloudfront.net/Images/1709887/myers11einmodules_cover.jpg'
                    }, {
                        course_id: 'Econ101',
                        title: 'Economics Product Name',
                        book: 'Book title goes here',
                        product: 'FlipIt + Sapling',
                        cover: ''
                    }, {
                        course_id: 'English101',
                        title: 'English Product Name',
                        book: 'Book title goes here',
                        product: 'Writing Tools + Diagnostics',
                        cover: ''
                    }, {
                        course_id: 'Chem101',
                        title: 'Chemistry Product Name',
                        book: 'Book title goes here',
                        product: 'Diagnostics + Sapling',
                        cover: ''
                    }]
                }
            };
        }
        return app.stores.dashboard;
    },
    render: function render() {
        var mycourses = [];
        _.each(app.stores.dashboard.mycourses.courses, function (course) {
            mycourses.push(React.createElement(rc.dashboardCourseComponent, { ref: course.course_id, key: course.course_id, course: course }));
        });
        return React.createElement(
            'div',
            { id: 'dashboard', className: 'container' },
            React.createElement(
                'header',
                { className: 'dashHeader' },
                'My courses'
            ),
            mycourses
        );
    }
});
'use strict';
/*! home/home.jsx */
rc.homePageComponent = React.createClass({
  displayName: 'homePageComponent',
  componentWillMount: function componentWillMount() {
    if (app.status.loggedin == 'true') {
      window.location.href = '/#/dashboard';
    } else {
      window.location.href = '/#/login';
    }
  },
  render: function render() {
    console.log(this.constructor.displayName + ' render()');
    return React.createElement('div', { id: 'homepage' });
  }
});
'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*! login/login.jsx */
rc.loginPageComponent = function (_React$Component) {
    _inherits(LoginPageComponent, _React$Component);
    function LoginPageComponent(props) {
        _classCallCheck(this, LoginPageComponent);
        var _this = _possibleConstructorReturn(this, (LoginPageComponent.__proto__ || Object.getPrototypeOf(LoginPageComponent)).call(this, props));
        _this.state = {
            valid: true
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    _createClass(LoginPageComponent, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var emailAddress = SiteConfig.loginUsername;
            var password = SiteConfig.loginPassword;
            var isEmailValid = FormValidation.validateEmail(this.refs.email.state.value, emailAddress);
            var isPasswordValid = FormValidation.validatePassword(this.refs.password.state.value, function (value) {
                return 'test' === value;
            });
            var isFormValid = isEmailValid && isPasswordValid;
            grandCentral.trigger('to_inputField_email', { valid: isEmailValid });
            grandCentral.trigger('to_inputField_password', { valid: isPasswordValid });
            grandCentral.trigger('to_button', { enabled: isFormValid });
            grandCentral.trigger('to_errorMessage', { show: !isFormValid });
            if (isFormValid) {
                this.postForm();
            }
        }
    }, {
        key: 'postForm',
        value: function postForm() {
            var data = {
                email: this.refs.email.state.value,
                password: this.refs.password.state.value
            };
            io_lib.verifyLogin(data, function (response) {
                console.log(response);
                window.location.href = '/#/dashboard';
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.constructor.displayName + ' render()');
            return React.createElement(
                'div',
                { id: 'loginpage', className: 'container', 'aria-label': 'Sign In' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit,
                        className: 'form', name: 'loginform', action: '#', method: 'post' },
                    React.createElement(
                        'fieldset',
                        { name: 'login', className: 'formfieldset' },
                        React.createElement(
                            'legend',
                            { className: 'formlegend' },
                            React.createElement(
                                'span',
                                { className: 'formlegendspan' },
                                'Sign in'
                            )
                        ),
                        React.createElement(rc.inputFieldComponent, {
                            ref: 'email',
                            id: 'email',
                            name: 'email',
                            type: 'email',
                            labelText: 'Email address:',
                            errorClass: 'forminputerror',
                            labelClass: 'formlabel',
                            inputClass: 'forminput emailaddress',
                            maxLength: '100',
                            required: ''
                        }),
                        React.createElement(rc.inputFieldComponent, {
                            ref: 'password',
                            id: 'password',
                            name: 'password',
                            type: 'password',
                            labelText: 'Password:',
                            errorClass: 'forminputerror',
                            labelClass: 'formlabel',
                            inputClass: 'forminput password',
                            maxLength: '50',
                            required: ''
                        }),
                        React.createElement(rc.inlineMessageComponent, {
                            ref: 'forgotComponent',
                            linkText: 'Forgot credentials?',
                            className: 'forgot',
                            linkClassName: 'forgotlink',
                            copyClassName: 'forgotcopy',
                            copyText: 'To get the current username and password, contact your sales rep.'
                        }),
                        React.createElement(rc.errorMessageComponent, {
                            message: 'Invalid username or password.',
                            className: 'errormessage',
                            errorShowClassName: 'errorshow',
                            errorHideClassName: 'errorhide'
                        }),
                        React.createElement(rc.buttonComponent, {
                            buttonName: 'submit',
                            buttonText: 'Sign in',
                            className: 'formbutton',
                            enabled: this.state.valid,
                            ref: 'submit'
                        })
                    )
                )
            );
        }
    }]);
    return LoginPageComponent;
}(React.Component);
'use strict';
/*! dashboard/childcomponents/dashboardCourse.jsx */
rc.dashboardCourseComponent = React.createClass({
    displayName: 'dashboardCourseComponent',
    getDefaultProps: function getDefaultProps() {
        return {
            course: {
                course_id: '',
                title: '',
                book: '',
                product: '',
                cover: SiteConfig.assetsDirectory + 'images/site/bookcover.png'
            }
        };
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'course flex row' },
            React.createElement(
                'div',
                { className: 'bookcover col-xs-4 col-sm-2 col-md-2' },
                React.createElement('img', { src: this.props.course.cover ? this.props.course.cover : SiteConfig.assetsDirectory + 'images/site/bookcover.png' })
            ),
            React.createElement(
                'div',
                { className: 'courseinfo col-xs-8 col-sm-7 col-md-7' },
                React.createElement(
                    'span',
                    { className: 'coursetitle' },
                    this.props.course.title
                ),
                React.createElement('br', null),
                React.createElement(
                    'span',
                    { className: 'coursebook' },
                    this.props.course.book
                ),
                React.createElement('br', null),
                React.createElement(
                    'span',
                    { className: 'courseproduct' },
                    this.props.course.product
                )
            ),
            React.createElement(
                'div',
                { className: 'coursebutton col-xs-12 col-sm-3 col-md-3' },
                React.createElement(
                    'button',
                    { className: 'enterproduct' },
                    'Enter product'
                )
            )
        );
    }
});
"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*! login/childComponents/inlinemessage.jsx */
rc.inlineMessageComponent = function (_React$Component) {
    _inherits(inlineMessageComponent, _React$Component);
    function inlineMessageComponent(props) {
        _classCallCheck(this, inlineMessageComponent);
        var _this = _possibleConstructorReturn(this, (inlineMessageComponent.__proto__ || Object.getPrototypeOf(inlineMessageComponent)).call(this, props));
        _this.state = {
            isClicked: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    _createClass(inlineMessageComponent, [{
        key: "handleClick",
        value: function handleClick(e) {
            e.preventDefault();
            this.setState({
                isClicked: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            var partial = !this.state.isClicked ? React.createElement(
                "a",
                { href: "#", className: this.props.linkClassName, onClick: this.handleClick },
                this.props.linkText
            ) : React.createElement(
                "div",
                { className: this.props.copyClassName },
                this.props.copyText
            );
            return React.createElement(
                "p",
                { className: this.props.className },
                partial
            );
        }
    }]);
    return inlineMessageComponent;
}(React.Component);
'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*! forms/button.jsx */
rc.buttonComponent = function (_React$Component) {
    _inherits(ButtonComponent, _React$Component);
    function ButtonComponent(props) {
        _classCallCheck(this, ButtonComponent);
        var _this = _possibleConstructorReturn(this, (ButtonComponent.__proto__ || Object.getPrototypeOf(ButtonComponent)).call(this, props));
        _this.state = {
            enabled: true
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    _createClass(ButtonComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            grandCentral.on('to_button', function (data) {
                self.setState({
                    enabled: data.enabled
                });
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(name, e) {
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                React.createElement(
                    'button',
                    {
                        name: this.props.buttonName,
                        className: this.props.className,
                        disabled: !this.state.enabled },
                    this.props.buttonText
                )
            );
        }
    }]);
    return ButtonComponent;
}(React.Component);
'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*! forms/errormessage.jsx */
rc.errorMessageComponent = function (_React$Component) {
    _inherits(ErrorMessage, _React$Component);
    function ErrorMessage(props) {
        _classCallCheck(this, ErrorMessage);
        var _this = _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).call(this, props));
        _this.state = {
            show: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    _createClass(ErrorMessage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            grandCentral.on('to_errorMessage', function (data) {
                self.setState({
                    show: data.show
                });
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(name, e) {
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var className = !this.state.show ? this.props.errorHideClassName : this.props.errorShowClassName;
            return React.createElement(
                'p',
                { className: className },
                this.props.message
            );
        }
    }]);
    return ErrorMessage;
}(React.Component);
"use strict";
/*! forms/inlinemessage.jsx */
rc.inlineMessageComponent = React.createClass({
    displayName: "inlineMessageComponent",
    getInitialState: function getInitialState() {
        return {
            isClicked: false
        };
    },
    handleClick: function handleClick(e) {
        e.preventDefault();
        this.setState({
            isClicked: true
        });
    },
    render: function render() {
        var partial = !this.state.isClicked ? React.createElement(
            "a",
            { href: "#", className: this.props.linkClassName, onClick: this.handleClick },
            this.props.linkText
        ) : React.createElement(
            "div",
            { className: this.props.copyClassName },
            this.props.copyText
        );
        return React.createElement(
            "p",
            { className: this.props.className },
            partial
        );
    }
});
'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*! forms/inputfield.jsx */
rc.inputFieldComponent = function (_React$Component) {
    _inherits(InputFieldComponent, _React$Component);
    function InputFieldComponent(props) {
        _classCallCheck(this, InputFieldComponent);
        var _this = _possibleConstructorReturn(this, (InputFieldComponent.__proto__ || Object.getPrototypeOf(InputFieldComponent)).call(this, props));
        _this.state = {
            value: '',
            valid: true
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    _createClass(InputFieldComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            grandCentral.on('to_inputField_' + this.props.name, function (data) {
                self.setState({
                    value: self.state.value,
                    valid: data.valid
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(name, e) {
            var value = e.target.value;
            this.setState({
                value: value,
                valid: typeof this.props.validate !== 'undefined' ? this.props.validate.call(this, value) : true
            });
            grandCentral.trigger('to_button', { enabled: true });
            grandCentral.trigger('to_errorMessage', { show: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var errorClass = this.state.valid ? null : this.props.errorClass;
            return React.createElement(
                'div',
                { className: errorClass },
                React.createElement(
                    'label',
                    { htmlFor: this.props.name, className: this.props.labelClass },
                    this.props.labelText
                ),
                React.createElement('input', {
                    id: this.props.name,
                    name: this.props.name,
                    className: this.props.inputClass,
                    type: this.props.type,
                    required: this.props.required,
                    value: this.state.value,
                    maxLength: this.props.maxLength,
                    onChange: this.handleChange.bind(null, this) })
            );
        }
    }]);
    return InputFieldComponent;
}(React.Component);
'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*! header/header.jsx */
rc.header = function (_React$Component) {
	_inherits(Header, _React$Component);
	function Header(props) {
		_classCallCheck(this, Header);
		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
		_this.state = {
			loggedin: app.status.loggedin
		};
		return _this;
	}
	_createClass(Header, [{
		key: 'signOut',
		value: function signOut(e) {
			e.preventDefault();
			io_lib.logOut(function () {
				window.location.href = '/#/login';
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			grandCentral.off('routeChange').on('routeChange', function () {
				self.setState({ loggedin: app.status.loggedin });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'header',
				{ id: 'siteheader' },
				React.createElement(
					'div',
					{ className: 'flex container' },
					React.createElement(
						'a',
						{ className: 'logo', href: '#' },
						React.createElement('img', { src: SiteConfig.assetsDirectory + 'images/site/logo.jpg' })
					),
					React.createElement(
						'div',
						{ id: 'accountSection', className: 'account ' + this.state.loggedin },
						React.createElement(
							'span',
							{ className: 'username' },
							'Demo User'
						),
						React.createElement('span', { className: 'itemDivider' }),
						React.createElement('br', null),
						React.createElement(
							'span',
							{ className: 'logout', onClick: this.signOut },
							'Sign out'
						)
					)
				)
			);
		}
	}]);
	return Header;
}(React.Component);
'use strict';
/*! loader/loader.jsx */
rc.loader = React.createClass({
    displayName: 'loader',
    stack: [],
    getInitialState: function getInitialState() {
        return {
            show: false
        };
    },
    componentDidMount: function componentDidMount(currentPage) {
        var self = this;
        grandCentral.off('loaderStart').on('loaderStart', function (uniqueString) {
            if ($.inArray(uniqueString, self.stack) == -1) {
                console.log('loaderStart(' + uniqueString + ')');
                self.stack.push(uniqueString);
                self.setState({ show: true });
            }
        });
        grandCentral.off('loaderEnd').on('loaderEnd', function (uniqueString) {
            var i = $.inArray(uniqueString, self.stack);
            if (i > -1) {
                self.stack.splice(i, 1);
                console.log('loaderEnd(' + uniqueString + ')');
            }
            if (self.stack.length === 0) {
                self.setState({ show: false });
            }
        });
    },
    reset: function reset() {
        this.stack = [];
        this.setState({ show: false });
    },
    render: function render() {
        var classes = this.state.show ? 'active' : '';
        return React.createElement(
            'div',
            { id: 'loader', className: classes },
            React.createElement(
                'div',
                { className: 'loadingmessage' },
                React.createElement('img', { className: 'spinner', src: SiteConfig.assetsDirectory + 'images/ui/spinner.gif' })
            )
        );
    }
});
'use strict';
/*! mainmodal/mainmodal.jsx */
rc.mainmodal = React.createClass({
    displayName: 'mainmodal',
    getInitialState: function getInitialState() {
        return {
            show: false,
            whichTemplate: ''
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;
        grandCentral.off('modalHide').on('modalHide', function () {
            self.setState({ show: false, whichTemplate: '' });
        });
        grandCentral.off('modalShow').on('modalShow', function (payLoad) {
            self.setState({ show: true, whichTemplate: payLoad });
        });
    },
    handleModalClose: function handleModalClose() {
        grandCentral.trigger('modalHide');
        if (app.status.currentFragString) {
            if (app.status.currentFragString.indexOf('modalShow-') > -1) {
                var newURL = '#/' + app.status.currentRoute;
                var stringToRemove = 'modalShow-' + this.state.whichTemplate;
                console.log('removing ' + stringToRemove + 'from the URL');
                newURL = newURL.replace('/' + stringToRemove, '');
                newURL = newURL.replace(stringToRemove + '/', '');
                newURL = newURL.replace(stringToRemove, '');
                app.navigate(newURL);
            }
        }
    },
    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        var self = this;
        var classes = this.state.show ? 'absolutewrapper active' : 'absolutewrapper ';
        var outputArray = [];
        switch (this.state.whichTemplate) {
            case 'attackontitanModal':
                outputArray.push(React.createElement(rc.attackontitanModal, null));break;
            case 'deathnoteModal':
                outputArray.push(React.createElement(rc.deathnoteModal, null));break;
        }
        return React.createElement(
            'div',
            { className: classes },
            React.createElement(
                'div',
                { className: 'greybacking' },
                React.createElement(
                    'div',
                    { className: 'modalwrapper' },
                    React.createElement(
                        'div',
                        { className: 'modalCloseButtonWrapper' },
                        React.createElement(
                            'div',
                            { className: 'modalCloseButton', onClick: self.handleModalClose },
                            React.createElement('img', { src: SiteConfig.assetsDirectory + 'images/ui/modal-close-btn.png' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modalContentsWrapper' },
                        outputArray
                    )
                )
            )
        );
    }
});
'use strict';
/*! nav/nav.jsx */
rc.nav = React.createClass({
	displayName: 'nav',
	getInitialState: function getInitialState() {
		return {
			currentPage: ''
		};
	},
	componentDidMount: function componentDidMount() {
		var self = this;
		grandCentral.off('pagechange').on('pagechange', function (data) {
			self.setState({
				currentPage: data.currentPage
			});
		});
	},
	getClassNameWithActive: function getClassNameWithActive(arg) {
		var className = 'navitem';
		if (arg == this.state.currentPage) {
			className = className + ' active';
		}
		return className;
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'a',
				{ className: this.getClassNameWithActive('home'), href: '#' },
				'Home'
			)
		);
	}
});