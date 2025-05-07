import { snippetsData } from "@/lib/data";
import { SeeAll } from "./see-all-link";
import Link from "next/link";

export function TabSnippets() {
  return (
    <div className="min-h-[50vh] py-3">
      <div className="">
        {snippetsData.slice(0, 6).map((snippet, index) => (
          <Link
            href={`/snippets/${snippet.slug}`}
            key={index}
            className="bg-[#EDEDED] border border-[#DEDEDE] hover:border-[#bdc4ce] transition-all duration-100 ease-in rounded-[5px] cursor-pointer flex items-start flex-col gap-1 mb-4 px-6 py-3 text-sm sans "
          >
            <p className="font-medium text-[.95rem]">{snippet.title}</p>
            <p className="tx2 text-xs">{snippet.description}</p>
          </Link>
        ))}
        {snippetsData.length > 6 && <SeeAll label="Snippets" link="/snippets" />}
      </div>
    </div>
  );
}
