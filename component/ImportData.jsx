import React from "react";
import {
  FileSpreadsheet,
  Upload,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";

export default function ImportData() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col justify-between">

        <div>
          <div className="p-6 flex flex-col items-center border-b border-slate-700">
            <div className="w-20 h-20 bg-white rounded-full mb-3" />
            <h2 className="font-bold text-lg">OBE SYSTEM</h2>
          </div>

          <nav className="mt-6 space-y-2 px-4 text-sm">
            <SidebarItem label="ផ្ទាំងគ្រប់គ្រង" />
            <SidebarItem label="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
            <SidebarItem label="របាយការណ៍" active />
            <SidebarItem label="ការកំណត់" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-700 text-sm">
          ចាកចេញ
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8">

        {/* ===== PAGE HEADER ===== */}
        <div className="flex items-center gap-3 mb-6">
          <FileSpreadsheet size={28} />
          <div>
            <h1 className="text-2xl font-bold">
              ការនាំ Data ទិន្នន័យ
            </h1>
            <p className="text-sm text-gray-500">
              ការនាំទិន្នន័យពី Excel ឬ CSV
            </p>
          </div>
        </div>

        {/* ===== IMPORT CARD ===== */}
        <div className="bg-white rounded-xl border p-8 mb-8">

          <div className="flex justify-between mb-6">
            <h2 className="font-semibold text-lg">Import Data</h2>
            <span className="text-sm text-gray-500">
              Upload Excel / CSV
            </span>
          </div>

          {/* Upload Area */}
          <div className="border-2 border-dashed rounded-lg p-10 text-center mb-6">
            <p className="text-gray-500 mb-4">
              អូស & ទម្លាក់ឯកសារ នៅទីនេះ
            </p>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              ជ្រើសរើស FILE
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg">
              <Upload size={16} />
              ផ្ទុកឡើង
            </button>

            <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg">
              <CheckCircle size={16} />
              រក្សាទុក
            </button>

            <button className="flex items-center gap-2 bg-gray-400 text-white px-6 py-2 rounded-lg">
              <XCircle size={16} />
              បោះបង់
            </button>
          </div>
        </div>

        {/* ===== TABLE SECTION ===== */}
        <div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">
              ប្រវត្តិនាំចូល
            </h2>

            <div className="flex gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ស្វែងរក File"
                  className="pl-8 pr-4 py-2 border rounded-lg text-sm"
                />
              </div>

              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm">
                <Filter size={16} />
                Status
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border overflow-hidden">

            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-4">ឈ្មោះ File</th>
                  <th>អ្នកបង្កើត</th>
                  <th>កាលបរិច្ឆេទ</th>
                  <th>ប្រភេទ</th>
                  <th>ស្ថានភាព</th>
                  <th className="p-4">សកម្មភាព</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4">JVP64</td>
                  <td>Admin</td>
                  <td>01/02/2026</td>
                  <td>Excel</td>
                  <td className="text-green-600 font-medium">
                    Success
                  </td>
                  <td className="p-4 flex gap-3">
                    <Eye size={16} className="cursor-pointer text-blue-600" />
                    <Edit size={16} className="cursor-pointer text-yellow-600" />
                    <Trash2 size={16} className="cursor-pointer text-red-600" />
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

/* Sidebar Item Component */
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