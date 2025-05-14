import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const geistRegular = await readFile(
  join(process.cwd(), "public/fonts/geist/Geist-Regular.ttf")
);
export const giestBold = await readFile(
  join(process.cwd(), "public/fonts/geist/Geist-Bold.ttf")
);
