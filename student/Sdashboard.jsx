import React from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Sun,
} from "lucide-react";

export default function Sdashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col justify-between">

        <div>
          {/* Logo */}
          <div className="p-6 flex flex-col items-center border-b border-slate-700">
            <div className="w-20 h-20 bg-white rounded-full mb-3" />
            <h2 className="font-bold text-lg">OBE SYSTEM</h2>
          </div>

          {/* Menu */}
          <nav className="mt-6 space-y-2 px-4">

            <MenuItem icon={<LayoutDashboard size={18} />} label="ផ្ទាំងគ្រប់គ្រង" active />
            <MenuItem icon={<Users size={18} />} label="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
            <MenuItem icon={<FileText size={18} />} label="របាយការណ៍" />
            <MenuItem icon={<Settings size={18} />} label="ការកំណត់" />

          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-2 text-sm hover:text-red-400">
            <LogOut size={18} /> ចាកចេញ
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8">

        {/* ======= TOP NAV ======= */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">តំបន់គ្រប់គ្រង</h1>

          <div className="flex items-center gap-6">
            <Sun size={20} className="cursor-pointer" />
            <Bell size={20} className="cursor-pointer" />

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">MA VICHKA</span>
            </div>
          </div>
        </div>

        {/* ======= PROFILE CARD ======= */}
        <div className="bg-white p-6 rounded-xl border mb-6 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">MA VICHKA</h2>
              <p className="text-sm text-gray-500">អត្តលេខ: 746648</p>
              <p className="text-sm text-gray-500">តួនាទី: អ្នកប្រើប្រាស់</p>
            </div>
          </div>

          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
            កែប្រែព័ត៌មាន
          </button>
        </div>

        {/* ======= TWO INFO CARDS ======= */}
        <div className="grid grid-cols-2 gap-6 mb-6">

          <div className="bg-white p-6 rounded-xl border h-40">
            <h3 className="font-semibold mb-3">ព័ត៌មានបន្ថែម</h3>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="font-semibold mb-3">ព័ត៌មានទំនាក់ទំនង</h3>
            <p>Email: cgs@gmail.com</p>
            <p>ទូរស័ព្ទ: +855 947 468 474</p>
            <p>អាសយដ្ឋាន: pp,dyd</p>
          </div>

        </div>

        {/* ======= STATISTICS SECTION ======= */}
        <div className="bg-white p-6 rounded-xl border mb-6">
          <h3 className="font-semibold mb-6">ស្ថិតិរបស់អ្នក</h3>

          <div className="grid grid-cols-4 gap-6">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
        </div>

        {/* ======= SETTINGS SECTION ======= */}
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="font-semibold mb-6">ការកំណត់</h3>

          <SettingItem
            title="ការជូនដំណឹង"
            description="Email, SMS, Push notifications"
          />

          <SettingItem
            title="ស្បែក"
            description="ការកំណត់ពន្លឺ / ងងឹត"
          />

          <div className="flex justify-between items-center border rounded-lg p-4">
            <div>
              <p className="font-medium">ភាសា</p>
              <p className="text-sm text-gray-500">
                ប្ដូរភាសានៃប្រព័ន្ធ
              </p>
            </div>
            <select className="border px-3 py-1 rounded-md">
              <option>ខ្មែរ</option>
              <option>English</option>
            </select>
          </div>

        </div>

      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

// eslint-disable-next-line react-refresh/only-export-components
function MenuItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm
      ${active ? "bg-blue-600" : "hover:bg-slate-700"}`}
    >
      {icon}
      {label}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function StatCard() {
  return (
    <div className="h-24 bg-gray-100 rounded-lg border"></div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function SettingItem({ title, description }) {
  return (
    <div className="flex justify-between items-center border rounded-lg p-4 mb-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}