import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import TrackHeader from "@/components/track-header";
import { snippetsData } from "@/lib/data";

export default function SnippetsPage() {
  return (
    <div className="sans">
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
    </div>
  );
}
