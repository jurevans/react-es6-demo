/* Log in to product page */

<<<<<<< HEAD
rc.loginPageComponent = React.createClass({
    getInitialState: function() {
        // Valid until proven false
        return {
            valid : true
        };
    },

    handleSubmit: function(e) {
        e.preventDefault();

        // For NSM testing
        var emailAddress = SiteConfig.loginUsername;
        var password = SiteConfig.loginPassword;

        // Use generic validator since we are only matching a specific email, not a pattern
        var isEmailValid = FormValidation.validate(this.refs.email.state.value, emailAddress);
        // var isEmailValid = FormValidation.validateEmail(this.refs.email.state.value, emailAddress);

        // Use generic validator since we are only matching a specific email, not a pattern
        var isPasswordValid = FormValidation.validate(this.refs.password.state.value, password);
        /*
        var isPasswordValid = FormValidation.validatePassword(this.refs.password.state.value, function(value){
            return password === value;
        });
        */

        var isFormValid = isEmailValid && isPasswordValid;
=======
rc.loginPageComponent = class LoginPageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valid : true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        // For NSM testing
        let emailAddress = SiteConfig.loginUsername;
        let password = SiteConfig.loginPassword;

        // Use generic validator since we are only matching a specific email, not a pattern
        // let isEmailValid = FormValidation.validate(this.refs.email.state.value, emailAddress);
        let isEmailValid = FormValidation.validateEmail(this.refs.email.state.value, emailAddress);

        // Use generic validator since we are only matching a specific email, not a pattern
        let isPasswordValid =  FormValidation.validatePassword(this.refs.password.state.value, function(value){
            return 'test' === value;
        });


        let isFormValid = isEmailValid && isPasswordValid;
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f

        grandCentral.trigger('to_inputField_email', { valid: isEmailValid });
        grandCentral.trigger('to_inputField_password', { valid: isPasswordValid });
        grandCentral.trigger('to_button', { enabled : isFormValid });
        grandCentral.trigger('to_errorMessage', { show: !isFormValid });

        if(isFormValid) {
            this.postForm();
        }
<<<<<<< HEAD
    },

    postForm: function() {
        var data = {
=======
    }

    postForm () {
        let data = {
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
            email: this.refs.email.state.value,
            password: this.refs.password.state.value
        };

        // TODO: Post NSM - actual Ajax call
<<<<<<< HEAD
        io_lib.verifyLogin(data);
        window.location.href='/#/dashboard';
    },

    render: function() {
=======
        io_lib.verifyLogin(data, function(response) {
            console.log(response);

            window.location.href='/#/dashboard';
        });

    }

    render () {
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        console.log(this.constructor.displayName + ' render()');

        return (
            <div id="loginpage" className="container" aria-label="Sign In">
                <form onSubmit={this.handleSubmit}
                    className="form" name="loginform" action="#" method="post">
                    <fieldset name="login" className="formfieldset">
                        <legend className="formlegend">
                            <span className="formlegendspan">Sign in</span>
                        </legend>

                        <rc.inputFieldComponent
                            ref="email"
<<<<<<< HEAD
                            type="email"
                            name="email"
=======
                            id="email"
                            name="email"
                            type="email"
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
                            labelText="Email address:"
                            errorClass="forminputerror"
                            labelClass="formlabel"
                            inputClass="forminput emailaddress"
                            maxLength="100"
<<<<<<< HEAD
=======
                            required=""
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
                            />

                        <rc.inputFieldComponent
                            ref="password"
<<<<<<< HEAD
=======
                            id="password"
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
                            name="password"
                            type="password"
                            labelText="Password:"
                            errorClass="forminputerror"
                            labelClass="formlabel"
                            inputClass="forminput password"
                            maxLength="50"
<<<<<<< HEAD
=======
                            required=""
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
                            />

                        <rc.inlineMessageComponent
                            ref="forgotComponent"
                            linkText="Forgot credentials?"
                            className="forgot"
                            linkClassName="forgotlink"
                            copyClassName="forgotcopy"
                            copyText="To get the current username and password, contact your sales rep."
                            />

                        <rc.errorMessageComponent
                            message="Invalid username or password."
                            className="errormessage"
                            errorShowClassName="errorshow"
                            errorHideClassName="errorhide"
                            />

                        <rc.buttonComponent
                            buttonName="submit"
                            buttonText="Sign in"
                            className="formbutton"
                            enabled={this.state.valid}
                            ref="submit"
                            />
                    </fieldset>
                </form>
                <div className="testcreds">
                    <div>{SiteConfig.loginUsername}</div>
                    <div>{SiteConfig.loginPassword}</div>
                </div>
            </div>
        );
    }
<<<<<<< HEAD
});
=======
};
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
