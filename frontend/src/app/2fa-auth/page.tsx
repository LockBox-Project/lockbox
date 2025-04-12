"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import './2fa-auth.css';




export default function TwoFactorMessage() {
  const router = useRouter();

  const handleSkip = () => {
    router.push("/menu");
  };
  return (
    <div className="container">
          <div className="logo">
            <Image src="/images/logo.png" alt="LockBox Logo" width={60} height={60} />
          </div>
          
          <div className="top-panel">
            <h1>Two-Factor Authentication</h1>
          </div>

        <div className = "bottom-panel">
          <div className = "qr_code">
            <Image src="/images/qr_temp.png" alt="2FA" width={200} height={200} />
          </div>

          <div className="right-panel">
            <div className="number1" style={{ gridArea: "box1" }}></div>
            <div className="number2" style={{ gridArea: "box2" }}></div>
            <div className="text1" style={{ gridArea: "box3" }}>
              <p>Scan the QR code using any authentication application on your phone (e.g. Google Authenticator, Duo Mobile, Authy) 
                or enter the following code:</p>
              <p className="code">YYY23127321DAWJDNASFAWDJSNADWKADSA</p>
            </div>
            <div className="text2" style={{ gridArea: "box4" }}>
              <p>Enter the 6 figure confirmation code shown on the app:</p>
              <div className="code-inputs">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                key={index}
                type="text"
                maxLength={1}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value.length === 1 && target.nextElementSibling) {
                  (target.nextElementSibling as HTMLInputElement).focus();
                  }
                }}
                onKeyDown={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (e.key === "Backspace" && !target.value && target.previousElementSibling) {
                  (target.previousElementSibling as HTMLInputElement).focus();
                  }
                }}
                required
                />
              ))}
              </div>
            </div>

            <div className= "two-buttons" style={{ gridArea: "box5" }}>
              <button className="Cancel" onClick={handleSkip}>Cancel</button>
              <button className="Activate" onClick={handleSkip}>Activate</button>
            </div>
          </div>
        </div>
    </div>
  );
}
