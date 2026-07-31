import React from "react";

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-12 w-full gap-4 opacity-80">
      <div className="h-px w-32 md:w-48 bg-linear-to-r from-transparent via-secondary to-secondary" />
      <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(212,163,115,0.6)]" />
      <div className="h-px w-32 md:w-48 bg-linear-to-l from-transparent via-secondary to-secondary" />
    </div>
  );
}
