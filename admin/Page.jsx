import React, { useState } from "react";
import ClassFormModal from "./ClassFormModal";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        បន្ថែមថ្នាក់
      </button>

      <ClassFormModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}