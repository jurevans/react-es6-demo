
var io_lib = ( function() {

    // Paths to Node for dev, qa, and prod.
    var dev = 'https://dev-aws-student.macmillanhighered.com';
    var qa = 'https://qa-aws-student.macmillanhighered.com';
    var loadtest = 'https://student.lt.macmillan.cloud';
    var pr = 'https://dev-aws-student.macmillanhighered.com';
    var prod = 'https://student.macmillanhighered.com';

    // Private methods.
<<<<<<< HEAD
    function verifyLogin(data) {
        app.status.loggedin = 'true';
=======
    function verifyLogin(data, callback) {
        var response = {};
        app.status.loggedin = 'true';

        callback.call(this, response);
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
    }

    function logOut(){
        app.status.loggedin = 'false';
    }

    // Methods made public through the revealing pattern.
    return {
        verifyLogin : verifyLogin,
        logOut: logOut
    };


} )();
