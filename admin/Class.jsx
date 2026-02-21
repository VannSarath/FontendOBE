import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  LogOut,
  Bell,
  Sun,
  Pencil,
  Eye,
} from "lucide-react";

export default function Class() {
  return (
    <div className="flex font-sans">
      {/* ================= SIDEBAR ================= */}
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

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* ================= NAVBAR ================= */}
        <div className="flex justify-end items-center gap-6 p-4 border-b bg-white">
          <Sun size={18} />
          <Bell size={18} />
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
              alt="profile"
            />
            <span className="font-medium">MA VICHKA</span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* ================= PAGE HEADER ================= */}
          <div>
            <h1 className="text-2xl font-bold">ការគ្រប់គ្រង ថ្នាក់</h1>
            <p className="text-gray-500 text-sm">
              បង្ហាញព័ត៌មាន និងមុខវិជ្ជាសិក្សា
            </p>
          </div>

          {/* ================= CLASS INFO CARD ================= */}
          <div className="bg-gray-50 border rounded-xl p-6 relative">
            <Pencil className="absolute top-4 right-4 text-yellow-500 cursor-pointer" />

            <div className="grid grid-cols-3 gap-6 text-sm">
              <Info label="លេខកូដថ្នាក់" value="19CS-b1" />
              <Info label="ជំនាញ" value="CS" />
              <Info label="ឆ្នាំ" value="I" />

              <Info label="ឈ្មោះជំនាញ" value="Computer Science" />
              <Info label="កម្រិតសិក្សា" value="Computer Science" />
              <Info label="ប្រភេទ" value="ពេញម៉ោង" />

              <Info label="ឆ្នាំសិក្សា" value="2024" />
              <Info label="វគ្គសិក្សា" value="មួយ - ព្រឹក" />
              <Info label="ចំនួនមុខវិជ្ជា" value="4 មុខ" />
            </div>
          </div>

          {/* ================= SEMESTER SECTION ================= */}
          <div className="grid grid-cols-2 gap-8">
            <SemesterColumn title="ឆមាសទី១" />
            <SemesterColumn title="ឆមាសទី២" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS INSIDE SAME FILE ================= */

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

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function SemesterColumn({ title }) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">
      <h2 className="font-semibold mb-4">{title}</h2>

      <SubjectCard
        title="19CS11Mb1"
        year="2023-2025"
        semester="I"
      />

      <SubjectCard
        title="19CS11Mb1"
        year="2025-2026"
        semester="II"
      />
    </div>
  );
}

function SubjectCard({ title, year, semester }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm mb-4">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>

        <div className="flex gap-3">
          <Eye size={18} className="text-blue-600 cursor-pointer" />
          <Pencil size={18} className="text-yellow-500 cursor-pointer" />
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-2 space-y-1">
        <p>និស្សិត: 50 នាក់</p>
        <p>ឆ្នាំសិក្សា: {year}</p>
        <p>សម័យ: {semester}</p>
      </div>
    </div>
  );
}