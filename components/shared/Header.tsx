import { Search, Bell, LayoutGrid } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Header({ title }: { title: string }) {
  return (
    <section className="flex h-10.25 p-6 sticky top-0 z-10 bg-[#0f172a] items-center justify-between border-b border-[#2d3f55] p-4">
      {/* leftiteems */}
      <div>
        <h1 className="text-[#ffffff] font-medium text-3xl">{title}</h1>
      </div>
      {/* right items */}
      <div className="flex items-center gap-4">
        <div className="relative space-x-2">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2  text-[#94a3b8] "/>
          <Input
            placeholder="Search tasks, projects"
            className="placeholder-[#94a3b8] px-10 w-64 "
          />

          <span className="bg-[#2d3f55] absolute right-5 top-1/2  -translate-y-1/2  text-[#94a3b8] px-1 py-1 text-sm rounded-md">
            {" "}
            ⌘ K
          </span>
        </div>
        <Bell className="h-4 w-4 text-[#94a3b8]"/>
        <LayoutGrid className="h-4 w-4 text-[#94a3b8]"/>
        <Button className="px-4 flex bg-[#3b82f6] text-[#ffffff]">
          {/* <Plus className="h-4 w-4" /> */}
          New Task
        </Button>
      </div>
    </section>
  );
}
