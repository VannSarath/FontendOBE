import React from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardList,
  Settings,
  LogOut,
  Bell,
  Sun,
  ChevronDown,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-[#f3f4f6]">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3"></div>
            <h1 className="font-bold tracking-wide">OBE SYSTEM</h1>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
          <MenuItem icon={<LayoutDashboard size={18} />} text="ផ្ទាំងគ្រប់គ្រង" />
          <MenuItem icon={<Users size={18} />} text="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
          <MenuItem icon={<BookOpen size={18} />} text="គ្រប់គ្រងមុខវិជ្ជា" />
          <MenuItem icon={<ClipboardList size={18} />} text="ការបញ្ចូលពិន្ទុ" />
          <MenuItem icon={<Settings size={18} />} text="ការកំណត់ប្រព័ន្ធ" active />
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-2 text-sm hover:text-red-400">
            <LogOut size={18} />
            ចាកចេញ
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white px-6 py-4 flex justify-between items-center border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              កែព័ត៌មានផ្ទាល់ខ្លួន
            </h2>
            <p className="text-sm text-gray-500">
              សូមបំពេញ និងកែប្រែព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Sun size={20} className="text-gray-600 cursor-pointer" />
            <Bell size={20} className="text-gray-600 cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">MA VICHKA</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">

          {/* ================= BASIC INFO ================= */}
          <section className="bg-white border rounded-xl p-6">
            <div className="flex gap-6">
              {/* Profile Left */}
              <div className="w-56 text-center">
                <img
                  src="https://i.pravatar.cc/120"
                  className="w-28 h-28 rounded-full mx-auto"
                />
                <h3 className="mt-3 font-semibold">MA VICHKA</h3>
                <p className="text-sm text-gray-500">អគ្គនាយកដ្ឋាន</p>

                <div className="mt-2 space-x-2">
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    សកម្ម
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    បុគ្គលិក
                  </span>
                </div>
              </div>

              {/* Form Right */}
              <div className="flex-1 grid grid-cols-3 gap-5">
                <Input label="ឈ្មោះ (Khmer) *" />
                <Input label="ឈ្មោះ (English) *" />
                <Input label="អ៊ីមែល *" />
                <Input label="លេខទូរស័ព្ទ *" />
                <Select label="ភេទ *" />
                <Select label="ស្ថានភាព *" />
              </div>
            </div>
          </section>

          {/* ================= TABS ================= */}
          <section className="bg-white border rounded-xl">
            {/* Tab Header */}
            <div className="flex border-b px-6 py-3 space-x-6 text-sm font-medium">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
                ព័ត៌មានទំនាក់ទំនង
              </button>
              <button className="text-gray-500 hover:text-blue-600">
                ព័ត៌មានបន្ថែម
              </button>
              <button className="text-gray-500 hover:text-blue-600">
                ឯកសារ
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 grid grid-cols-3 gap-5">
              <Input label="អាសយដ្ឋាន *" />
              <Input label="ខេត្ត/ក្រុង *" />
              <Input label="ប្រទេស *" />
              <Input label="លេខសម្គាល់ *" />
              <Input label="Telegram *" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function MenuItem({ icon, text, active }) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-slate-800"
      }`}
    >
      {icon}
      {text}
    </button>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        <option>ជ្រើសរើស</option>
      </select>
    </div>
  );
}