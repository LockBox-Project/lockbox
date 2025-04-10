"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import './login.css';
import Link from 'next/link';




export default function LoginPage() {
  return (
    <div className="container">
      {/* Logo in the top-right corner */}
      <div className="logo">
        <Image src="/images/logo.png" alt="LockBox Logo" width={100} height={100} />
      </div>

      {/* Left Panel */}
      <div className="left-panel">
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
            <button className="create-btn" type="submit">
            Create Account
            </button>
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
          Already a member? <Link href="/signIn">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
