"use client";

import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "./tooltip";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function Cli() {
  return (
    <Tooltip tip={"try running this command in your CLI"}>
      <div className=" flex justify-center items-center">
        <div className="bg-black/[.05] mono text-xs p-1 pl-3 rounded-[5px] flex gap-2 justify-center items-center">
          npx swasthk
          <CopyText
            copytext="npx swasthk"
            success="Copied to clipboard"
            description="You can now run the command in your terminal"
          />
        </div>
      </div>
    </Tooltip>
  );
}

export const CopyText = ({
  className,
  copytext,
  success,
  description,
}: {
  className?: string;
  copytext: string;
  success?: string;
  description?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  function handleClipBoard() {
    navigator.clipboard.writeText(copytext).then(() => {
      setIsCopied(true);
      toast.success(success, {
        description: <span className="tx1">{description}</span>,
      });
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  }

  return (
    <div
      onClick={handleClipBoard}
      className={cn(
        `"bg-main p-1 rounded-[5px] cursor-pointer hover:bg-gray-100 duration-150 ease-in transform hover:-translate-y-[1px]`,
        className
      )}
    >
      {!isCopied ? <Clipboard size={16} /> : <Check size={16} />}
    </div>
  );
};
