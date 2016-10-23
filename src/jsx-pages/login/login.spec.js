describe('Test suite for Login page component', () => {
	var component, email, password, submit,
        emailInput, passwordInput, submitButton;

	beforeAll(function() {

		element = React.createElement(
			rc.loginPageComponent,
			{}
		);

        /* Components */
		component = reactTestUtils.renderIntoDocument(element);
        email = component.refs.email;
        password = component.refs.password;
        submit = component.refs.submit;
		message = component.refs.forgotComponent;

        /* DOM */
        emailInput = reactTestUtils.findRenderedDOMComponentWithClass(component, 'emailaddress');
        passwordInput = reactTestUtils.findRenderedDOMComponentWithClass(component, 'password');
        submitButton = reactTestUtils.findRenderedDOMComponentWithClass(component, 'formbutton');
	});

    beforeEach(function(){
        /* *** */
	});

    /* Render Component and Child Components */
    it('The Login Page component renders to the page', function() {
		console.log('The Login Page component should render without errors');

		expect(function() {
			component;
		}).not.toThrow();
	});

	it('The sub-components should render to the page', function() {
        expect(reactTestUtils.isDOMComponent(emailInput)).toBeTruthy();
        expect(reactTestUtils.isDOMComponent(passwordInput)).toBeTruthy();
        expect(reactTestUtils.isDOMComponent(submitButton)).toBeTruthy();
	});

    it('Default state should be valid (true)', function() {
		expect(component.state.valid).toBeTruthy();
	});

    it('Should not post the form if invalid', function() {
        /* Don't post form data if form is invalid */

        /* Talk to Satya about this */
        spyOn(component, "postForm");
        reactTestUtils.Simulate.click(submitButton);
        expect(component.postForm).not.toHaveBeenCalled();
    });

    describe('Sub-test - Username and Password fields - Valid data', function() {
        beforeAll(function() {
            email.setState({ value: SiteConfig.loginUsername });
            password.setState({ value: SiteConfig.loginPassword });
    	});

        it('Should validate with the correct username and password', function(){
            expect(email.state.value).toBe(SiteConfig.loginUsername);
            expect(password.state.value).toBe(SiteConfig.loginPassword);

            expect(FormValidation.validate(emailInput.value, SiteConfig.loginUsername)).toBeTruthy();
            expect(FormValidation.validate(passwordInput.value, SiteConfig.loginPassword)).toBeTruthy();

            expect(email.state.valid).toBeTruthy();
            expect(password.state.valid).toBeTruthy();
    	});

        it('Email input should be of type "email"', function() {
            expect(emailInput.type).toBe('email');
        });

        it('Password input should be of type "password"', function() {
            expect(passwordInput.type).toBe('password');
        });
    });

    describe('Sub-test - Username and Password fields - Invalid data', function() {
        beforeAll(function() {
            email.setState({ value: 'test' });
            password.setState({ value: 'test' });
    	});

        /* Test FormValidation Lib */
        it('Should not validate with incorrect username and/or password', function(){
            expect(email.state.value).not.toBe(SiteConfig.loginUsername);
            expect(password.state.value).not.toBe(SiteConfig.loginPassword);

            expect(FormValidation.validate(emailInput.value, SiteConfig.loginUsername)).not.toBeTruthy();
            expect(FormValidation.validate(passwordInput.value, SiteConfig.loginPassword)).not.toBeTruthy();
    	});
    });

});
