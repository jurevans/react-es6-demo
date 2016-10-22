rc.homePageComponent = React.createClass({
	componentWillMount:function(){
		if(app.status.loggedin == 'true'){
			window.location.href='/#/dashboard';
		}else{
			window.location.href='/#/login';
		}
	},
    render:function(){
        console.log(this.constructor.displayName+' render()');
        return (

            <div id="homepage">

            </div>

        );
    }
});