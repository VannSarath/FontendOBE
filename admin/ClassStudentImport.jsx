import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  LogOut,
  Bell,
  Sun,
  RotateCcw,
  X,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

export default function ClassStudentImport() {
  const [openModal, setOpenModal] = useState(true);

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

      {/* ================= MAIN ================= */}
      <div className="flex-1 bg-gray-100 min-h-screen relative">
        {/* NAVBAR */}
        <div className="flex justify-end items-center gap-6 p-4 border-b bg-white">
          <Sun size={18} />
          <Bell size={18} />
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <span className="font-medium">MA VICHKA</span>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-bold">
            ការគ្រប់គ្រង ថ្នាក់ 19CS-Mb1
          </h1>
          <p className="text-gray-500 text-sm">
            បញ្ជីនិស្សិត និងព័ត៌មានសិក្សា
          </p>
        </div>

        {/* ================= MODAL ================= */}
        {openModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[750px] rounded-xl shadow-xl p-8 relative">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">
                  ការនាំចូលនិស្សិត
                </h2>

                <div className="flex gap-4">
                  <RotateCcw className="text-green-500 cursor-pointer" />
                  <X
                    className="text-red-500 cursor-pointer"
                    onClick={() => setOpenModal(false)}
                  />
                </div>
              </div>

              {/* TEMPLATE TYPE */}
              <div className="mb-6">
                <p className="font-medium mb-3">ជ្រើសរើសប្រភេទ</p>

                <div className="flex gap-4">
                  <TemplateButton icon={<FileSpreadsheet size={18} />} label="Excel" active />
                  <TemplateButton icon={<FileSpreadsheet size={18} />} label="Excel" />
                  <TemplateButton icon={<FileText size={18} />} label="Excel" />
                </div>
              </div>

              {/* SELECTED TEMPLATE */}
              <div className="border-2 border-dashed rounded-lg p-4 mb-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="text-green-600" />
                  <span className="text-sm">
                    គំរូនាំចូល-និស្សិត 19CS-MB
                  </span>
                </div>

                <button className="text-yellow-500 text-sm">
                  កែប្រែ
                </button>
              </div>

              {/* FIELD MAPPING */}
              <div className="mb-6">
                <p className="font-medium mb-3">ជ្រើសវាល</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Checkbox label="លេខសម្គាល់" />
                  <Checkbox label="ឈ្មោះ" />
                  <Checkbox label="ភេទ" />
                  <Checkbox label="អ៊ីមែល" />
                  <Checkbox label="ថ្នាក់" />
                  <Checkbox label="ស្ថានភាព" />
                </div>
              </div>

              {/* FILE INPUT */}
              <div className="mb-8">
                <label className="block text-sm mb-2">ជ្រើសរើស File</label>
                <input
                  type="file"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-6 py-2 border rounded-lg"
                >
                  បោះបង់
                </button>

                <button className="px-6 py-2 bg-blue-700 text-white rounded-lg">
                  រក្សាទុក
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

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

function TemplateButton({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer text-sm
      ${active ? "border-green-600 bg-green-50" : "hover:bg-gray-50"}`}
    >
      {icon}
      {label}
    </div>
  );
}

function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4" />
      {label}
    </label>
  );
}