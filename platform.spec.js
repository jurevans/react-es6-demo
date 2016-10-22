reactTestUtils = React.addons.TestUtils;

/* Use this to suppress any Console Errors you don't want to see in your Karma Tests */
console.error = function(e){
    var warning_getInitialState = 'Warning: getInitialState';
    if(e.indexOf(warning_getInitialState) > -1){
        // Suppress getInitialState Warnings
    }else{
        console.log(e);
    }
};

/* We're not testing AJAX calls, so suppress errors */
console.log = function(e){
    var strErr = 'strErr ';
<<<<<<< HEAD
    if(e.indexOf(strErr) > -1){
=======
    if(typeof e !== 'object' && typeof e !== 'function' && e.indexOf(strErr) > -1){
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        // Suppress AJAX strErr Warnings
    }else{
        // *** NOTE: We use console.info to avoid infinite looping
        console.info.apply(console, arguments);
    }
};

describe('suite of tests for the platform',function () {
    it('Router base js\' status object should not be changed', function() {
        console.log('Router base js\' status object should not be changed');
        var checksum = md5(JSON.stringify(routerSetupConfig.status));
        expect(checksum).toBe('66cf155c826f2251b2107067c39376a9');
    });
    it('Router base js\' routeTunnel() function should not be changed', function() {
        console.log('Router base js\' routeTunnel() function should not be changed');
        var checksum = md5(routerSetupConfig.routeTunnel.toString());
        expect(checksum).toBe('d656a594c101d87e724043621e4a0083');
    });
<<<<<<< HEAD
=======
    it('Grand Central Exists', function(){
        console.log("typeof GrandCentral = " + typeof grandCentral);
        expect(typeof grandCentral).not.toBe("undefined")
    });
    it('FormValidation should exist.', function(){
        console.log("typeof FormValidation = " + typeof FormValidation);
        expect(typeof FormValidation).not.toBe("undefined")
    });
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
});
