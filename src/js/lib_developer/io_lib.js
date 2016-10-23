
let io_lib = (() => {

    /* Environment Paths */
    const dev      = 'https://dev.example.com/';
    const qa       = 'https://qa.example.com/';
    const loadtest = 'https://loadtest.example.com/';
    const pr       = 'https://pr.example.com/';
    const prod     = 'https://example.com/';

    // Private methods.
    function verifyLogin(data, callback) {
        let response = {};
        app.status.loggedin = 'true';

        callback.call(this, response);
    }

    function logOut(callback){
        app.status.loggedin = 'false';

        callback.call(this);
    }

    // Methods made public through the revealing pattern.
    return {
        verifyLogin : verifyLogin,
        logOut: logOut
    };

})();
