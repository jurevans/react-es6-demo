describe('Test suite for Login page component', function() {
	var component, email, password,
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

        /* DOM */
        emailInput = reactTestUtils.findRenderedDOMComponentWithClass(component, 'emailaddress');
        passwordInput = reactTestUtils.findRenderedDOMComponentWithClass(component, 'password');
        submitButton = reactTestUtils.findRenderedDOMComponentWithClass(component, 'formbutton');
	});

    beforeEach(function(){
        /* *** */
	});

    /* Render */
    it('The Login Page component renders to the page', function() {
		console.log('The Login Page component should render without errors');

		expect(function() {
			component;
		}).not.toThrow();
	});

    it('Default state should be valid (true)', function() {
		expect(component.state.valid).toBeTruthy();
	});

    /* This component uses grandCentral to manage actions between fields, messages and Sign In button */
    it('Grand Central Exists', function(){
		console.log("typeof GrandCentral = " + typeof grandCentral);
		expect(typeof grandCentral).not.toBe("undefined")
	});

    it('Should not post the form if invalid', function() {
        /* Don't post form data if form is invalid */
        spyOn(component, "postForm");
        reactTestUtils.Simulate.click(submitButton);
        expect(component.postForm).not.toHaveBeenCalled();
    });

    describe('Sub-test - Username and Password fields', function() {
        beforeAll(function() {
            email.setState({ value: SiteConfig.loginUsername });
            password.setState({ value: SiteConfig.loginPassword });
    	});

        it('Should validate with the correct username and password', function(){
            expect(email.state.value).toBe(SiteConfig.loginUsername);
            expect(password.state.value).toBe(SiteConfig.loginPassword);

            expect(email.state.valid).toBeTruthy();
            expect(password.state.valid).toBeTruthy();
    	});

        /* Types, probably don't need these :-/ */
        it('Email input should be of type "email"', function() {
            expect(emailInput.type).toBe('email');
        });

        it('Password input should be of type "password"', function() {
            expect(passwordInput.type).toBe('password');
        });
    });

});
