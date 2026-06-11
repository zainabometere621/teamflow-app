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
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Email</label>
        <Input placeholder="you@gmail.com" className="placeholder-[#94a3b8]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          className="placeholder-[#94a3b8]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Login as</label>
        <Select>
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
      <Button className="w-full bg-[#3b82f6] text-[#ffffff]">Sign In</Button>
    </section>
  );
}
