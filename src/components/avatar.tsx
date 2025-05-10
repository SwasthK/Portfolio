import {
  Avatar as AvatarBase,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { socials } from "@/lib/data/data-socials";
import Link from "next/link";

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
    <Link href={socials[1].url} target="_blank">
      <AvatarBase className={className}>
        <AvatarImage
          src={url}
          alt={name}
          className="object-cover object-center"
        />
        <AvatarFallback className="text-black sans">{name?.slice(0, 2).toUpperCase()}</AvatarFallback>
      </AvatarBase>
    </Link>
  );
}
