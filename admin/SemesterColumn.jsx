import SubjectCard from "./SubjectCard";

export default function SemesterColumn({ title }) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">
      <h2 className="font-semibold mb-4">{title}</h2>

      <SubjectCard
        title="19CS11Mb1"
        year="2023-2025"
        semester="I"
      />

      <SubjectCard
        title="19CS11Mb1"
        year="2025-2026"
        semester="II"
      />
    </div>
  );
}