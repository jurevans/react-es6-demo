/* Log in to product page */

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

        grandCentral.trigger('to_inputField_email', { valid: isEmailValid });
        grandCentral.trigger('to_inputField_password', { valid: isPasswordValid });
        grandCentral.trigger('to_button', { enabled : isFormValid });
        grandCentral.trigger('to_errorMessage', { show: !isFormValid });

        if(isFormValid) {
            this.postForm();
        }
    },

    postForm: function() {
        var data = {
            email: this.refs.email.state.value,
            password: this.refs.password.state.value
        };

        // TODO: Post NSM - actual Ajax call
        window.location.href='/#/dashboard';
    },

    render: function() {
        console.log(this.constructor.displayName + ' render()');

        return (
            <div id="loginpage" className="container">
                <form onSubmit={this.handleSubmit}
                    className="form" name="loginform" action="#" method="post">
                    <fieldset name="login" className="formfieldset">
                        <legend className="formlegend">
                            <span className="formlegendspan">Sign in</span>
                        </legend>

                        <rc.inputFieldComponent
                            ref="email"
                            type="email"
                            name="email"
                            labelText="Email address:"
                            errorClass="forminputerror"
                            labelClass="formlabel"
                            inputClass="forminput emailaddress"
                            />

                        <rc.inputFieldComponent
                            ref="password"
                            name="password"
                            type="password"
                            labelText="Password:"
                            errorClass="forminputerror"
                            labelClass="formlabel"
                            inputClass="forminput password"
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
                            />
                    </fieldset>
                </form>
            </div>
        );
    }
});
