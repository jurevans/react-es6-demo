describe('Test suite for Dashboard page component', function() {
	var component;														//adjust if firefly.jsx triggers more initial items

	beforeAll(function() {

		element = React.createElement(
			rc.dashboardPageComponent,
			{}
		);

		component = reactTestUtils.renderIntoDocument(element);
	});

});
