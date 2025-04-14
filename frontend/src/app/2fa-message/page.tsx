"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import './2fa-message.css';




export default function TwoFactorMessage() {
  const router = useRouter();

  const handleSkip = () => {
    window.location.href = '/menu';
  };

  const handleSetup = () => {
    window.location.href = '/2fa-auth';
  };

  return (
    <div className="container">
          <div className="logo">
            <Image src="/images/logo.png" alt="LockBox Logo" width={60} height={60} />
          </div>
          
          <h1>Two-Factor Authentication</h1>
          <p>Protecting your passwords is our top priority.</p>
          <p>Enabling two-factor authentication (2FA) adds an extra layer of</p>
          <p>security to your account.</p>
          <div className = "image">
            <Image src="/images/2fa.png" alt="2FA" width={200} height={200} />
          </div>

          <div className= "two-buttons">
            <button className="Skn" onClick={handleSkip}>Skip for now</button>
            <button className="S2A" onClick={handleSetup}>Setup 2FA</button>
          </div>
    </div>
  );
}
