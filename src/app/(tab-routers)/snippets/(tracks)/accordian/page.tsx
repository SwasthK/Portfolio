import { Code } from "@/components/snippets/code";
import SnippetText from "@/components/snippets/snippet-text";
import TrackHeader from "@/components/track-header";

export default function Accordion() {
  return (
    <div className="sans">
      <TrackHeader
        title="Accordion"
        description="A simple accordion component using Radix UI and Tailwind CSS."
      />
      <SnippetText text="This is a simple accordion component that allows you to expand and collapse sections of content. It uses Radix UI for accessibility and Tailwind CSS for styling." />
      <Code
      copytext="Copy Code"
        isCopy={true}
        path="src/app/accordion.tsx"
        code={`
      import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
      import { useState } from "react";
      import { ChevronDown } from "lucide-react";
      import { cn } from "@/lib/utils";
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
      import { cn } from "@/lib/utils";
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
      import { cn } from "@/lib/utils";
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
      import { cn } from "@/lib/utils";
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
      import { cn } from "@/lib/utils";
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
      import { cn } from "@/lib/utils"; 
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
      import { cn } from "@/lib/utils";
      import { Button } from "@/components/ui/button";
      import { useState } from "react";
`}
      />
      <SnippetText text="This is a simple accordion component that allows you to expand and collapse sections of content. It uses Radix UI for accessibility and Tailwind CSS for styling." />
    </div>
  );
}
