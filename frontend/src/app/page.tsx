'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import './home.css';

const HomePage = () => {
  const router = useRouter();

  const handleEnter = () => {
    window.location.href = '/login';
  };


  return (
    <div className="">
      
      {/* Logotipo no canto superior esquerdo */}
      <div className="logo">
        <Image src="/images/logo.png" alt="LockBox Logo" width={160} height={160} />
      </div>

      {/* Conteúdo principal */}
      <div className="container">
        
        {/* Título */}
        <h1>LockBox</h1>

        {/* Imagem */}
        <Image 
          src="/images/mascot.png" 
          alt="LockBox Mascot" 
          width={300} 
          height={300} 
          className="object-contain mb-4"
        />

        {/* Slogan */}
        <p>Securely manage your passwords anywhere</p>

        {/* Botão */}
        <button
          onClick={handleEnter}
          className="home-btn"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
