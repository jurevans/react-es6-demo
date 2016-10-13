describe('Test suite for Login page component', function() {
	var component;

	beforeAll(function() {

		element = React.createElement(
			rc.loginPageComponent,
			{}
		);

		component = reactTestUtils.renderIntoDocument(element);
	});

    /* Render */
    it('The Login Page component renders to the page', function() {
		console.log('The Login Page component should render without errors');

		expect(function() {
			component;
		}).not.toThrow();
	});

    /* This component uses grandCentral */
    it('Grand Central Exists', function(){
		console.log("typeof GrandCentral = ", typeof grandCentral);
		expect(typeof grandCentral).not.toBe("undefined")
	});

});
