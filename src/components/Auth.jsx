import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Auth.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("¡Cuenta creada con éxito!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Sesión iniciada correctamente 🌕");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Crear cuenta" : "Iniciar sesión"}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {isRegistering ? "Registrarse" : "Entrar"}
        </button>
      </form>

      <p>
        {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          style={{ background: "none", color: "#6633cc", border: "none", cursor: "pointer", textDecoration: "underline" }}
        >
          {isRegistering ? "Iniciar sesión" : "Crear cuenta"}
        </button>
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
