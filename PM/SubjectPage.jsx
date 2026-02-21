import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function SubjectPage() {
  const [activeTab, setActiveTab] = useState("active");

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
          <nav className="mt-6 space-y-2 px-4 text-sm">
            <SidebarItem label="ផ្ទាំងគ្រប់គ្រង" />
            <SidebarItem label="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
            <SidebarItem label="គ្រប់គ្រងមុខវិជ្ជា" active />
            <SidebarItem label="ការនាំចេញទិន្នន័យ" />
            <SidebarItem label="ការកំណត់" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-700 text-sm">
          ចាកចេញ
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            ការគ្រប់គ្រង មុខវិជ្ជា
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            បង្កើតមុខវិជ្ជា និងកំណត់សកម្មភាពមុខវិជ្ជា
          </p>
        </div>

        {/* Tabs + Add Button */}
        <div className="bg-white rounded-xl p-6 border">

          <div className="flex justify-between items-center mb-6">
            {/* Tabs */}
            <div className="flex gap-8 text-sm font-medium">
              <button
                onClick={() => setActiveTab("active")}
                className={`pb-2 border-b-2 ${
                  activeTab === "active"
                    ? "border-blue-600 text-black"
                    : "border-transparent text-gray-500"
                }`}
              >
                មុខវិជ្ជាសកម្ម
              </button>

              <button
                onClick={() => setActiveTab("inactive")}
                className={`pb-2 border-b-2 ${
                  activeTab === "inactive"
                    ? "border-blue-600 text-black"
                    : "border-transparent text-gray-500"
                }`}
              >
                មុខវិជ្ជាមិនសកម្ម
              </button>
            </div>

            {/* Add Button */}
            <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
              <Plus size={16} />
              បង្កើតមុខវិជ្ជា
            </button>
          </div>

          {/* Table */}
          <div className="rounded-lg overflow-hidden border">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-4">កូដ</th>
                  <th>ឈ្មោះមុខវិជ្ជា</th>
                  <th>ឈ្មោះសញ្ញា</th>
                </tr>
              </thead>

              <tbody>
                {/* Empty State */}
                <tr>
                  <td colSpan="3" className="h-96 text-center text-gray-400">
                    មិនមានទិន្នន័យ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </main>
    </div>
  );
}

/* Sidebar Component */
function SidebarItem({ label, active }) {
  return (
    <div
      className={`px-4 py-2 rounded-lg cursor-pointer
      ${active ? "bg-blue-600" : "hover:bg-slate-700"}`}
    >
      {label}
    </div>
  );
}