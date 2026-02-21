import React from "react";
import {
  Plus,
  Search,
  LayoutGrid
} from "lucide-react";

export default function ClassManagementPage() {
  const classes = [
    { code: "19CS-b1" },
    { code: "19MT-b1" },
    { code: "19CS-b1" },
    { code: "19CS-b1" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 text-center border-b border-slate-700">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3" />
            <h2 className="font-bold text-lg">OBE SYSTEM</h2>
          </div>

          <nav className="mt-6 space-y-2 px-4 text-sm">
            <SidebarItem label="ផ្ទាំងគ្រប់គ្រង" />
            <SidebarItem label="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
            <SidebarItem label="គ្រប់គ្រងមុខវិជ្ជា" />
            <SidebarItem label="ការគ្រប់គ្រងថ្នាក់" active />
            <SidebarItem label="ការកំណត់" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-700 text-sm">
          ចាកចេញ
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">ការគ្រប់គ្រង ថ្នាក់</h1>
            <p className="text-gray-500 text-sm">
              បង្កើត និងកែសម្រួលថ្នាក់
            </p>
          </div>

          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg">
            <Plus size={16} />
            បន្ថែមថ្នាក់
          </button>
        </div>

        {/* Statistic Cards */}
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border flex justify-between items-center"
            >
              <LayoutGrid className="text-blue-600 w-8 h-8" />
              <div className="text-right">
                <h2 className="text-2xl font-bold">1300</h2>
                <p className="text-sm text-gray-500">ចំនួនសរុប</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-xl border">

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">បញ្ជីថ្នាក់</h3>

            <div className="flex gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ស្វែងរក"
                  className="pl-9 pr-4 py-2 border rounded-lg"
                />
              </div>

              {/* Dropdown 1 */}
              <select className="border rounded-lg px-3 py-2">
                <option>កម្រិតសិក្សា</option>
              </select>

              {/* Dropdown 2 */}
              <select className="border rounded-lg px-3 py-2">
                <option>ឆ្នាំសិក្សា</option>
              </select>
            </div>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-4 gap-6">
            {classes.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-xl p-5 space-y-3"
              >
                <h2 className="text-lg font-semibold">{item.code}</h2>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>ជំនាញ: វិស្វកម្មកុំព្យូទ័រ</p>
                  <p>ឆ្នាំសិក្សា: 2023-2025</p>
                  <p>វគ្គសិក្សា: ថ្ងៃ-យប់</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
                    កែ
                  </button>
                  <button className="flex-1 border py-2 rounded-lg">
                    លុប
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ label, active }) {
  return (
    <div
      className={`px-4 py-2 rounded-lg cursor-pointer ${
        active ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      {label}
    </div>
  );
}