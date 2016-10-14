describe('Test suite for Header', function() {
	var component;														//adjust if firefly.jsx triggers more initial items

	beforeAll(function() {

		element = React.createElement(
			rc.header,
			{}
		);

		component = reactTestUtils.renderIntoDocument(element);
        /* Logo link */
        logo = reactTestUtils.findRenderedDOMComponentWithClass(component, 'logo');
        /* Account section */
        account = reactTestUtils.findRenderedDOMComponentWithClass(component, 'account');
        username = reactTestUtils.findRenderedDOMComponentWithClass(component, 'username');
        logout = reactTestUtils.findRenderedDOMComponentWithClass(component, 'logout');
	});

    /* Render */
    it('The Header component renders to the page', function() {
		console.log('The Header component should render without errors');

		expect(function() {
			component;
		}).not.toThrow();
	});

});
