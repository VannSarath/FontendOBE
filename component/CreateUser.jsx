import React from "react";
import { ChevronDown, RotateCcw, X } from "lucide-react";

export default function CreateUser() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Container */}
      <div className="bg-white rounded-2xl shadow-lg p-10 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">
            ការបង្កើតគណនី
          </h1>

          <div className="flex items-center gap-6">
            <ChevronDown size={22} className="cursor-pointer text-gray-600" />
            <RotateCcw size={22} className="cursor-pointer text-green-500" />
            <X size={24} className="cursor-pointer text-red-500" />
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-x-16 gap-y-8">

          {/* Left Column */}
          <div>
            <Label text="ឈ្មោះអ្នកប្រើប្រាស់" required />
            <Input />
          </div>

          <div>
            <Label text="តួនាទី" required />
            <Input />
          </div>

          <div>
            <Label text="អ៊ីមែល" required />
            <Input />
          </div>

          <div>
            <Label text="ពាក្យសម្ងាត់" required />
            <Input type="password" />
          </div>

          <div>
            <Label text="លេខទូរស័ព្ទ" required />
            <Input />
          </div>

          <div>
            <Label text="ស្ថានភាព" required />
            <Input />
          </div>

        </form>

        {/* Checkbox */}
        <div className="mt-8 flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-lg">ផ្តល់សិទ្ធិការងារ</span>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-12">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-3 rounded-xl text-lg font-semibold">
            SAVE
          </button>
        </div>

      </div>
    </div>
  );
}

/* Reusable Components */

function Label({ text, required }) {
  return (
    <label className="block text-lg font-medium mb-3">
      {text}{required && <span className="text-red-500">*</span>}
    </label>
  );
}

function Input({ type = "text" }) {
  return (
    <input
      type={type}
      className="w-full border-2 border-gray-400 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-600"
    />
  );
}