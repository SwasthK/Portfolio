import { experienceData } from "@/lib/data/data-experience";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DynamicLocalImage } from "./image/blur-dynamic";

export function TabExperience() {
  return (
    <div className="min-h-[50vh]">
      <div className="grid grid-cols-1 gap-4  gap-y-10 py-3 w-full items-center justify-between ">
        {experienceData.map((e) => (
          <div
            key={e.name}
            className="flex gap-4  flex-col cursor-pointer bg-[#EDEDED] border duration-200 p-6 rounded-md relative"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-[1rem] sans font-medium">{e.name}</p>
                <div className=" bg-[#EDEDED] text-[0.6rem] sans font-normal w-fit px-2 rounded-md">
                  {e.date}
                </div>
              </div>
              <DynamicLocalImage
                src={e.image}
                alt={e.name}
                classcontainer="relative w-28 h-14"
                classimage="absolute object-contain object-center rounded-md "
              />
            </div>

            <p className="text-[#4F576C] text-sm sans font-light">{e.desc}</p>
            <div className="flex gap-2 items-start flex-wrap">
              {e.stacks.map((item) => (
                <div
                  key={item}
                  className=" relative sans px-2 py-1.5 rounded-[5px] bg-white"
                >
                  <p className="text-xs font-light text-[#4F576C]">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={e.url}
              target="_blank"
              className="flex gap-1 w-full items-end justify-end"
            >
              <p className="text-sm underline text-right">View</p>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
