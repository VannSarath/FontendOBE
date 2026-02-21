import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  LogOut,
  Bell,
  Sun,
  MoreVertical,
  Upload,
  X,
  RotateCcw,
  FileSpreadsheet,
} from "lucide-react";

export default function ClassStudentPage2() {
  const [openImport, setOpenImport] = useState(true); // set true to preview modal

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
          <h1 className="text-2xl font-bold mb-2">
            ការគ្រប់គ្រង ថ្នាក់ 19CS-Mb1
          </h1>
          <p className="text-gray-500 text-sm">
            បញ្ជីនិស្សិត និងព័ត៌មានសិក្សា
          </p>
        </div>

        {/* ================= IMPORT MODAL ================= */}
        {openImport && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[650px] rounded-xl shadow-xl p-8 relative">

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">
                  ការនាំចូលនិស្សិត
                </h2>

                <div className="flex gap-4">
                  <RotateCcw className="text-green-500 cursor-pointer" />
                  <X
                    className="text-red-500 cursor-pointer"
                    onClick={() => setOpenImport(false)}
                  />
                </div>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed rounded-xl p-10 text-center mb-8">
                <FileSpreadsheet
                  size={50}
                  className="mx-auto text-green-500 mb-4"
                />

                <p className="mb-3 font-medium">
                  អនុញ្ញាតឲ្យបញ្ចូល EXCEL ប៉ុណ្ណោះ
                </p>

                <button className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto">
                  <Upload size={16} />
                  ជ្រើសរើស ឯកសារ
                </button>

                <p className="text-xs text-gray-500 mt-4">
                  CSV, XLSX អតិបរមា 100MB
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setOpenImport(false)}
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