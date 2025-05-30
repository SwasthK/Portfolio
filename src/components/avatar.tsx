"use client";
import { Avatar as AvatarBase, AvatarFallback, AvatarImage } from "./ui/avatar";
import { socials } from "@/lib/data/data-socials";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const AvatarIcon = "/images/profile/Avatar.png";

export function Avatar({
  url,
  name,
  className,
}: {
  url: string;
  name: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="flex justify-center items-center"
    >
      <Link href={socials[1].url} target="_blank">
        <AvatarBase className={cn("-rotate-10", className)}>
          <AvatarImage
            src={AvatarIcon || url}
            alt={name}
            className="object-cover object-center"
          />
          <AvatarFallback className="text-black sans">
            {name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </AvatarBase>
      </Link>
    </motion.div>
  );
}
