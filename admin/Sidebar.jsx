import { LayoutDashboard, BookOpen, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-lg font-bold mb-10">OBE SYSTEM</h1>

        <nav className="space-y-4">
          <MenuItem icon={<LayoutDashboard size={18} />} label="ផ្ទាំងគ្រប់គ្រង" />
          <MenuItem icon={<BookOpen size={18} />} label="គ្រប់គ្រងថ្នាក់" active />
          <MenuItem icon={<Settings size={18} />} label="ការកំណត់" />
        </nav>
      </div>

      <button className="flex items-center gap-2 text-sm">
        <LogOut size={16} /> ចាកចេញ
      </button>
    </div>
  );
}

function MenuItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
      ${active ? "bg-blue-600" : "hover:bg-slate-700"}`}
    >
      {icon}
      {label}
    </div>
  );
}