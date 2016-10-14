describe('Test suite for Login page component', function() {
	var component, emailInput, passwordInput, submitButton;
    var listDOM;

	beforeAll(function() {

		element = React.createElement(
			rc.loginPageComponent,
			{}
		);

		component = reactTestUtils.renderIntoDocument(element);

        emailInput = reactTestUtils.findRenderedDOMComponentWithClass(component, 'emailaddress');
        passwordInput = reactTestUtils.findRenderedDOMComponentWithClass(component, 'password');
        submitButton = reactTestUtils.findRenderedDOMComponentWithClass(component, 'formbutton');
	});

    beforeEach(function(){

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
		console.log("typeof GrandCentral = ", typeof grandCentral);

		expect(typeof grandCentral).not.toBe("undefined")
	});

    describe('Sub-test - Username - check validity', function() {
        beforeAll(function() {

    	});

        beforeEach(function(){

    	});

        it('Should validate with the correct username', function(){
    		/* ? */
            emailInput.value = SiteConfig.loginUsername;

            console.log(emailInput.value);

    	});
    });

    describe('Sub-test - Password - check validity', function() {
        beforeAll(function() {

    	});

        beforeEach(function(){

    	});

        it('Should validate with the correct password', function(){
    		/* ? */
            passwordInput.value = SiteConfig.loginPassword;

            console.log(passwordInput.value);

    	});
    });

});
