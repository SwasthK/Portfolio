import { cn } from "@/lib/utils";
import { CopyText } from "../cli";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export const Code = ({
  code,
  path,
  className,
  isCopy = false,
  copytext,
  copytextClassName,
  copytextSuccess = "Copied Successfully",
  copytextDescription = "You can now paste and use the copied code",
}: {
  code?: string;
  path?: string;
  className?: string;
  isCopy?: boolean;
  copytext?: string;
  copytextClassName?: string;
  copytextSuccess?: string;
  copytextDescription?: string;
}) => {
  return (
    <div className={cn(`flex flex-col gap-2`, className)}>
      <div className="flex justify-between items-center">
        {" "}
        <p className="text-sm sans mb-2">{path}</p>
        {isCopy && copytext && (
          <CopyText
            copytext={copytext}
            className={copytextClassName}
            success={copytextSuccess}
            description={copytextDescription}
          />
        )}
      </div>
      <ScrollArea className="bg-[#EDEDED] relative py-6 px-6 border w-full text-sm font-mono">
        <pre className="whitespace-pre font-mono">
          <code>{code}</code>
        </pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
