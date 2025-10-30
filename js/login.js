import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth } from './firebase-config.js';

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Простая проверка для входа в админ-панель
    // В реальном проекте используй Firebase-функции или кастомные токены для безопасности
    if (email === 'admin@corex.com' && password === 'admin123') {
        alert('Вход в админ-панель...');
        window.location.href = 'admin.html';
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log('User signed in:', userCredential.user);
            alert('Вход выполнен успешно!');
            // Перенаправляем в личный кабинет после входа
            window.location.href = 'account.html';
        })
        .catch((error) => {
            console.error('Login error:', error.code, error.message);
            alert(`Ошибка входа: ${error.message}`);
        });
});