import { snippetsData } from "@/lib/data/data-snippet";
import { SeeAll } from "./see-all-link";

export function TabSnippets() {
  return (
    <div className="min-h-[50vh] py-3">
      <div className="">
        {/* {snippetsData.slice(0, 6).map((snippet, index) => (
          <Link
            href={`/snippets/${snippet.slug}`}
            key={index}
            className="bg-[#EDEDED] border border-[#DEDEDE] hover:border-[#bdc4ce] transition-all duration-100 ease-in rounded-[5px] cursor-pointer flex items-start flex-col gap-1 mb-4 px-6 py-3 text-sm sans "
          >
            <p className="font-medium text-[.95rem]">{snippet.title}</p>
            <p className="tx2 text-xs">{snippet.description}</p>
          </Link>
        ))} */}

        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="border rounded-[5px] cursor-pointer flex items-start flex-col gap-2 mb-4 px-6 py-4 text-sm sans animate-pulse"
          >
            <p className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28"></p>
            <p className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-48"></p>
            {index == 0 && (
              <div className="sans text-xs text-muted-foreground flex justify-center items-center ">
                <p>Adding snippets soon...</p>
              </div>
            )}
          </div>
        ))}

        {snippetsData.length > 6 && (
          <SeeAll label="Snippets" link="/snippets" />
        )}
      </div>
    </div>
  );
}
