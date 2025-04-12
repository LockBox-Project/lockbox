"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Image from "next/image";
import './login.css';
import Link from 'next/link';




export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">      
          <div className="logo">
            <Image src="/images/logo.png" alt="LockBox Logo" width={60} height={60} />
          </div>

          {/* Lado Esquerdo */}
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
        <h1>Welcome to LockBox</h1>
        <p>Register to Continue</p>

        <form className="login-form">
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
            </button>
          </div>
          <button type="submit" className="create-btn">Sign In</button>
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
