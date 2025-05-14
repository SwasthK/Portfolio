import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import TrackHeader from "@/components/track-header";
import { snippetsData } from "@/lib/data/data-snippet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snippets",
  description: "A collection of reusable components and hooks.",
  keywords: ["snippets", "components", "hooks"],
};

export default function SnippetsPage() {
  const isView = false;
  return (
    <div className="sans">
      {!isView ? (
        <div className="py-28 flex justify-center items-center text-sm sans">
          <p>Adding Snippets soon...</p>
        </div>
      ) : (
        <>
          {" "}
          <TrackHeader
            title="Snippets"
            description="A collection of reusable components and hooks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {snippetsData.map((snippet) => (
              <Link href={`/snippets/${snippet.slug}`} key={snippet.slug}>
                <Card className="bg-[#ffffff] border-[#00000023] shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg">{snippet.title}</CardTitle>
                    <CardDescription>{snippet.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
