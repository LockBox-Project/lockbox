"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import './signIn.css';

export default function SignInPage() {
  return (
    <div className="container">
      {/* Lado Esquerdo */}
      <div className="left-panel">
        <div className="logo">
          <Image src="/images/logo.png" alt="LockBox Logo" width={80} height={80} />
        </div>
        <img src="/images/2fa.png" alt="2FA" />
        <img src="/images/2fa.png" alt="2FA" />
        <img src="/images/2fa.png" alt="2FA" />
        <img src="/images/2fa.png" alt="2FA" />

      </div>

      {/* Lado Direito */}
      <div className="right-panel">
        <h1>Welcome back!</h1>
        <p>Login to Continue</p>

        <form className="login-form">
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
      </div>
    </div>
  );
}
