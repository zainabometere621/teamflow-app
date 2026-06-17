import { Button } from "../ui/button";
import {
  House,
  Kanban,
  SquareCheckBig,
  Users,
  Bell,
  Settings,
  Plus,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <section className="h-screen w-56  bg-[#1e293b] border-r border-[#2d3f55] flex flex-col p-6 justify-between">
      <div className="flex flex-col gap-4 ">
        {/* top */}
        <div className="flex items-center gap-2 border-b border-[#2d3f55] -mx-6 px-6 pb-4">
          <div className=" flex items-center justify-center h-8 w-8 rounded-xl font-bold text-xl bg-gradient-to-br from-[#2563eb] to-[#60a5fa] shadow-md text-[#ffffff]">
            T
          </div>
          <h1 className=" text-[#ffffff] font-semibold">TeamFlow</h1>
        </div>
        {/* middle */}
        <div className="text-[#94a3b8] text-sm flex flex-col gap-2">
          <div className="flex gap-2 items-center -ml-6 pl-6 pr-2 py-2  rounded-lg hover:bg-[#2d3f55] cursor-pointer transition-colors">
            <House className="h-4 w-4" />
            <p>Dashboard</p>
          </div>
          <div  className="flex items-center justify-between -ml-6 pl-6 pr-2 py-2 rounded-lg hover:bg-[#2d3f55] cursor-pointer transition-colors">
            <div className="flex gap-2 items-center">
              <Kanban className="h-4 w-4" />
              <p>Projects</p>
            </div>
            <span className="bg-[#3b82f6] text-[#ffffff] text-xs px-2 py-0.5 rounded-full">
              12
            </span>
          </div>
          <div  className="flex items-center justify-between -ml-6 pl-6 pr-2 py-2 rounded-lg hover:bg-[#2d3f55] cursor-pointer transition-colors">
            <div className="flex gap-2 items-center">
              <SquareCheckBig className="h-4 w-4" />
              <p>Tasks</p>
            </div>
            <span className="bg-[#3b82f6] text-[#ffffff] text-xs px-2 py-0.5 rounded-full">
              24
            </span>
          </div>
          <div className="flex gap-2 items-center -ml-6 pl-6 pr-2 py-2  rounded-lg hover:bg-[#2d3f55] cursor-pointer transition-colors">
            <Users className="h-4 w-4" />
            <p>Team</p>
          </div>
          <div  className="flex items-center py-2 justify-between -ml-6 pl-6 pr-2 py-2  rounded-lg hover:bg-[#2d3f55] cursor-pointer transition-colors">
            <div className="flex gap-2 items-center">
              <Bell className="h-4 w-4" />
              <p>Notifications</p>
            </div>
            <span className="bg-[#3b82f6] text-[#ffffff] text-xs px-2 py-0.5 rounded-full">
              5
            </span>
          </div>
          <div className="flex gap-2 items-center -ml-6 pl-6 pr-2 py-2  rounded-lg hover:bg-[#2d3f55] cursor-pointer transition-colors">
            <Settings className="h-4 w-4" />
            <p>Settings</p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 border-t border-[#2d3f55] -mx-6 px-6 pt-4">
        <div className="flex items-center bg-[#2d3f55] gap-2 px-4 py-2 rounded-lg ">
          <div className=" flex items-center justify-center h-8 w-8 rounded-full font-bold text-xl bg-gradient-to-br from-[#2563eb] to-[#60a5fa] shadow-md text-[#ffffff]">
            A
          </div>
          <div className=" flex flex-col">
            <h1 className="text-[#ffffff] text-sm">Alex Kim</h1>
            <p className="text-[#94a3b8] text-xs">Member</p>
          </div>
        </div>
        <Button className="w-full flex bg-[#3b82f6] text-[#ffffff]">
          <Plus className="h-4 w-4" />
          <p>New Task</p>
        </Button>
        <Button className="w-full border border-[#94a3b8] text-[#94a3b8] ">
          <LogOut className="h-4 w-4" />
          <p>Logout</p>
        </Button>
      </div>
    </section>
  );
}
