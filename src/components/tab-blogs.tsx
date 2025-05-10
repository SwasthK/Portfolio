
export function TabBlogs() {
  return (
    <div className="min-h-[50vh] ">
      <div className="grid  md:grid-cols-1  gap-8 gap-y-2 py-6 w-full items-start ">
        {/* {blogsData.slice(0, 3).map((blog) => (
          <div key={blog.slug} className="sm:pr-28">
            <Tooltip tip={`Click to read more about ${blog.title}`}>
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="w-full bg-cover bg-center bg-no-repeat flex flex-col gap-6  cursor-pointer duration-200 ease-in"
              >
                <DynamicRemoteImage
                  src={blog.cover}
                  alt={blog.title}
                  classcontainer="p-0 relative aspect-video"
                  classimage="border-none cover object-cover object-center  w-full"
                />
            
                <div className="flex flex-col gap-1">
                  <p className="text-xl sans font-medium">{blog.title}</p>
                  <p className="tx2 text-sm">{blog.description}</p>
                </div>
              </Link>
            </Tooltip>
            <DashLine />
          </div>
        ))} */}
        <div className="sm:pr-28 animate-pulse">
          <div className="w-full flex flex-col gap-6 cursor-pointer">
            {/* Image skeleton */}
            <div className="relative aspect-video bg-gray-300 dark:bg-gray-700 rounded-md"></div>

            {/* Text skeleton */}
            <div className="flex flex-col gap-2">
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-4"></div>
          <div className="sans text-xs text-muted-foreground flex justify-center items-center ">
            <p>Adding blogs soon...</p>
          </div>
        </div>
      </div>
      {/* {blogsData.length > 3 && <SeeAll label="Blogs" link="/blogs" />} */}
    </div>
  );
}
