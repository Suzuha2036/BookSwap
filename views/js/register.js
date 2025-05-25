import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
//firebase/auth

const firebaseConfig = {
  apiKey: "AIzaSyB5kYTtQfyK8SHM3xe0wlNr9kg2s_UZRbA",
  authDomain: "bookswap-management.firebaseapp.com",
  projectId: "bookswap-management",
  storageBucket: "bookswap-management.firebasestorage.app",
  messagingSenderId: "102005045670",
  appId: "1:102005045670:web:f18cc83e752a59ad767767",
  measurementId: "G-DMJKP3MZPQ"
};

 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById('email');
const password = document.getElementById('password');

const registerButton = document.getElementById('submit');


document.addEventListener('DOMContentLoaded', () => {
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const registerButton = document.getElementById('submit');

            registerButton.addEventListener('click', (e) => {
                e.preventDefault();

                const email = emailInput.value;
                const password = passwordInput.value;

                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        alert("User registered successfully!");
                        // Redirect or perform additional actions here
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(`Error: ${errorMessage}`);
                    });
            });
        });