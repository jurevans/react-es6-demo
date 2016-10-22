describe('Test suite for Login page component', function() {
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
<<<<<<< HEAD
=======
		message = component.refs.forgotComponent;
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f

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
<<<<<<< HEAD

=======
	});

	it('The sub-components should render to the page', function() {
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        expect(reactTestUtils.isDOMComponent(emailInput)).toBeTruthy();
        expect(reactTestUtils.isDOMComponent(passwordInput)).toBeTruthy();
        expect(reactTestUtils.isDOMComponent(submitButton)).toBeTruthy();
	});

    it('Default state should be valid (true)', function() {
		expect(component.state.valid).toBeTruthy();
	});

<<<<<<< HEAD
    /* This component uses grandCentral to manage actions between fields, messages and Sign In button */
    it('Grand Central Exists', function(){
		console.log("typeof GrandCentral = " + typeof grandCentral);
		expect(typeof grandCentral).not.toBe("undefined")
	});

    it('Should not post the form if invalid', function() {
        /* Don't post form data if form is invalid */
=======
    it('Should not post the form if invalid', function() {
        /* Don't post form data if form is invalid */

        /* Talk to Satya about this */
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        spyOn(component, "postForm");
        reactTestUtils.Simulate.click(submitButton);
        expect(component.postForm).not.toHaveBeenCalled();
    });

<<<<<<< HEAD
    describe('Sub-test - Username and Password fields', function() {
=======
    describe('Sub-test - Username and Password fields - Valid data', function() {
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        beforeAll(function() {
            email.setState({ value: SiteConfig.loginUsername });
            password.setState({ value: SiteConfig.loginPassword });
    	});

        it('Should validate with the correct username and password', function(){
            expect(email.state.value).toBe(SiteConfig.loginUsername);
            expect(password.state.value).toBe(SiteConfig.loginPassword);

<<<<<<< HEAD
=======
            expect(FormValidation.validate(emailInput.value, SiteConfig.loginUsername)).toBeTruthy();
            expect(FormValidation.validate(passwordInput.value, SiteConfig.loginPassword)).toBeTruthy();

>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
            expect(email.state.valid).toBeTruthy();
            expect(password.state.valid).toBeTruthy();
    	});

<<<<<<< HEAD
        /* Types, probably don't need these :-/ */
=======
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        it('Email input should be of type "email"', function() {
            expect(emailInput.type).toBe('email');
        });

        it('Password input should be of type "password"', function() {
            expect(passwordInput.type).toBe('password');
        });
    });

<<<<<<< HEAD
=======
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

>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
});
