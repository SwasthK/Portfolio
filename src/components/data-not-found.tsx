import { profile } from "@/lib/data/data-profile";
import { socials } from "@/lib/data/data-socials";
import Link from "next/link";

export function DataNotFound({
  label,
  redirect,
}: {
  label?: string;
  redirect?: string;
}) {
  return (
    <div className="flex-col gap-4 sans min-h-[50vh] flex justify-center items-center rounded-[15px] bg-white dark:bg-accent">
      <h1 className="text-sm justify text-center sm:text-2xl font-[470]">
        The {label ? label : "Page"} You Are Looking For Is Not Found.
      </h1>
      <p className="text-xs sm:text-sm text-[#4F576C] font-light dark-text">
        Please Checkout the Other {label ? `${label}s` : "Pages"} by{" "}
        <Link
          href={socials[1].url}
          target={socials[1].target}
          className="underline text-black dark:text-white"
        >
          {profile.name}
        </Link>
        .
      </p>
      <div className="flex w-full justify-center items-center">
        <Link
          href={redirect ? redirect : "/"}
          className="bg-[#EDEDED] border py-1 sm:py-1.5 rounded-[5px] px-8  hover:bg-[#f4f4f4] dark:bg-[#3c3a3a]"
        >
         <p className="sm:text-sm"> {label ? `Go to ${label}s` : "Go to Home"}</p>
        </Link>
      </div>
    </div>
  );
}
