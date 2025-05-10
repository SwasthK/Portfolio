import { SnippetsDataTypes } from "@/lib/types/types-snippet";
import React from "react";
import { RenderWYSIWYG } from "../render-wysiwyg";

export function SnippetDetails({
  snippet,
}: {
  snippet: SnippetsDataTypes;
}) {
  return (
    <div className="flex flex-col gap-2 sans">
      <div className="flex flex-col gap-1">
        <p className="text-sm">Components</p>
        <h1 className="text-3xl font-[700]">{snippet.title}</h1>
        <p className="text-sm text-[#4F576C] font-light">
          {snippet.description}
        </p>
      </div>

      <div>
        <RenderWYSIWYG content={snippet.content} />
      </div>
    </div>
  );
}
