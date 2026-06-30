"use client";

import Sidebar from "@/components/shared/Sidebar";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { getItem } from "@/lib/db";
export default function Layout({ children }: { children: React.ReactNode }) {
  const { restoreSession, isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    restoreSession();
    const session = getItem("session");
    if (!session) {
      router.push("/");
    }
  }, []);
  return (
    <main className="flex">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1">{children}</div>
    </main>
  );
}
