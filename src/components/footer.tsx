
import Image from "next/image";
import Link from "next/link";
import { SiteVisits } from "./site-visits";

export default function Footer() {
  return (
    <footer className="sans pt-36 pb-5">
      <div className="text-[.9rem] flex flex-col items-center gap-2">
        <p>Want to hire me as a frelancer ? </p>
        <Link className="bg-[#EDEDED] px-2 py-1 border" href={""}>
          Let&apos;s have a chat
        </Link>
      </div>
      <div className=" pt-16    text-xs flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <SiteVisits />
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </div>
    </footer>
  );
}
