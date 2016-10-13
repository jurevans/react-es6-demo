describe('Test suite for Header', function() {
	var component;														//adjust if firefly.jsx triggers more initial items

	beforeAll(function() {

		element = React.createElement(
			rc.header,
			{}
		);

		component = reactTestUtils.renderIntoDocument(element);
	});

});
