import React from "react";
import { X, RefreshCw, FileSpreadsheet } from "lucide-react";

export default function ImportStudentModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-187.5 rounded-xl shadow-xl p-6 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">
            ការនាំចូលនិស្សិតពី Excel
          </h2>

          <div className="flex gap-4 items-center">
            <RefreshCw className="w-5 h-5 text-green-500 cursor-pointer" />
            <X
              className="w-5 h-5 text-red-500 cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">

          <div className="flex justify-center mb-4">
            <FileSpreadsheet className="w-12 h-12 text-green-500" />
          </div>

          <p className="text-gray-700 mb-4">
            អូសឯកសារ EXCEL មកទីនេះ ឬ
          </p>

          <label className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700">
            ជ្រើសរើស ឯកសារ
            <input type="file" className="hidden" accept=".csv,.xlsx" />
          </label>

          <p className="text-sm text-gray-400 mt-4">
            CSV, XLSX អតិបរមា 100MB
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200"
          >
            បោះបង់
          </button>

          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            រក្សាទុក
          </button>
        </div>
      </div>
    </div>
  );
}