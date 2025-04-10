"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import './signin.css';

export default function SignInPage() {
  return (
    <div className="container">
      {/* Lado Esquerdo */}
      <div className="logo">
        <Image src="/images/logo.png" alt="LockBox Logo" width={60} height={60} />
      </div>
      
      <div className="left-panel">
      <div className="image-grid">
        <div>
          <img src="/images/2fa.png" alt="2FA" />
          <p>2FA</p>
        </div>
        <div>
          <img src="/images/2fa.png" alt="2FA" />
          <p>2FA</p>
        </div>
        <div>
          <img src="/images/2fa.png" alt="2FA" />
          <p>2FA</p>
        </div>
        <div>
          <img src="/images/2fa.png" alt="2FA" />
          <p>2FA</p>
        </div>
      </div>
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

        <div className="alt-login-text">Or login with</div>

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
