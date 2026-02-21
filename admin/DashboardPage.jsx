import React from "react";
import {
  Users,
  AlertTriangle,
  Shield,
  Wrench,
  Sun,
  Bell,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardPage() {
  const barData = [
    { name: "2023", a: 750, b: 700 },
    { name: "2024", a: 900, b: 550 },
    { name: "2025", a: 50, b: 40 },
    { name: "2026", a: 80, b: 900 },
    { name: "2027", a: 650, b: 200 },
    { name: "2028", a: 230, b: 210 },
    { name: "2029", a: 400, b: 820 },
    { name: "2030", a: 550, b: 300 },
    { name: "2031", a: 500, b: 120 },
  ];

  const lineData = [
    { name: "1", a: 100, b: 950 },
    { name: "2", a: 850, b: 720 },
    { name: "3", a: 500, b: 480 },
    { name: "4", a: 680, b: 250 },
    { name: "5", a: 150, b: 760 },
  ];

  const pieData = [
    { name: "A", value: 70 },
    { name: "B", value: 25 },
    { name: "C", value: 5 },
  ];

  const COLORS = ["#22c55e", "#f97316", "#3b82f6"];

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
            <SidebarItem label="ផ្ទាំងគ្រប់គ្រង" active />
            <SidebarItem label="គ្រប់គ្រងអ្នកប្រើប្រាស់" />
            <SidebarItem label="គ្រប់គ្រងមុខវិជ្ជា" />
            <SidebarItem label="ការនាំចេញទិន្នន័យ" />
            <SidebarItem label="ការកំណត់" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-700 text-sm">
          ចាកចេញ
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8 space-y-6">
        {/* TOP BAR */}
        <div className="flex justify-end gap-6 items-center">
          <Sun className="w-5 h-5" />
          <Bell className="w-5 h-5" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span className="text-sm font-medium">MA VICHKA</span>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard
            title="អ្នកប្រើប្រាស់សរុប"
            value="1,234"
            icon={<Users />}
            color="bg-blue-600"
          />
          <StatCard
            title="ករណីបញ្ហា"
            value="1,234"
            icon={<AlertTriangle />}
            color="bg-red-600"
          />
          <StatCard
            title="អត្រាសុវត្ថិភាព"
            value="30%"
            icon={<Shield />}
            color="bg-green-600"
          />
          <StatCard
            title="បញ្ហាត្រូវជួសជុល"
            value="1,234"
            icon={<Wrench />}
            color="bg-orange-600"
          />
        </div>

        {/* ALERT BOX */}
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="font-semibold mb-4">ការជូនដំណឹង</h3>
          <div className="space-y-3">
            <div className="p-4 bg-red-100 rounded-lg">⚠️ កំហុសប្រព័ន្ធ</div>
            <div className="p-4 bg-orange-100 rounded-lg">
              ⚠️ សូមពិនិត្យទិន្នន័យ
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              ℹ️ ប្រព័ន្ធដំណើរការធម្មតា
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="font-semibold mb-4">បញ្ជីស្ថិតិប្រចាំឆ្នាំ</h3>
            <BarChart width={500} height={250} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="a" fill="#f97316" />
              <Bar dataKey="b" fill="#0f766e" />
            </BarChart>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="font-semibold mb-4">បញ្ជីប្រចាំខែ</h3>
            <LineChart width={500} height={250} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="a" stroke="#ef4444" />
              <Line type="monotone" dataKey="b" stroke="#a855f7" />
            </LineChart>
          </div>
        </div>

        {/* ANALYTICS CARDS */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border text-center">
            <h3 className="font-semibold mb-4">ស្ថានភាពសរុប</h3>
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
            <p className="mt-2 font-bold">100</p>
          </div>

          <div className="bg-white p-6 rounded-xl border text-center">
            <h3 className="font-semibold mb-4">ការវាយតម្លៃ</h3>
            <div className="text-4xl font-bold text-orange-500">82.9</div>
          </div>

          <div className="bg-white p-6 rounded-xl border text-center">
            <h3 className="font-semibold mb-4">សុវត្ថិភាព</h3>
            <div className="text-4xl font-bold text-red-400">82.9</div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="font-semibold mb-4">កំណត់ត្រាសកម្មភាព</h3>
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-3">ម៉ោង</th>
                <th>អ្នកប្រើប្រាស់</th>
                <th>សកម្មភាព</th>
                <th>IP Address</th>
                <th>ស្ថានភាព</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">23:34:37</td>
                  <td>user003</td>
                  <td>ចូលប្រព័ន្ធ</td>
                  <td>192.168.1.74</td>
                  <td className="text-yellow-600">ជោគជ័យ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

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

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-6 rounded-xl border flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
      <div className={`${color} text-white p-3 rounded-full`}>
        {icon}
      </div>
    </div>
  );
}