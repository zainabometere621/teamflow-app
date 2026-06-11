"use client";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <section className="bg-[#0f172a] h-screen w-full flex flex-col space-x-2 px-10 pt-36 text-xl">
      <div className="flex space-x-6 mb-8">
        <button
          onClick={() => setActiveTab("login")}
          className={`${activeTab === "login" ? "text-[#ffffff] border-b-2 border-[#3b82f6] pb-1" : "text-[#94a3b8]"}`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`${activeTab === "register" ? "text-[#ffffff] border-b-2 border-[#3b82f6] pb-1" : "text-[#94a3b8]"}`}
        >
          Register
        </button>
      </div>
      {activeTab === "login" ? <Login /> : <Register />}
    </section>
  );
}
