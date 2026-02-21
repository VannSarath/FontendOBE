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
  User,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function UserProfileTen() {
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
          <MenuItem icon={<Settings size={18} />} label="ការកំណត់ប្រព័ន្ធ" active />
        </nav>

        <div className="p-4 border-t border-slate-600">
          <button className="flex items-center gap-2 text-sm hover:text-red-400">
            <LogOut size={18} /> ចាកចេញ
          </button>
        </div>
      </aside>

      {/* ================= Main ================= */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">កែប្រែព័ត៌មាន</h1>
            <p className="text-gray-500 text-sm">
              បំពេញ និងកែប្រែព័ត៌មានលម្អិតរបស់អ្នក
            </p>
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

        {/* ================= Profile Card ================= */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          <div className="flex gap-6">
            <div className="w-60 text-center border-r pr-6">
              <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-lg">MA VICHKA</h3>
              <p className="text-sm text-gray-500">អ្នកគ្រប់គ្រងប្រព័ន្ធ</p>

              <div className="flex justify-center gap-2 mt-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
                  សកម្ម
                </span>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                  បានផ្ទៀងផ្ទាត់
                </span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-6">
              <Input label="ឈ្មោះ (Khmer)" />
              <Input label="ឈ្មោះ (English)" />
              <Input label="អ៊ីមែល" />
              <Input label="លេខទូរស័ព្ទ" />
              <Select label="ភេទ" />
              <Select label="តួនាទី" />
            </div>
          </div>
        </div>

        {/* ================= Tabs ================= */}
        <div className="bg-white border rounded-lg">
          <div className="flex gap-6 border-b px-6 py-3 text-sm font-medium">
            <Tab icon={<User size={16} />} label="ព័ត៌មានផ្ទាល់ខ្លួន" />
            <Tab icon={<GraduationCap size={16} />} label="ការអប់រំ" active />
            <Tab icon={<Briefcase size={16} />} label="បទពិសោធន៍" />
          </div>

          {/* ================= Education Content ================= */}
          <div className="p-6 space-y-6">
            {/* 2 column form */}
            <div className="grid grid-cols-2 gap-6">
              <Input label="ជំនាញឯកទេស" />
              <Input label="សាកលវិទ្យាល័យ" />
              <Input label="ឆ្នាំចូលរៀន" />
              <Input label="ឆ្នាំបញ្ចប់" />
            </div>

            {/* Skills Buttons */}
            <div className="flex gap-3">
              <SkillBadge label="C++" color="bg-blue-200 text-blue-700" />
              <SkillBadge label="C#" color="bg-green-200 text-green-700" />
              <SkillBadge label="JAVA" color="bg-red-200 text-red-700" />
              <button className="px-3 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300">
                + បន្ថែម
              </button>
            </div>

            {/* Education List Card */}
            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <span>CyberSecurity</span>
              </div>

              <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                កែប្រែ
              </button>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                រក្សាទុក
              </button>
            </div>
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

function Input({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>ជ្រើសរើស</option>
      </select>
    </div>
  );
}

function Tab({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-2 pb-2 ${
        active
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function SkillBadge({ label, color }) {
  return (
    <span className={`px-3 py-1 text-xs rounded ${color}`}>
      {label}
    </span>
  );
}