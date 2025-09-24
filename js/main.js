import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth } from './firebase-config.js';

onAuthStateChanged(auth, (user) => {
    // Находим все необходимые элементы в DOM
    const loginButton = document.getElementById('login-button');
    const userMenuContainer = document.getElementById('user-menu-container');
    const userEmailDisplay = document.getElementById('user-email-display');
    const logoutLink = document.getElementById('logout-link');
    const dropdownMenu = document.getElementById('user-dropdown');
    const dropdownButton = document.getElementById('user-menu-button');

    // Проверяем, что все элементы найдены, чтобы избежать ошибок
    if (!loginButton || !userMenuContainer || !userEmailDisplay || !logoutLink || !dropdownMenu || !dropdownButton) {
        console.error("Auth control elements not found on this page.");
        return;
    }

    if (user) {
        // Пользователь авторизован: показываем меню, скрываем кнопку входа
        loginButton.classList.add('hidden');
        userMenuContainer.classList.remove('hidden');

        // Заполняем email пользователя
        userEmailDisplay.textContent = user.email;

        // Инициализируем выпадающее меню Flowbite
        new Dropdown(dropdownMenu, dropdownButton);

        // Добавляем обработчик для кнопки выхода
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            signOut(auth).then(() => {
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Sign out error', error);
            });
        }, { once: true }); // { once: true } чтобы избежать многократного назначения обработчика

    } else {
        // Пользователь не авторизован: показываем кнопку входа, скрываем меню
        loginButton.classList.remove('hidden');
        userMenuContainer.classList.add('hidden');
    }
});