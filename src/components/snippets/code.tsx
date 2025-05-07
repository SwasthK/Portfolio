import { cn } from "@/lib/utils";
import { CopyText } from "../cli";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const Code = ({
  code,
  path,
  className,
  isCopy = false,
  copytext,
  copytextClassName,
  copytextSuccess = "Copied Successfully",
  copytextDescription = "You can now ",
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
      <ScrollArea className=" whitespace-nowrap  bg-[#EDEDED] relative py-6 px-6  rounded-md border w-full text-sm font-mono ">
        <code className="">
          {/* <pre> */}
          {code?.split("\n").map((line, i) => (
            <span key={i} className="block  font-mono ">
              {line}
            </span>
          ))}
          {/* </pre> */}
        </code>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
