import { SnippetDetails } from "@/components/snippets/snippet-details";
import { DataNotFound } from "@/components/data-not-found";
import { snippetsData } from "@/lib/data/data-snippet";
import { SnippetsDataTypes } from "@/lib/types/types-snippet";
import { DynamicMetaDataType } from "@/lib/types/global";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: DynamicMetaDataType): Promise<Metadata> {
  const { slug } = await params;

  const snippet = snippetsData.find(
    (snippet) => snippet.slug === slug.toLowerCase()
  );

  if (!snippet) {
    return {
      title: {
        absolute: "Snippet Not Found",
      },
      description: "The requested code snippet could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      absolute:
        "Snippet | " +
        snippet.slug.charAt(0).toUpperCase() +
        snippet.slug.slice(1).replace(/-/g, " "),
    },
    description: snippet.description,
  };
}

export function generateStaticParams() {
  return snippetsData.map((snippet) => ({
    slug: snippet.slug,
  }));
}

export default async function Snippets({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result: SnippetsDataTypes | undefined = snippetsData.find(
    (snippet) => snippet.slug === slug.toLowerCase()
  );

  if (!result) {
    return <DataNotFound label="Snippet" redirect="/snippets" />;
  }

  const isView = false;
  return (
    <div className="">
      {!result || !isView ? (
        <DataNotFound label="Snippet" redirect="/snippets" />
      ) : (
        <SnippetDetails snippet={result} />
      )}
    </div>
  );
}
