import { cn } from "@/lib/utils";

export default function SnippetText({
  text,
  className,
}: {
  text: string;
  gap?: number;
  className?: string;
}) {
  return (
    <div className={cn(`sans my-6`, className)}>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
