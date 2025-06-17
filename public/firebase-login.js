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

// 🔐 Login
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-password").value;
  const error = document.getElementById("login-error");

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    window.location.href = "/dashboard";
  } catch (err) {
    error.textContent = "❌ " + err.message;
  }
});

// ✍️ Registro
document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const pass = document.getElementById("register-password").value;
  const error = document.getElementById("register-error");

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    window.location.href = "/dashboard";
  } catch (err) {
    error.textContent = "❌ " + err.message;
  }
});

// 🧭 Tabs
document.getElementById("login-tab").addEventListener("click", () => {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-tab").classList.add("active");
  document.getElementById("register-tab").classList.remove("active");
});

document.getElementById("register-tab").addEventListener("click", () => {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-tab").classList.add("active");
  document.getElementById("login-tab").classList.remove("active");
});
