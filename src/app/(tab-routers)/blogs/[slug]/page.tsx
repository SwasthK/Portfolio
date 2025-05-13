import { BlogDetails } from "@/components/blogs/blogdetails";
import { DataNotFound } from "@/components/data-not-found";
import { blogsData } from "@/lib/data/data-blog";
import { BlogsDataType } from "@/lib/types/types-blog";

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Blogs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result: BlogsDataType | undefined = blogsData.find(
    (project) => project.slug === slug.toLowerCase()
  );

  if (!result) {
    return <DataNotFound label="Blog" redirect="/blogs" />;
  }

  const isView = false;
  return (
    <div className="">
      {!result || !isView ? (
        <DataNotFound label="Blog" redirect="/blogs" />
      ) : (
        <BlogDetails blog={result} />
      )}
    </div>
  );
}
