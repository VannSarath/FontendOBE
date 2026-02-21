import { Pencil, Eye } from "lucide-react";

export default function SubjectCard({ title, year, semester }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm mb-4">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>

        <div className="flex gap-3">
          <Eye size={18} className="text-blue-600 cursor-pointer" />
          <Pencil size={18} className="text-yellow-500 cursor-pointer" />
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-2 space-y-1">
        <p>និស្សិត: 50 នាក់</p>
        <p>ឆ្នាំសិក្សា: {year}</p>
        <p>សម័យ: {semester}</p>
      </div>
    </div>
  );
}