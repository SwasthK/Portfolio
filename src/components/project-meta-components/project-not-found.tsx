import { profile, socials } from "@/lib/data";
import Link from "next/link";

export function ProjectNotFound() {
  return (
    <div className="flex-col gap-4 sans min-h-[50vh] flex justify-center items-center rounded-[15px] bg-white">
      <h1 className="text-2xl font-[470]">
        The Project You Are Looking For Is Not Found.
      </h1>
      <p className="text-sm text-[#4F576C] font-light">
        Please Checkout the Other Projects by{" "}
        <Link
          href={socials[1].url}
          target={socials[1].target}
          className="underline text-black"
        >
          {profile.name}
        </Link>
        .
      </p>
      <div className="flex w-full justify-center items-center">
        <Link href={"/projects"} className="bg-main py-1.5 rounded-[5px] px-8">
          Projects
        </Link>
      </div>
    </div>
  );
}
