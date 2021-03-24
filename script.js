let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password1 = document.getElementById("password");
let password2 = document.getElementById("passwordVerification");

let min_username = 3;
let min_password = 6;
let max_username = 15;
let max_password = 25;

function showError(input, message) {
    alert(message);
}

function checkFields(input_arg) {
    let isRequired = false;
    input_arg.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        }
    });
    return isRequired;
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} should be longer than ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} should be no longer than ${max} characters`);
    }
}

function checkEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!res.test(email.value.trim())) {
        showError(email, `Email is not valid`);
    }
}

function checkPasswordVerification(password1, password2) {
    if (password1.value !== password2.value) {
        showError(password2, `Password verification failed`);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!checkFields([username, email, password, password2])) {
        checkInputLength(username, min_username, max_username);
        checkInputLength(password1, min_password, max_password);
        checkEmail(email);
        checkPasswordVerification(password1, password2);
    }
    alert("You have successfuly filled the form.")
});