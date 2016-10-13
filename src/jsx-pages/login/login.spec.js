describe('Test suite for Login page component', function() {
	var component;														//adjust if firefly.jsx triggers more initial items

	beforeAll(function() {

		element = React.createElement(
			rc.loginPageComponent,
			{}
		);

		component = reactTestUtils.renderIntoDocument(element);
	});

});
