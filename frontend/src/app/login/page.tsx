"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import './login.css';

export default function LoginPage() {
  return (
    <div className="container">
      {/* Lado Esquerdo */}
      <div className="left-panel">
        <div className="logo">
          <h2>LockBox</h2>
          <Image src="/images/favicon.png" alt="LockBox Logo" width={80} height={80} />
        </div>
        <img src="/images/2fa.png" alt="2FA" />
        <img src="/images/2fa.png" alt="2FA" />
        <img src="/images/2fa.png" alt="2FA" />
        <img src="/images/2fa.png" alt="2FA" />

      </div>

      {/* Lado Direito */}
      <div className="right-panel">
        <h1>Welcome to LockBox</h1>
        <p>Register to Continue</p>

        <form className="login-form">
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="create-btn">Create account</button>
        </form>

        <div className="alt-login-text">Or register with</div>

        <div className="alt-login">
          <button
            className="google-btn"
            onClick={() => signIn("google", { callbackUrl: "/menu" })}
          >
            <FcGoogle className="icon" /> Google
          </button>
          <button
            className="github-btn"
            onClick={() => signIn("github", { callbackUrl: "/menu" })}
          >
            <FaGithub className="icon" /> Github
          </button>
        </div>

        <div className="signin-link">
          Already a member? <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
}
