import { Pencil } from "lucide-react";

export default function InfoCard() {
  return (
    <div className="bg-gray-50 border rounded-xl p-6 relative">
      <Pencil className="absolute top-4 right-4 text-yellow-500 cursor-pointer" />

      <div className="grid grid-cols-3 gap-6 text-sm">
        <Info label="លេខកូដថ្នាក់" value="19CS-b1" />
        <Info label="ជំនាញ" value="CS" />
        <Info label="ឆ្នាំ" value="I" />

        <Info label="ឈ្មោះជំនាញ" value="Computer Science" />
        <Info label="កម្រិតសិក្សា" value="Computer Science" />
        <Info label="ប្រភេទ" value="ពេញម៉ោង" />

        <Info label="ឆ្នាំសិក្សា" value="2024" />
        <Info label="វគ្គសិក្សា" value="មួយ - ព្រឹក" />
        <Info label="ចំនួនមុខវិជ្ជា" value="4 មុខ" />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}