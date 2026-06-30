"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { register } = useAuthStore();
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Full Name</label>
        <Input
          placeholder="John Doe"
          className="placeholder-[#94a3b8]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Email</label>
        <Input
          placeholder="you@gmail.com"
          className="placeholder-[#94a3b8]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          className="placeholder-[#94a3b8]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Role</label>
        <Select onValueChange={(value) => setRole(value)}>
          <SelectTrigger className="bg-[#1e293b] border-[#2d3f55] text-[#ffffff]">
            <SelectValue placeholder="Member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="member">Member</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">manager</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {error && <p className="text-[#ef4444] text-sm">{error}</p>}
      <Button
        className="w-full bg-[#3b82f6] text-[#ffffff]"
        onClick={() => {
          if (name === "" || email === "" || password === "" || role === "") {
            setError("Please fill in all fields");
          } else {
            setError("");
            register(name, password, email, role);
            router.push("/dashboard");
          }
        }}
      >
        Create account
      </Button>
    </section>
  );
}
