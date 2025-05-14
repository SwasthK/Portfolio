import { BlogDetails } from "@/components/blogs/blogdetails";
import { DataNotFound } from "@/components/data-not-found";
import { blogsData } from "@/lib/data/data-blog";
import { DynamicMetaDataType } from "@/lib/types/global";
import { BlogsDataType } from "@/lib/types/types-blog";
import { Metadata } from "next";

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: DynamicMetaDataType): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogsData.find(
    (blog) => blog.slug === slug.toLowerCase()
  );

  if (!blog) {
    return {
      title: {
        absolute: "Blog Not Found",
      },
      description: "The requested code blog could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      absolute:
        "Blog | " +
        blog.slug.charAt(0).toUpperCase() +
        blog.slug.slice(1).replace(/-/g, " "),
    },
    description: blog.description,
  };
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
