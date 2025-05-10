import { ProjectsDataTypes } from "@/lib/types/types-project";
import Link from "next/link";
import React, { Fragment } from "react";
import { RenderWYSIWYG } from "../render-wysiwyg";
import { DynamicLocalImage } from "../image/blur-dynamic";

export function ProjectDetails({ project }: { project: ProjectsDataTypes }) {
  return (
    <div className="flex flex-col gap-6 sans">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-[500]">{project.name}</h1>
        <p className="text-sm text-[#4F576C] font-light">{project.desc}</p>
      </div>
      <DynamicLocalImage
        classcontainer="relative aspect-video overflow-hidden rounded-[5px]"
        classimage="absolute w-full h-full  object-cover"
        src={project.cover}
        alt={project.name}
      />

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
        {/* <p className="text-sm text-black">Description : </p> */}
        <RenderWYSIWYG content={project.content} />
        {/* {project.content.map((content, index) => (
          <div key={index}>
            <p className="text-[0.95rem] text-[#4F576C]  mt-2">
              {content}
            </p>
            <br />
          </div>
        ))} */}
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3">
          {project.images?.map((image, index) => (
            <DynamicLocalImage
              key={index}
              classcontainer="relative aspect-square"
              classimage="rounded-[5px] absolute w-full  object-cover"
              src={image}
              alt={image}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[0.95rem] text-[#3f485e] italic mt-2">
          &ldquo; {project.summary} &rdquo;
        </p>
      </div>
    </div>
  );
}
