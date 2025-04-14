'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleEnter = () => {
    window.location.href = '/login';
  };

  // Garante que a página volta ao topo ao ser carregada novamente
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = 'black';

    return () => {
      // Reseta ao sair da página, se necessário
      document.body.style.background = '';
    };
  }, []);

  return (
    <div className="bg-black w-full flex max-h-screen flex-col items-center overflow-hidden">
      
      {/* Logotipo no canto superior esquerdo */}
      <div className="absolute top-[0%] left-[0%] flex items-center gap-2">
        <Image src="/images/logo.png" alt="LockBox Logo" width={100} height={100} />
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-start w-full pt-20 px-4">
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-white mb-6">LockBox</h1>

        {/* Imagem */}
        <Image 
          src="/images/mascot.png" 
          alt="LockBox Mascot" 
          width={300} 
          height={300} 
          className="object-contain mb-4"
        />

        {/* Slogan */}
        <p className="text-lg text-white font-light text-center mb-4">
          Securely manage your passwords anywhere
        </p>

        {/* Botão */}
        <button
          onClick={handleEnter}
          className="w-[300px] px-5 py-[15px] rounded-md cursor-pointer text-white text-[16px] font-semibold flex justify-center items-center bg-gradient-to-br from-[#cc3deb] to-[#5b68e4] hover:shadow-[10px_0_20px_#5b69e45c,-10px_0_20px_#cb3deb6e]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
