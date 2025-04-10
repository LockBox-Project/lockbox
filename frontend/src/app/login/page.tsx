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
        <h1>Welcome to LockBox</h1>
        <p>Register to Continue</p>

        <form className="login-form">
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Enter your password" required />
          <button className="tooltip-button">
            <span className="tooltip-button-text">
              Hover For Tooltip
            </span>
            <div className="tooltip-container">
              <div className="tooltip-content">
                <div className="tooltip-box">
                  <p>This is a tooltip.</p>
                </div>
                <div className="tooltip-arrow"></div>
              </div>
            </div>
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
          Already a member? <Link href="/signin">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
