const form = document.querySelector('form');
const name = document.querySelector('.name');
const email = document.querySelector('.email')
const password = document.querySelector('.password');
const confirm = document.querySelector('.confirm')
const errorElement = document.querySelector('.error')

form.addEventListener('submit', e => {
    let errorMessages = [];

    if (name.value.length <= 2) {
        errorMessages.push("Name must have at least two characters")
    }
    if (/\d/.test(name.value) || /\p{P}/u.test(name.value)) {
        errorMessages.push("name cannot contain special characters")
    }

    if (/\S+@\S+\.\S+/.test(email.value) === false) {
        errorMessages.push('inncorect email')
    }

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password.value) === false) {
        errorMessages.push('Password must contain at least 8 characters, one upper case letter, special character and number')
    }

    if (confirm.value !== password.value) {
        errorMessages.push("Password don't match")
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = errorMessages[0];
    }


})
