//variables
let inputs = document.querySelectorAll('input');
let card = document.querySelector('.card');
let fullName = document.querySelector('#fullName');
let user = document.querySelector('#user');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let errorMessage = document.querySelector('.error-message')
let mail = '@';

//Event Listeners
card.addEventListener('focusin', (e) => {
    e.target.classList.remove('red');
    if (e.target.matches('input')) {
        e.target.placeholder = '';
        e.target.labels[0].style.visibility = 'visible';
        e.target.style.width = '100%';
        e.target.style.transition = '0.2s';
    } else {
        return;
    }
})
card.addEventListener('focusout', (e) => {
    if (e.target.matches('input')) {
        e.target.placeholder = e.target.labels[0].innerText;
        e.target.labels[0].style.visibility = 'hidden';
        e.target.style.width = '70%';
    } else {
        return;
    }
})

// Night Mode
let ballCoords = document.querySelector('.ball').getBoundingClientRect();
let containerCoords = document.querySelector('.container').getBoundingClientRect();
let ball = document.querySelector('.ball');
let container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    if (e.target.matches('.ball')) {
        ball.classList.toggle('transform');
        ball.style.transition = '0.2s';

        document.body.classList.toggle('changeBg');
        document.body.style.transition = '0.2s';
        container.classList.toggle('containerBg');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.toggle('input-toggle');
            inputs[i].style.transition = '0.2s';
        }
    }
})

// Form validation
card.addEventListener('submit', (e) => {
    if (fullName.value === '') {
        e.preventDefault();
        errorMessage.innerText = 'Please input Full Name';
        fullName.classList.add('red');
    } else if (user.value === '') {
        e.preventDefault();
        errorMessage.innerText = 'Please input Username';
        user.classList.add('red');
    } else if (user.value.length <= 3) {
        e.preventDefault();
        errorMessage.innerText = 'Username cannot be less than 3 characters';
        user.classList.add('red');
    } else if (email.value === '') {
        e.preventDefault();
        errorMessage.innerText = 'Please input Email'
        email.classList.add('red');
    } else if (email.value.includes(mail) === false) {
        e.preventDefault();
        errorMessage.innerText = 'please input a valid email address';
        email.classList.add('red');
    } else if (phone.value === '') {
        e.preventDefault()
        errorMessage.innerText = 'Please input Phone Number';
        phone.classList.add('red');
    } else if (phone.value.length < 11) {
        e.preventDefault();
        errorMessage.innerText = 'Please input a valid phone number';
        phone.classList.add('red');
    } else if (password.value === '' || confirmPassword.value === '') {
        e.preventDefault();
        errorMessage.innerText = 'Please input Password';
        password.classList.add('red');
        confirmPassword.classList.add('red');
    } else if (password.value < 8 || confirmPassword.value < 8) {
        e.preventDefault();
        errorMessage.innerText = 'Password cannot be less than 8 characters long';
        password.classList.add('red');
        confirmPassword.classList.add('red');
    } else if (password.value !== confirmPassword.value) {
        e.preventDefault();
        errorMessage.innerText = 'Passwords do not match';
        password.classList.add('red');
        confirmPassword.classList.add('red');
    }
})

