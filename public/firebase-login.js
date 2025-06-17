import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhBK6gnJSf_adKXau-S1Olif-TlkVCmCA",
  authDomain: "lunafinal-ef17f.firebaseapp.com",
  projectId: "lunafinal-ef17f",
  storageBucket: "lunafinal-ef17f.firebasestorage.app",
  messagingSenderId: "52808791669",
  appId: "1:52808791669:web:0ac4b8cdf0870b933d6a3c",
  measurementId: "G-1XWJSYPJE9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("login-form");
const errorText = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    window.location.href = "/dashboard";
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      // Crear cuenta si no existe
      try {
        await createUserWithEmailAndPassword(auth, email, pass);
        window.location.href = "/dashboard";
      } catch (e) {
        errorText.textContent = "Error al registrar: " + e.message;
      }
    } else {
      errorText.textContent = "Error al iniciar sesión: " + error.message;
    }
  }
});
