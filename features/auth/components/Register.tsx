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
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] text-base">Full Name</label>
        <Input placeholder="John Doe" className="placeholder-[#94a3b8]" />
      </div>
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
        <label className="text-[#ffffff] text-base">Role</label>
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
      <Button className="w-full bg-[#3b82f6] text-[#ffffff]">
        Create account
      </Button>
    </section>
  );
}
