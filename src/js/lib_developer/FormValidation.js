/* Form validation methods */

let FormValidation = (() => {

    function validateEmail(value) {
        /* Regex @ http://www.regextester.com/1922 */
        let re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
        return re.test(value);
    }

    function validatePhoneNumber(value) {
        /* Regex @ http://www.regextester.com/17 */
        /* Matches:
            (555)-555-5555
            555-555-5555
            +1-555-532-3455, etc., with ext./extension support */

        let re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

        return re.test(value);
    }

    /* US-only zipcodes right now */
    function validateZipCode(value) {
        let re = /^(\d{5}-\d{4})|(\d{5})$/g;

        return re.test(value);
    }

    /* Verifies that "value" exists, executes a callback (if provided) that may contain complexity rules */
    function validatePassword(value, callback) {
        return value.length && callback.call(this, value);
    }

    /* Generic method to simply match two values */
    function validate(value, matchValue) {
        return value === matchValue;
    }

    return {
        validate : validate,
        validateEmail : validateEmail,
        validateZipCode : validateZipCode,
        validatePassword : validatePassword,
        validatePhoneNumber : validatePhoneNumber
    };

})();
