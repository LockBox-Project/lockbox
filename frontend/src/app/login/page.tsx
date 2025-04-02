"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => signIn("google")}
      >
        Entrar com Google
      </button>
      <button
        className="mt-2 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => signIn("github")}
      >
        Entrar com GitHub
      </button>
    </div>
  );
}
