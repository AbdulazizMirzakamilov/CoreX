// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPt-WoG47g-448KNu3_WXTgDgz15cbqME",
  authDomain: "corex-20ae9.firebaseapp.com",
  databaseURL: "https://corex-20ae9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "corex-20ae9",
  storageBucket: "corex-20ae9.appspot.com",
  messagingSenderId: "298816528373",
  appId: "1:298816528373:web:7e52f89ea95ead49d04abc",
  measurementId: "G-BNFN27538E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);