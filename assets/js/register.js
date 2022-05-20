function validator(options) {
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector('.form-message');

        if (errorMessage) {
            errorElement.innerText = errorMessage;
        } else {
            errorElement.innerText = '';
        }
    }
    var formElement = document.querySelector(options.form)
    console.log(formElement)
    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');

            console.log(inputElement)
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }
                inputElement.oninput = function() {
                    errorElement.innerText = '';
                }
            }
        });
    }
}
validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "vui lòng nhập email vào"
        }
    }
}
validator.isRequired = function(selcector, massage) {
    return {
        selector: selcector,
        test: function(value) {
            return value.trim() ? undefined : massage || 'Vui lòng nhập mật khẩu vào'

        }
    }

}
validator.minLength = function(selcector, min, massage) {
    return {
        selector: selcector,
        test: function(value) {
            return value.length >= min ? undefined : massage || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}
validator.isConfirmed = function(selector, valueConfirm, massage) {
    return {
        selector: selector,
        test: function(value) {
            // console.log('password : ' + valueConfirm())
            return value === valueConfirm() ? undefined : massage || 'Giá trị nhập vào không khớp'
        }
    }

}