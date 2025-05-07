import Link from "next/link";
import BlogHeader2 from "./blog-header2";

type TableOfContentsProps = {
  label: string;
  id: string;
};

export default function TableOfContents({
  contents,
}: {
  contents: TableOfContentsProps[];
}) {
  return (
    <>
      <BlogHeader2 label="Table of Contents" />
      <div className="flex flex-col gap-2 mt-4">
        {contents.map((content, index) => (
          <Link
            key={content.id}
            href={`#${content.id}`}
            className="text-blue-700 hover:underline"
          >
            {index + 1}. {content.label}
          </Link>
        ))}
      </div>
    </>
  );
}
