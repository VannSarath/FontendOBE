import React from "react";
import { X, RefreshCw, ChevronDown } from "lucide-react";

export default function ClassFormModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[950px] rounded-xl shadow-xl p-8 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">
            បន្ថែមថ្នាក់ថ្មី
          </h2>

          <div className="flex gap-4 items-center">
            <ChevronDown className="w-5 h-5 cursor-pointer" />
            <RefreshCw className="w-5 h-5 text-green-500 cursor-pointer" />
            <X
              className="w-5 h-5 text-red-500 cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-8">

          <FormSelect label="កម្មវិធីសិក្សា" required />
          <FormSelect label="ឆ្នាំសិក្សា" required />

          <FormSelect label="ជំនាញ" required />
          <FormSelect label="កម្រិតសិក្សា" required />

          <FormSelect label="វគ្គសិក្សា" required />
          <FormSelect label="វេន" required />

        </div>

        {/* Generated Code */}
        <div className="mt-10 text-gray-700">
          លេខកូដ៖ <span className="font-semibold">19CS - b1</span>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-10">
          <button className="bg-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-800">
            រក្សាទុក
          </button>
        </div>

      </div>
    </div>
  );
}


/* Reusable Select Field */
function FormSelect({ label, required }) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <select className="w-full border rounded-lg px-4 py-3 appearance-none">
          <option>ជ្រើសរើស</option>
        </select>

        <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}