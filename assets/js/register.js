function validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            if (inputElement) {
                inputElement.onblur = function() {
                    var errorMessage = rule.test(inputElement.value)
                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                    } else {
                        errorElement.innerText = '';

                    }
                }
            }
        });
    }
}
validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'vui long nhap du lieu vao'
        }
    }
}