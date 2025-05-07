import { cn } from "@/lib/utils";

export default function BlogHeader({
    title,
    description,
    className 
}:{
    title: string;
    description?: string;
    className?: string;
}) {
    return (
        <div className={cn("sans",className)}>
            <h1 className="text-xl sm:text-3xl font-bold">{title}</h1>
           {description && <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>}
        </div>
    )
}