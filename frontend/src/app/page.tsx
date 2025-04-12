'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/login');
  };

  return (
    <div className="relative bg-black max-h-screen overflow-hidden">
      {/* Logotipo no canto superior esquerdo */}
      <div className="absolute top-2 left-2 flex items-center gap-2">
        <Image src="/images/logo.png" alt="LockBox Logo" width={100} height={100} />
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-start max-h-screen pt-16 px-4">
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-white mb-6">
          LockBox
        </h1>

        {/* Imagem com slogan e botão */}
        <div className="flex flex-col justify-center items-center space-y-4 relative">
          <Image 
            src="/images/mascot.png" 
            alt="LockBox Mascot" 
            width={400} 
            height={400} 
            className="object-contain"
          />

          <p className="absolute text-lg text-white font-light top-3/4 z-10 text-center">
            Securely manage your passwords anywhere
          </p>

          <button
            onClick={handleEnter}
            className="absolute top-[85%] z-10 w-[300px] px-5 py-[15px] rounded-md cursor-pointer text-white text-[16px] font-semibold flex justify-center items-center bg-gradient-to-br from-[#cc3deb] to-[#5b68e4] hover:shadow-[10px_0_20px_#5b69e45c,-10px_0_20px_#cb3deb6e]"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
