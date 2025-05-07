import { ProjectsDataTypes } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export function ProjectDetailsContainer({
  project,
}: {
  project: ProjectsDataTypes;
}) {
  return (
    <div className="flex flex-col gap-6 sans">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-[500]">{project.name}</h1>
        <p className="text-sm text-[#4F576C] font-light">{project.desc}</p>
      </div>
      <div className="relative w-full h-96 overflow-hidden rounded-[5px]">
        <Image
          width={1000}
          height={500}
          src={project.cover}
          alt={project.name}
          className=" absolute w-full h-full  object-cover "
        />
      </div>
      <div className="flex  gap-4 items-start w-full text-sm ">
        {project.links?.map((l) => {
          const Icon = l.icon;
          return (
            <Fragment key={l.name}>
              <Link
                href={l.url}
                target="_blank"
                className="flex gap-2 items-center bg-[#DEDEDE] px-4 py-2 rounded-[5px]"
              >
                <Icon size={18}></Icon>
                <p>{l.name}</p>
              </Link>
            </Fragment>
          );
        })}
      </div>
      <div>
        <p className="text-sm text-black">Tech Stacks Used : </p>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.stacks?.map((s: string) => (
            <p
              key={s}
              className="text-sm text-[#4F576C] font-light  px-2 py-1 rounded-[5px]"
            >
              {s} |
            </p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-black">Description : </p>
        <p className="text-[0.95rem] text-[#4F576C]  mt-2">
          {/* <p className="  mt-2"> */}
          {project.content}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3">
          {project.images?.map((image, index) => (
            <div key={index + 1} className="relative aspect-square">
              <Image
                src={image}
                alt={image}
                fill
                className="rounded-[5px] absolute w-full  object-cover "
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[0.95rem] text-[#4F576C]  mt-2">{project.summary}</p>
      </div>
    </div>
  );
}
