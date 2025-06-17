import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
  if (user) {
    const username = user.email.split("@")[0];
    document.getElementById("username").textContent = username;
  } else {
    window.location.href = "/auth"; // si no ha iniciado sesión, redirige
  }
});
