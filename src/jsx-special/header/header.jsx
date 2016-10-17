rc.header = React.createClass({
	getInitialState:function(){
        return {
        	loggedin: SiteConfig.loggedin
        }
    },    
	signOut:function(e){
		// TODO: Post NSM - actual Ajax call
        window.location.href='/#/login';
	},
	componentDidMount:function(){
		var self = this;
		grandCentral.off('routeChange').on('routeChange', function(){
			self.setState(
				{loggedin: SiteConfig.loggedin}
			);
		});
		
	},
    render:function(){
    	
        return (
			<header id="siteheader">
				<div className="flex container">
	                <a className="logo" href="#/login"><img src={SiteConfig.assetsDirectory + 'images/site/logo-macmillan-learning.jpg'} /></a>
	            	<div id="accountSection" className={this.state.loggedin}>
	            		<span className="username">Demo User</span>
	            		<span className="itemDivider"></span>
	            		<br />
	            		<span className="logout" onClick={this.signOut}>Sign out</span>
	            	</div> 
	            </div>
            </header>
        );
    }
});
