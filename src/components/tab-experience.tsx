import { experienceData } from "@/lib/data";
import { profile } from "console";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TabExperience() {
  return (
    <div className="min-h-[50vh]">
      <div className="grid grid-cols-1  gap-4 gap-y-10 py-3 w-full items-center justify-between ">
        {experienceData.map((e) => (
          <div
            key={e.name}
            className="flex gap-4 sm:gap-2  flex-col cursor-pointer bg-[#EDEDED] border duration-200 p-6 rounded-md relative"
          >
            <Image
              src={e.image||''}
              alt={profile.name}
              width={80}
              height={80}
              className=" object-contain object-center rounded-md absolute top-0 right-10"
            />

            <div className="flex justify-between items-center">
              <p className="text-[1rem] sans font-medium">{e.name}</p>
            </div>
            <div className=" bg-[#EDEDED] text-[0.6rem] sans font-normal w-fit px-2 rounded-md">
              {e.date}
            </div>
            <p className="text-[#4F576C] text-sm sans font-light">{e.desc}</p>
            <div className="flex gap-2 items-start ">
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
