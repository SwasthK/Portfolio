import Link from "next/link";
import { DashLine } from "./dashline";
import { SeeAll } from "./see-all-link";
import { Tooltip } from "./tooltip";
import Image from "next/image";

export function TabBlogs() {
  return (
    <div className="min-h-[50vh] ">
      <div className="grid  md:grid-cols-1  gap-8 gap-y-2 py-6 w-full items-start ">
        {blogsData.slice(0, 3).map((blog) => (
          <div key={blog.slug} className="sm:pr-28">
            <Tooltip tip={`Click to read more about ${blog.title}`}>
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="w-full bg-cover bg-center bg-no-repeat flex flex-col gap-6  cursor-pointer duration-200 ease-in"
              >
                <div className="p-0 relative aspect-video">
                  <Image
                    fill
                    src={blog.cover}
                    alt={blog.title}
                    className=" border-none cover object-cover object-center  w-full "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xl sans font-medium">{blog.title}</p>
                  <p className="tx2 text-sm">{blog.description}</p>
                </div>
              </Link>
            </Tooltip>
            <DashLine />
          </div>
        ))}
      </div>
      {blogsData.length > 3 && <SeeAll label="Blogs" link="/blogs" />}
    </div>
  );
}

export const blogsData = [
  {
    slug: "how-to-build-portfolio",
    title: "Blog 1",
    description:
      "This is the second blog post. and it is a bit longer. It contains more information and details about the topic being discussed.",
    date: "2023-10-01",
    cover:
      "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
  },
  {
    slug: "blog-2",
    title: "Blog 2",
    description:
      "This is the second blog post. and it is a bit longer. It contains more information and details about the topic being discussed.",
    date: "2023-10-02",
    cover:
      "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
  },
  {
    slug: "blog-3",
    title: "Blog 3",
    description:
      "This is the second blog post. and it is a bit longer. It contains more information and details about the topic being discussed.",
    date: "2023-10-03",
    cover:
      "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
  },
  {
    slug: "blog-3",
    title: "Blog 3",
    description:
      "This is the second blog post. and it is a bit longer. It contains more information and details about the topic being discussed.",
    date: "2023-10-03",
    cover:
      "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
  },
];
