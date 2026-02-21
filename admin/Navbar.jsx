import { Bell, Sun } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-6 p-4 border-b bg-white">
      <Sun size={18} />
      <Bell size={18} />
      <div className="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">MA VICHKA</span>
      </div>
    </div>
  );
}