import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HyperLinks({
  label,
  href,
  target = "_blank",
  className,
}: {
  label: string;
  href: string;
  target?: string;
  className?: string;
}) {
  return (
    <div className={cn("", className)}>
      <Link
        href={href}
        target={target}
        className={cn(`text-blue-500 hover:underline visited:text-purple-800`)}
      >
        {label}
      </Link>
    </div>
  );
}
