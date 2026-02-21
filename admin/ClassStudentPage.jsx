import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  LogOut,
  Bell,
  Sun,
  MoreVertical,
  Pencil,
  Download,
  LogOut as ExitIcon,
} from "lucide-react";

export default function ClassStudentPage() {
  const [openMenu, setOpenMenu] = useState(false);

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
      <div className="flex-1 bg-gray-100 min-h-screen">
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
          {/* PAGE HEADER */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                ការគ្រប់គ្រង ថ្នាក់ 19CS-Mb1
              </h1>
              <p className="text-gray-500 text-sm">
                បញ្ជីនិស្សិត និងព័ត៌មានសិក្សា
              </p>
            </div>

            {/* ACTION BUTTON */}
            <div className="relative">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="p-2 border rounded-lg bg-white"
              >
                <MoreVertical size={18} />
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-xl shadow-lg p-4 space-y-3 z-50">
                  <MenuAction icon={<Pencil size={16} />} label="កែប្រែព័ត៌មានថ្នាក់" />
                  <MenuAction icon={<Download size={16} />} label="ទាញយកបញ្ជីនិស្សិត" />
                  <MenuAction icon={<ExitIcon size={16} />} label="ដកនិស្សិតចេញ" />
                </div>
              )}
            </div>
          </div>

          {/* FILTER SECTION */}
          <div className="bg-white border rounded-xl p-6 mb-6">
            <div className="grid grid-cols-3 gap-6">
              <FilterSelect label="ឆ្នាំសិក្សា" />
              <FilterSelect label="ឆមាស" />
              <FilterSelect label="ថ្នាក់" />
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left p-4">លេខសម្គាល់</th>
                  <th className="text-left p-4">ឈ្មោះ</th>
                  <th className="text-left p-4">ថ្នាក់</th>
                  <th className="text-left p-4">អ៊ីមែល</th>
                  <th className="text-left p-4">ស្ថានភាព</th>
                  <th className="text-left p-4">ភេទ</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4">11234</td>

                  <td className="p-4 flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    ម៉ា វិច្ឆិកា
                  </td>

                  <td className="p-4">24CS11Mb1</td>
                  <td className="p-4">machka@gmail.com</td>
                  <td className="p-4">កំពុងសិក្សា</td>
                  <td className="p-4">ប្រុស</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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

function MenuAction({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm">
      {icon}
      {label}
    </div>
  );
}

function FilterSelect({ label }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <select className="w-full border rounded-lg px-4 py-2 bg-white">
        <option>ជ្រើសរើស</option>
      </select>
    </div>
  );
}