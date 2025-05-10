import { SnippetDetails } from "@/components/snippets/snippet-details";
import { DataNotFound } from "@/components/data-not-found";
import { snippetsData } from "@/lib/data/data-snippet";
import { SnippetsDataTypes } from "@/lib/types/types-snippet";

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
