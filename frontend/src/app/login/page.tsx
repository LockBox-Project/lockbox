"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Bem-vindo 👋</h1>
        <p className="text-gray-400 mb-4">Faça login para continuar</p>

        <button
          className="flex items-center justify-center w-full bg-white text-black py-2 rounded-lg shadow-md hover:bg-gray-200 transition-all mb-3"
          onClick={() => signIn("google", { callbackUrl: "/menu" })}
        >
          <FcGoogle className="text-2xl mr-2" /> Entrar com Google
        </button>

        <button
          className="flex items-center justify-center w-full bg-gray-700 text-white py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all"
          onClick={() => signIn("github", { callbackUrl: "/menu" })}
        >
          <FaGithub className="text-2xl mr-2" /> Entrar com GitHub
        </button>

        <p className="text-gray-500 text-sm mt-4">Seu login é seguro 🔒</p>
      </div>
    </div>
  );
}
