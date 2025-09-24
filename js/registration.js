import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth } from './firebase-config.js';

const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = registrationForm.email.value;
    const password = registrationForm.password.value;
    const confirmPassword = registrationForm['confirm-password'].value;

    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            console.log('User registered and signed in:', userCredential.user);
            alert('Регистрация прошла успешно! Добро пожаловать!');
            window.location.href = 'account.html'; // Сразу переходим в личный кабинет
        })
        .catch((error) => {
            console.error('Registration error:', error.code, error.message);
            alert(`Ошибка регистрации: ${error.message}`);
        });
});