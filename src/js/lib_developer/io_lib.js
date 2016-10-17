
var io_lib = ( function() {

    // Paths to Node for dev, qa, and prod.
    var dev = 'https://dev-aws-student.macmillanhighered.com';
    var qa = 'https://qa-aws-student.macmillanhighered.com';
    var loadtest = 'https://student.lt.macmillan.cloud';
    var pr = 'https://dev-aws-student.macmillanhighered.com';
    var prod = 'https://student.macmillanhighered.com';

    // Private methods.
    function verifyLogin(data) {
        app.status.loggedin = 'true';
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
