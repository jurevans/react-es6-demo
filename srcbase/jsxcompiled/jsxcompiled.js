"use strict";
/*! rc_header_v1.js */
var rc = {};

"use strict";
/*! dc_header_v1.js */
var dc = {};

"use strict";
/*! home/home.jsx */
rc.homePageComponent = React.createClass({
    displayName: "homePageComponent",
    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        return React.createElement("div", { id: "homepage" });
    }
});
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
        return React.createElement('div', { id: 'dashboard' });
    }
});
'use strict';
/*! login/login.jsx */
rc.loginPageComponent = React.createClass({
    displayName: 'loginPageComponent',
    getInitialState: function getInitialState() {
        return {
            valid: true
        };
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var emailAddress = SiteConfig.loginUsername;
        var password = SiteConfig.loginPassword;
        var isEmailValid = FormValidation.validate(this.refs.email.state.value, emailAddress);
        var isPasswordValid = FormValidation.validate(this.refs.password.state.value, password);
        var isFormValid = isEmailValid && isPasswordValid;
        grandCentral.trigger('to_inputField_email', { valid: isEmailValid });
        grandCentral.trigger('to_inputField_password', { valid: isPasswordValid });
        grandCentral.trigger('to_button', { enabled: isFormValid });
        grandCentral.trigger('to_errorMessage', { show: !isFormValid });
        if (isFormValid) {
            this.postForm();
        }
    },
    postForm: function postForm() {
        var data = {
            email: this.refs.email.state.value,
            password: this.refs.password.value
        };
        window.location.href = '/#/dashboard';
    },
    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        return React.createElement(
            'div',
            { id: 'loginpage', className: 'container' },
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit,
                    name: 'loginform', action: '#', method: 'post' },
                React.createElement(
                    'fieldset',
                    { name: 'login' },
                    React.createElement(
                        'legend',
                        null,
                        React.createElement(
                            'span',
                            null,
                            'Sign in'
                        )
                    ),
                    React.createElement(rc.inputFieldComponent, {
                        ref: 'email',
                        type: 'email',
                        name: 'email',
                        labelText: 'Email address:',
                        errorClass: 'error'
                    }),
                    React.createElement(rc.inputFieldComponent, {
                        ref: 'password',
                        name: 'password',
                        type: 'password',
                        labelText: 'Password:',
                        errorClass: 'error'
                    }),
                    React.createElement(rc.inlineMessageComponent, {
                        ref: 'forgotComponent',
                        linkText: 'Forgot credentials?',
                        copyText: 'To get the current username and password, contact your sales rep.'
                    }),
                    React.createElement(rc.errorMessageComponent, {
                        message: 'Invalid username or password.',
                        className: 'error-message'
                    }),
                    React.createElement(rc.buttonComponent, {
                        buttonName: 'submit',
                        buttonText: 'Sign in',
                        enabled: this.state.valid
                    })
                )
            )
        );
    }
});
'use strict';
/*! forms/button.jsx */
rc.buttonComponent = React.createClass({
    displayName: 'buttonComponent',
    getInitialState: function getInitialState() {
        return {
            enabled: true
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;
        grandCentral.on('to_button', function (data) {
            self.setState({
                enabled: data.enabled
            });
        });
    },
    handleClick: function handleClick(name, e) {
        e.preventDefault();
    },
    render: function render() {
        return React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                {
                    name: this.props.buttonName,
                    disabled: !this.state.enabled },
                this.props.buttonText
            )
        );
    }
});
'use strict';
/*! forms/errormessage.jsx */
rc.errorMessageComponent = React.createClass({
    displayName: 'errorMessageComponent',
    getInitialState: function getInitialState() {
        return {
            show: false
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;
        grandCentral.on('to_errorMessage', function (data) {
            self.setState({
                show: data.show
            });
        });
    },
    handleClick: function handleClick(name, e) {
        e.preventDefault();
    },
    render: function render() {
        var className = !this.state.show ? 'error-hide' : 'error-show';
        return React.createElement(
            'p',
            { className: className },
            this.props.message
        );
    }
});
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
            { href: "#", onClick: this.handleClick },
            this.props.linkText
        ) : React.createElement(
            "div",
            null,
            this.props.copyText
        );
        return React.createElement(
            "p",
            { className: "forgot-credentials" },
            partial
        );
    }
});
'use strict';
/*! forms/inputfield.jsx */
rc.inputFieldComponent = React.createClass({
    displayName: 'inputFieldComponent',
    getInitialState: function getInitialState() {
        return {
            value: '',
            valid: true
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;
        grandCentral.on('to_inputField_' + this.props.name, function (data) {
            self.setState({
                value: self.state.value,
                valid: data.valid
            });
        });
    },
    handleChange: function handleChange(name, e) {
        var value = e.target.value;
        this.setState({
            value: value,
            valid: typeof this.props.validate !== 'undefined' ? this.props.validate.call(this, value) : true
        });
        grandCentral.trigger('to_button', { enabled: true });
        grandCentral.trigger('to_errorMessage', { show: false });
    },
    render: function render() {
        var errorClass = this.state.valid ? null : this.props.errorClass;
        return React.createElement(
            'p',
            { className: errorClass },
            React.createElement(
                'label',
                { htmlFor: this.props.name },
                this.props.labelText
            ),
            React.createElement('input', {
                name: this.props.name,
                type: this.props.type,
                required: this.props.required,
                value: this.state.value,
                maxLength: this.props.maxLength,
                onChange: this.handleChange.bind(null, this) })
        );
    }
});
"use strict";
/*! header/header.jsx */
rc.header = React.createClass({
    displayName: "header",
    render: function render() {
        return React.createElement(
            "h2",
            null,
            "Backbone Multipage Boilerplate"
        );
    }
});
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