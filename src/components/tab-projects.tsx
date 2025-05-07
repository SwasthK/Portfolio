import { projectsData } from "@/lib/data";
import { profile } from "console";
import Link from "next/link";
import { SeeAll } from "./see-all-link";
import Image from "next/image";

export function TabProjects() {
  return (
    <div className="min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 gap-y-10 py-3 w-full items-center justify-between">
        {projectsData.slice(0, 6).map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex gap-2  flex-col cursor-pointer hover:bg-[#EDEDED] border duration-200 p-2 rounded-md ease-in"
          >
            <div className="relative w-full h-32 rounded-md overflow-hidden">
              <Image
                src={project.cover}
                fill
                alt={profile.name}
                className="cover object-cover absolute top-0 left-0 w-full h-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[1rem] sans font-medium">{project.name}</p>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-2 flex gap-2 items-center"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                <p>Live</p>
              </Link>
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
      {projectsData.length > 6 && <SeeAll label="Projects" link="/projects" />}
    </div>
  );
}
