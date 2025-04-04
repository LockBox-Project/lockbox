"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import './login.css'; // Importando o arquivo de estilo CSS

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome to LockBox! 👋</h1>
        <p>Log in to Continue</p>

        {/* Formulário de login com username e password */}
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="input-label">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Digite seu username"
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="login-button login-button-submit">
            Submit
          </button>
        </form>

        {/* Botões de login com Google e GitHub */}
        <button
          className="login-button login-button-google"
          onClick={() => signIn("google", { callbackUrl: "/menu" })}
        >
          <FcGoogle className="text-2xl ml-2" /> Enter with Google
        </button>

        <button
          className="login-button login-button-github"
          onClick={() => signIn("github", { callbackUrl: "/menu" })}
        >
          <FaGithub className="text-2xl ml-2" /> Enter with GitHub
        </button>

        <p className="login-footer">Your Login is Safe!🔒</p>
      </div>
    </div>
  );
}


