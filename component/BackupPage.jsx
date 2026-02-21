import React from "react";
import { ChevronDown } from "lucide-react";

export default function BackupPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-16">

      {/* Top Right Text */}
      <div className="absolute top-8 right-12 text-gray-700 text-lg">
        ទាញយកឯកសារ backup
      </div>

      {/* Title Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          នាំទិន្នន័យចេញ
        </h1>
        <p className="text-lg text-gray-600">
          ទាញយកទិន្នន័យរបស់ប្រព័ន្ធជារៀងរាល់ពេល ដើម្បីរក្សាទុកឯកសាររបស់អ្នក
        </p>
      </div>

      {/* Dropdown */}
      <div className="mt-16 w-full max-w-2xl">
        <div className="flex items-center justify-between border-2 border-gray-400 rounded-xl px-6 py-4 bg-white cursor-pointer">
          <span className="text-lg">
            ជ្រើសរើសប្រភេទទិន្នន័យ
          </span>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-16 flex gap-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-5 rounded-xl shadow-md transition">
          ទាញយកជា EXCEL
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-5 rounded-xl shadow-md transition">
          ទាញយកជា CSV
        </button>
      </div>

    </div>
  );
}