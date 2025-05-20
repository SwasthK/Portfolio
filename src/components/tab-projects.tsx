import { projectsData } from "@/lib/data/data-project";
import Link from "next/link";
import { DynamicLocalImage } from "./image/blur-dynamic";

export function TabProjects() {
  return (
    <div className="min-h-[50vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-w-0 gap-4 gap-y-10 py-3 w-full">
        {projectsData.slice(0, 6).map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex gap-2 animated-text-200  flex-col cursor-pointer hover:bg-[#EDEDED] hover:dark:bg-[#201d1dbb] border duration-200 p-2 rounded-md ease-in
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            "
          >
            <div>
              <DynamicLocalImage
                src={project.cover}
                alt={project.name}
                classcontainer="relative w-full h-32 rounded-md overflow-hidden"
                classimage="object-cover absolute w-full h-full"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-[1rem] sans font-medium">{project.name}</p>
                <div className="text-xs underline underline-offset-2 flex gap-2 items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <p>Live</p>
                </div>
              </div>
              {/* <div className="">
             
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline underline-offset-2 flex gap-2 items-center"
                >
               
                  
                </Link>
              </div> */}
              <div className=" bg-[#EDEDED] dark:bg-[#201D1D] text-[0.6rem] sans font-normal w-fit px-2 rounded-md my-1">
                {project.date}
              </div>
              <p className="text-[#4F576C] dark-text text-xs sans font-light mt-1">
                {project.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* {projectsData.length > 6 && <SeeAll label="Projects" link="/projects" />} */}
      <div className="sans text-xs text-muted-foreground flex justify-center items-center mt-28">
        <p>Adding more projects soon...</p>
      </div>
    </div>
  );
}
