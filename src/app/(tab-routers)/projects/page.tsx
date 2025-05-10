import { DynamicLocalImage } from "@/components/image/blur-dynamic";
import { projectsData } from "@/lib/data/data-project";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="sans">
      <div className="">
        <p className="font-[500] text-2xl">Projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 py-3 w-full items-center justify-between">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex gap-2  flex-col cursor-pointer hover:bg-[#EDEDED] border duration-200 p-2 rounded-md ease-in"
          >
            <DynamicLocalImage
              classcontainer="relative w-full h-32 rounded-md overflow-hidden"
              classimage="cover object-cover absolute top-0 left-0 w-full h-full"
              src={project.cover}
              alt={project.name}
            />

            <div className="flex justify-between items-center">
              <p className="text-[1rem] sans font-medium">{project.name}</p>
              <a
                href={""}
                className="text-xs underline underline-offset-2 flex gap-2 items-center"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                <p>Live</p>
              </a>
            </div>
            <div className=" bg-[#EDEDED] text-[0.6rem] sans font-normal w-fit px-2 rounded-md">
              {project.date}
            </div>
            <p className="text-[#4F576C] text-xs sans font-light">
              {project.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
