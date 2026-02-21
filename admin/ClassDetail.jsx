import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import InfoCard from "../components/InfoCard";
import SemesterColumn from "../components/SemesterColumn";

export default function ClassDetail() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold">
              ការគ្រប់គ្រង ថ្នាក់
            </h1>
            <p className="text-gray-500 text-sm">
              បង្ហាញព័ត៌មាន និងមុខវិជ្ជាសិក្សា
            </p>
          </div>

          <InfoCard />

          <div className="grid grid-cols-2 gap-8">
            <SemesterColumn title="ឆមាសទី១" />
            <SemesterColumn title="ឆមាសទី២" />
          </div>
        </div>
      </div>
    </div>
  );
}