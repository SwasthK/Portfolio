import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SeeAll = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link
      href={link}
      className="flex gap-2 items-center justify-center mt-10 text-sm font-light text-[#4F576C] hover:underline underline-offset-2"
    >
      <p>See all {label}</p>
      <ArrowRight size={16} />
    </Link>
  );
};
