// Interactive Web Assignment JavaScript
// ================================
// This file contains all event handling, interactive features, and form validation logic.

// 1. Light/Dark Mode Toggle
// -------------------------
const toggleModeBtn = document.getElementById('toggle-mode');
let darkMode = false;
toggleModeBtn.addEventListener('click', function() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    toggleModeBtn.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// 2. Counter Feature
// ------------------
const counterBtn = document.getElementById('counter-btn');
const counterValue = document.getElementById('counter-value');
let count = 0;
counterBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
});

// 3. Collapsible FAQ Section
// --------------------------
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// 4. Form Validation
// ------------------
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

function validateName(name) {
    return name.trim().length >= 2;
}
function validateEmail(email) {
    // Simple regex for email validation
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
function validatePassword(password) {
    // At least 6 chars, one number, one letter
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 2 characters.';
        valid = false;
    }
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters and include a number.';
        valid = false;
    }
    if (valid) {
        formSuccess.textContent = 'Sign up successful!';
        form.reset();
    }
});

// Optional: Validate on input
[nameInput, emailInput, passwordInput].forEach(function(input) {
    input.addEventListener('input', function() {
        formSuccess.textContent = '';
        if (input === nameInput) {
            nameError.textContent = validateName(input.value) ? '' : 'Name must be at least 2 characters.';
        }
        if (input === emailInput) {
            emailError.textContent = validateEmail(input.value) ? '' : 'Please enter a valid email address.';
        }
        if (input === passwordInput) {
            passwordError.textContent = validatePassword(input.value) ? '' : 'Password must be at least 6 characters and include a number.';
        }
    });
});
