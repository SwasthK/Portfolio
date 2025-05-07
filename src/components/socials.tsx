import { socials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Cli } from "./cli";
import { Tooltip } from "./tooltip";
import Link from "next/link";

export function Socials() {
  return (
    <div className="flex gap-3 font-mono text-sm items-start sm:items-center flex-col sm:flex-row animated-text-100">
      <div className="flex justify-start gap-6 items-center">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Tooltip tip={social.tip} key={social.name}>
              <Link
                key={social.name}
                href={social.url}
                target={social.target}
                rel="noopener noreferrer"
              >
                <Icon size={social.size} className={cn(social.className, "")} />
              </Link>
            </Tooltip>
          );
        })}
      </div>
      <div className="hidden sm:block">
        <Cli />
      </div>
    </div>
  );
}
