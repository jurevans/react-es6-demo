rc.header = class Header extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			loggedin: app.status.loggedin
		};
	}

	signOut (e) {
		e.preventDefault();

		io_lib.logOut(() => {
			window.location.href='/#/login';
		});

	}

	componentDidMount () {
		var self = this;

		grandCentral.off('routeChange').on('routeChange', function(){
			self.setState(
				{loggedin: app.status.loggedin}
			);
		});
	}

    render () {
        return (
			<header id="siteheader">
				<div className="flex container">
	                <a className="logo" href="#"><img src={SiteConfig.assetsDirectory + 'images/site/logo.jpg'} /></a>
	            	<div id="accountSection" className={'account ' + this.state.loggedin}>
	            		<span className="username">Demo User</span>
	            		<span className="itemDivider"></span>
	            		<br />
	            		<span className="logout" onClick={this.signOut}>Sign out</span>
	            	</div>
	            </div>
            </header>
        );
    }
};
