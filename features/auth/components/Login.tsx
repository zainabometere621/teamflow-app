"use client";

import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { login, currentUser, isLoggedIn } = useAuthStore();
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <section className="space-y-6">
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
        <label className="text-[#ffffff] text-base">Login as</label>
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
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox className="h-4 w-4 border border-[#94a3b8] bg-[#ffffff] data-[state=checked]:bg-[#3b82f6] data-[state=checked]:border-[#3b82f6]" />
          <label className="text-base text-[#94a3b8]">Remember me</label>
        </div>
        <div>
          <label className="text-base text-[#3b82f6]">Forgot password?</label>
        </div>
      </div>
      <p className="text-white">
        {JSON.stringify(currentUser)} -{" "}
        {isLoggedIn ? "Logged in" : "Not logged in"}
      </p>
      {error && <p className="text-[#ef4444] text-sm">{error}</p>}
      <Button
        className="w-full bg-[#3b82f6] text-[#ffffff]"
        onClick={() => {
          if (role === "") {
            setError("Please select a role");
          } else {
            const success = login(email, password, role);
            if (!success) {
              setError("Incorrect email, password or role");
            } else {
              setError("");
              router.push("/dashboard");
            }
          }
        }}
      >
        Sign In
      </Button>
    </section>
  );
}
