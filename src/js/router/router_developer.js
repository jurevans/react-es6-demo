
// ROUTER INITIALIZE

routerSetupConfig.initialize = function() {
    console.log('router initialize()');
    this.status.currentPage = this.status.lastPage = this.status.currentRoute = null;

    //Initialize Tracking
    Nux.initTrack(
        {
            'GA':'', // Insert Campaign Property ID here (starts with UA-)
            'Splunk':''
        }
    );
};


//  Because all the initialize()  functions occur very early before app.status has values like currentPage
//  we need a function to fire once during the start up and after app.status has populated

routerSetupConfig.appStatusNowReady =  function(){

    // Permanent items as react components
    ReactDOM.render(
        React.createElement( rc.header ),
        document.getElementById('headercontainer')
    );
    /*ReactDOM.render(
        React.createElement( rc.nav ),
        document.getElementById('navcontainer')
    );*/
    ReactDOM.render(
        React.createElement( rc.mainmodal ),
        document.getElementById('modalcontainer')
    );
    ReactDOM.render(
        React.createElement( rc.loader ),
        document.getElementById('loadercontainer')
    );

    // Attach Event Tracking to the page
    Nux.attachTrack();

};


// ROUTER ROUTES

routerSetupConfig.routes =  {

    // home page route uses a react component as a page
    '(?*path)': function(f, q){ this.routeTunnel('react', 'home', rc.homePageComponent, f, q); },

    /* LOGIN PAGE */
    'login(/*path)': function(f, q){ this.routeTunnel('react', 'login', rc.loginPageComponent, f, q); },
    /* USER DASHBOARD */
    'dashboard(/*path)': function(f, q){ this.routeTunnel('react', 'dashboard', rc.dashboardPageComponent, f, q); },

    '*badroute': function(){ this.navigate('#', {trigger: true}); }
    // for more information on routing try reading http://mrbool.com/backbone-js-router/28001

};


// ROUTER hooks

routerSetupConfig.prePageChange =  function(){
    /*  any code that must happen before every page change ... place here
        a page means the first url fragment so changing from
        #/walkingdead/daryl
        to
        #/walkingdead/michonne
        would NOT qualify
    */
};

routerSetupConfig.postPageChange =  function(){
    // any code that must happen after every page change ... place here

};

routerSetupConfig.postRouteChange =  function(){
    /*  any code that must happen after every ROUTE change ... place here
        changing from
        #/walkingdead/daryl
        to
        #/walkingdead/michonne
        WOULD qualify
    */

    grandCentral.trigger('routeChange');

    // Trigger Pageview Tracking
    Nux.sendPageview();

    // check for modal deeplink
    if (this.status.currentFragString) {
        if (this.status.currentFragString.indexOf('modalShow-') > -1) {
            // get the url fragment that contains 'modalShow-'
            var modalFragment = _.find(
                this.status.currentFragsArray,
                function(item){ return item.indexOf('modalShow-') === 0; }
            );
            // get the template name out of that url fragment
            var chosenTemplate = modalFragment.replace('modalShow-','');
            // get the index of that fragment out of currentFragsArray
            var p = this.status.currentFragsArray.indexOf(modalFragment);
            // now check to make sure that our modalShow- is the LAST fragment
            // and that chosenTemplate is not an empty string
            // before calling to open the modal
            if (p === this.status.currentFragsArray.length-1  && chosenTemplate!='') {
                console.log('modalShow detected as the last fragment, opening ', chosenTemplate);
                grandCentral.trigger( 'modalShow', chosenTemplate );
            }
        }
    } else {
        // fire close event anyway in case we are using the browser back button
        grandCentral.trigger('modalHide');
    }
}





