import { blogsData } from "@/components/tab-blogs";
import TrackHeader from "@/components/track-header";
import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="sans">
      <TrackHeader
        title="Blogs"
        description="A collection of my thoughts and experiences."
        gap={4}
      />

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 gap-y-10 py-3 w-full items-center justify-between">
        {blogsData.map((blog) => (
          <div key={blog.slug}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="flex gap-2  flex-col cursor-pointer hover:bg-[#EDEDED] border duration-200 p-2 rounded-md ease-in"
            >
              <div className="relative aspect-video">
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  fill
                  className="cover object-cover absolute w-full rounded-md"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[1rem] sans font-medium">{blog.title}</p>
                <a
                  href={""}
                  className="text-xs underline underline-offset-2 flex gap-2 items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <p>Read</p>
                </a>
              </div>
              <div className=" bg-[#EDEDED] text-[0.6rem] sans font-normal w-fit px-2 rounded-md">
                {blog.date}
              </div>
              <p className="text-[#4F576C] text-xs sans font-light">
                {blog.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
