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

    describe('Sub-test - Fields - check validity', function() {
        beforeAll(function() {
            email.setState({ value: SiteConfig.loginUsername });
            password.setState({ value: SiteConfig.loginPassword });
    	});

        it('Should validate with the correct username', function(){
            console.log('Email value: ' + email.state.value);
            expect(email.state.value).toBe(SiteConfig.loginUsername);

    	});

        it('Should validate with the correct username', function(){
            console.log('Password value: ' + password.state.value);
            expect(password.state.value).toBe(SiteConfig.loginPassword);
    	});

        /* Types, probably don't need these :/ */
        it('Email input should be of type "email"', function() {
            console.log('Email field type: ' + emailInput.type);
            expect(emailInput.type).toBe('email');
        });

        it('Password input should be of type "password"', function() {
            console.log('Password field type: ' + passwordInput.type);
            expect(passwordInput.type).toBe('password');
        });
    });

});
