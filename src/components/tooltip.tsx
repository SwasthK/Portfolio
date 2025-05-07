
import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Tooltip({
  children,
  tip,
}: {
  children: React.ReactNode;
  tip: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <TooltipBase>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tip}</p>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
