// Get references to the login and register sections
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

// Get references to the buttons for toggling sections
const showRegisterButton = document.getElementById('show-register');
const showLoginButton = document.getElementById('show-login');

// Add click event listeners to show the register section
showRegisterButton.addEventListener('click', function() {
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

// Add click event listeners to show the login section
showLoginButton.addEventListener('click', function() {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});