import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-200 flex items-center justify-center">

      {/* Top Left Logo Section */}
      <div className="absolute top-0 left-0">
        <div className="w-64 h-64 bg-orange-500 rounded-br-[200px] flex items-center justify-center">
          <div className="w-28 h-28 bg-white rounded-full" />
        </div>
      </div>

      {/* Page Title */}
      <h1 className="absolute top-16 left-80 text-3xl font-bold">
        សាកលវិទ្យាល័យ...
      </h1>

      {/* Login Card */}
      <div className="relative bg-white w-125 rounded-2xl shadow-xl p-10">

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-orange-500 rounded-br-[100px]" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-500 rounded-tl-[100px]" />

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">ចូលប្រើប្រាស់</h2>
          <p className="text-gray-500 text-sm mt-2">
            សូមបញ្ចូលព័ត៌មានគណនីរបស់អ្នក
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-2">
              ឈ្មោះអ្នកប្រើប្រាស់ ឬ អ៊ីមែល *
            </label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100">
              <User size={18} className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់..."
                className="bg-transparent flex-1 outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              ពាក្យសម្ងាត់ *
            </label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100">
              <Lock size={18} className="text-gray-500 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="បញ្ចូលពាក្យសម្ងាត់..."
                className="bg-transparent flex-1 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-500" />
                ) : (
                  <Eye size={18} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              ចងចាំខ្ញុំ
            </label>
            <button className="text-gray-600 hover:underline">
              ភ្លេចពាក្យសម្ងាត់?
            </button>
          </div>

          {/* Button */}
          <button className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
            SIGN UP
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-4">
            មិនទាន់មានគណនីទេ?
          </p>
        </div>
      </div>
    </div>
  );
}