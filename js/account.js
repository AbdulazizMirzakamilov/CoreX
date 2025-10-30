import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth } from './firebase-config.js';

const welcomeMessage = document.getElementById('welcome-message');

onAuthStateChanged(auth, (user) => {
  if (user && welcomeMessage) {
    // Пользователь вошел, обновляем приветствие
    welcomeMessage.textContent = `Добро пожаловать, ${user.email}!`;
  }
});