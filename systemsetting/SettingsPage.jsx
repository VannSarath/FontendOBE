import React from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Settings,
  LogOut,
  Sun,
  Bell,
  UserCircle,
  List,
  ShieldCheck,
  DatabaseBackup,
  ChevronRight,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* ================= Sidebar ================= */}
      <aside className="w-64 bg-[#1E293B] text-white flex flex-col">
        <div className="p-6 border-b border-slate-600 text-center">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3" />
          <h2 className="text-lg font-semibold">OBE SYSTEM</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
          <MenuItem icon={<LayoutDashboard size={18} />} label="ផ្ទាំងគ្រប់គ្រង" />
          <MenuItem icon={<Users size={18} />} label="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
          <MenuItem icon={<BookOpen size={18} />} label="គ្រប់គ្រងមុខវិជ្ជា" />
          <MenuItem icon={<FileText size={18} />} label="របាយការណ៍" />
          <MenuItem
            icon={<Settings size={18} />}
            label="ការកំណត់ប្រព័ន្ធ"
            active
          />
        </nav>

        <div className="p-4 border-t border-slate-600">
          <button className="flex items-center gap-2 text-sm hover:text-red-400">
            <LogOut size={18} /> ចាកចេញ
          </button>
        </div>
      </aside>

      {/* ================= Main ================= */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">ការកំណត់ប្រព័ន្ធ</h1>
            <p className="text-gray-500 text-sm">កំណត់ប្រព័ន្ធ ទូទៅ</p>
          </div>

          <div className="flex items-center gap-4">
            <Sun size={20} />
            <Bell size={20} />
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gray-400 rounded-full" />
              <span className="font-medium">MA VICHKA</span>
            </div>
          </div>
        </div>

        {/* ================= Content Box ================= */}
        <div className="bg-white border rounded-lg p-8">
          <div className="grid grid-cols-2 gap-8">
            <SettingCard
              icon={<UserCircle size={28} />}
              title="ព័ត៌មានអ្នកប្រើប្រាស់"
              description="បន្ថែម និង កំណត់ព័ត៌មានអ្នកប្រើប្រាស់"
            />

            <SettingCard
              icon={<List size={28} />}
              title="កំណត់លក្ខណៈសម្បត្តិ"
              description="កំណត់លក្ខណៈសម្បត្តិ និងតារាង"
            />

            <SettingCard
              icon={<ShieldCheck size={28} />}
              title="សុវត្ថិភាព"
              description="កំណត់ និង គ្រប់គ្រង សុវត្ថិភាពប្រព័ន្ធ"
            />

            <SettingCard
              icon={<DatabaseBackup size={28} />}
              title="ការរក្សាទុក"
              description="ការបម្រុងទុក និង Back up ទិន្នន័យ"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= Components ================= */

function MenuItem({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-slate-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function SettingCard({ icon, title, description }) {
  return (
    <div className="border rounded-lg p-6 flex items-center justify-between hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="text-black">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <ChevronRight className="text-gray-400" />
    </div>
  );
}