import { cn } from "@/lib/utils";

export default function BlogHeader2({
 label,
 className,
 ...props
}: {
label: string;
className?: string;
props?: React.HTMLAttributes<HTMLHeadingElement>;
}) {
  return (
    
     <h2
     {...props}
     className={cn(`text-xl my-4 font-semibold`,className)}>{label}</h2>

  );
}