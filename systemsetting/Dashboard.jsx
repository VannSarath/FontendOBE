import React from "react";
import {
  Bell,
  Sun,
  Settings,
  Users,
  FileText,
  BookOpen,
  LogOut,
  User,
  ClipboardList,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-white rounded-full mb-3" />
            <h1 className="text-lg font-semibold tracking-wide">
              OBE SYSTEM
            </h1>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 text-sm">
          <SidebarItem icon={<Users size={18} />} label="Dashboard" />
          <SidebarItem icon={<User size={18} />} label="Users" />
          <SidebarItem icon={<BookOpen size={18} />} label="Courses" />
          <SidebarItem icon={<FileText size={18} />} label="Reports" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" active />
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-2 text-sm hover:text-red-400">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">User Management</h2>

          <div className="flex items-center gap-4">
            <Sun className="cursor-pointer" size={20} />
            <Bell className="cursor-pointer" size={20} />
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gray-400 rounded-full" />
              <span className="font-medium">MA VICHKA</span>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="text-center">
              <div className="w-28 h-28 bg-gray-300 rounded-full mb-3" />
              <h3 className="font-semibold text-lg">MA VICHKA</h3>
              <p className="text-sm text-gray-500">Administrator</p>
              <div className="flex gap-2 justify-center mt-2">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
                  Active
                </span>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                  Verified
                </span>
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              <Input label="Name (Khmer)" />
              <Input label="Name (English)" />
              <Input label="Email" />
              <Input label="Phone Number" />
              <Select label="Gender" />
              <Select label="Role" />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow">
          <div className="border-b px-6 py-3 flex gap-6 text-sm font-medium">
            <Tab label="Personal Info" active />
            <Tab label="Education" />
            <Tab label="Experience" />
            <Tab label="Training" />
          </div>

          <div className="p-6 grid grid-cols-3 gap-6">
            <Select label="Nationality" />
            <Input label="Place of Birth" />
            <Input label="Current Address" />
            <Input label="ID Number" />
            <Select label="Marital Status" />
            <Select label="Province" />

            <div className="col-span-3">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Components */

function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition ${
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-slate-800 text-gray-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select</option>
      </select>
    </div>
  );
}

function Tab({ label, active }) {
  return (
    <button
      className={`pb-2 ${
        active
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}