"use client"

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import Landing from "@/features/auth/components/Landing";
import AuthForm from "@/features/auth/components/AuthForm";
export default function Home() {
  const { restoreSession} = useAuthStore();

useEffect(() => {
  restoreSession();
}, [])
  return (
    <main className="flex">
      <Landing />
      <AuthForm />
    </main>
  );
}
