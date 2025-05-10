import { cn } from "@/lib/utils";
import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function DynamicLocalImage({
  src,
  alt,
  classcontainer,
  classimage,
}: {
  src: string;
  alt: string;
  classcontainer?: string;
  classimage?: string;
}) {
  let base64 = null;
  try {
    const file = await fs.readFile(`./public${src}`);
    const data = await getPlaiceholder(file);
    base64 = data.base64;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className={cn("relative", classcontainer)}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder={base64 ? "blur" : "empty"}
        blurDataURL={base64 ? base64 : ""}
        className={cn("object-cover", classimage)}
      />
    </div>
  );
}

export async function DynamicRemoteImage({
  src,
  alt,
  classcontainer,
  classimage,
}: {
  src: string;
  alt: string;
  classcontainer?: string;
  classimage?: string;
}) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className={cn("relative", classcontainer)}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={base64}
        className={cn("object-cover", classimage)}
      />
    </div>
  );
}
