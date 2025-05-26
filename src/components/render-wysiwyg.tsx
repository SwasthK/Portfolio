"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

export const RenderWYSIWYG = ({ content }: { content: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("code-copy")) {
        const codeBlock = target.closest(".code-block");
        const codeElement = codeBlock?.querySelector("code");
        const codeText = codeElement?.innerText;
        const originalText = target?.textContent;
        target.textContent = "Copied!";

        target.setAttribute("disabled", "true");

        setTimeout(() => {
          target.textContent = originalText || "Copy";
          target.removeAttribute("disabled");
        }, 2000);

        if (codeText) {
          navigator.clipboard.writeText(codeText).then(() => {
            toast.success("Code copied to clipboard!",{
              description: "You can now paste it anywhere.",
            });
          });
        }
      }
    };

    const container = containerRef.current;

    container?.addEventListener("click", handleClick);

    return () => {
      container?.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={`prose dark:prose-invert`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
