"use client";
import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";

export default function RouterSwitch() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="tx2 text-sm  flex gap-2 items-center cursor-pointer"
    >
      <ArrowLeft size={16} />
      <p>Back</p>
    </div>
  );
}
