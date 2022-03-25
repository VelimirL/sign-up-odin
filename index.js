const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const form = document.querySelector('.form');
const errorBlock = document.querySelector('.error__block');
const warningBlock = document.querySelector('.warning__block');

function validatePasswordOnSubmit(event) {
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    warningBlock.style.display = 'none';
    password.classList.add('error');
    confirmPassword.classList.add('error');
    errorBlock.style.display = 'block';
  }
}

function validatePasswordsOnTyping() {
  if (password.value !== confirmPassword.value) {
    warningBlock.style.display = 'block';
  } else {
    warningBlock.style.display = 'none';
  }
}

function removeErrors() {
  password.classList.remove('error');
  confirmPassword.classList.remove('error');
  errorBlock.style.display = 'none';
}

password.addEventListener('focus', removeErrors);
password.addEventListener('keyup', validatePasswordsOnTyping);
confirmPassword.addEventListener('focus', removeErrors);
confirmPassword.addEventListener('keyup', validatePasswordsOnTyping);
form.addEventListener('submit', validatePasswordOnSubmit);
