import { SnippetsDataTypes } from "../types/types-snippet";

export const snippetsData: SnippetsDataTypes[] = [
    {
        slug: "accordian",
        title: "Custom Button",
        description: "A reusable, theme-aware button with variants.",
        date: "2023-10-01",
        content: `<p><br></p><h2><strong>Pure Tailwind CSS + React Accordion</strong></h2><div class="code-block"><div class="code-metadata"><p class="code-path"> accordian.tsx</p><button class="code-copy">Copy</button></div><pre data-path="accordian.tsx"><code>import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  { title: "What is FoodStories?", content: "FoodStories is a modern recipe application that makes discovering and preparing food easy and enjoyable." },
  { title: "How do I search recipes?", content: "You can search by name, browse by category, or sort recipes easily using the search bar." },
  { title: "Where does the data come from?", content: "We fetch recipes dynamically from the DummyJSON API." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState&lt;number | null&gt;(null);

  const toggle = (index: number) =&gt; {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    &lt;div className="max-w-md mx-auto space-y-2"&gt;
      {items.map((item, index) =&gt; (
        &lt;div key={index} className="border rounded-lg"&gt;
          &lt;button
            onClick={() =&gt; toggle(index)}
            className="w-full flex justify-between items-center p-4 font-semibold text-left focus:outline-none"
          &gt;
            &lt;span&gt;{item.title}&lt;/span&gt;
          &lt;/button&gt;
          {openIndex === index &amp;&amp; (
            &lt;div className="p-4 text-sm text-gray-700 bg-gray-50"&gt;{item.content}&lt;/div&gt;
          )}
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre></div><p><br></p><h2>If you&qoute;re using <code class="text-black rounded-md bg-[#EDEDED] mono  px-1.5 py-1 text-sm" spellcheck="false">shadcn/ui</code> (recommended for consistent UI)</h2><p>You can use the built-in Accordion from <code class="text-black rounded-md bg-[#EDEDED] mono  px-1.5 py-1 text-sm" spellcheck="false">@/components/ui/accordion</code>:</p><div class="code-block"><div class="code-metadata"><p class="code-path"> accordian.tsx</p><button class="code-copy">Copy</button></div><pre data-path="accordian.tsx"><code>import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  return (
    &lt;Accordion type="single" collapsible className="w-full max-w-md mx-auto"&gt;
      &lt;AccordionItem value="item-1"&gt;
        &lt;AccordionTrigger&gt;What is FoodStories?&lt;/AccordionTrigger&gt;
        &lt;AccordionContent&gt;
          FoodStories is a modern recipe application that makes discovering and preparing food easy and enjoyable.
        &lt;/AccordionContent&gt;
      &lt;/AccordionItem&gt;
      &lt;AccordionItem value="item-2"&gt;
        &lt;AccordionTrigger&gt;How do I search recipes?&lt;/AccordionTrigger&gt;
        &lt;AccordionContent&gt;
          You can search by name, browse by category, or sort recipes easily using the search bar.
        &lt;/AccordionContent&gt;
      &lt;/AccordionItem&gt;
      &lt;AccordionItem value="item-3"&gt;
        &lt;AccordionTrigger&gt;Where does the data come from?&lt;/AccordionTrigger&gt;
        &lt;AccordionContent&gt;
          We fetch recipes dynamically from the DummyJSON API.
        &lt;/AccordionContent&gt;
      &lt;/AccordionItem&gt;
    &lt;/Accordion&gt;
  );
}</code></pre></div>`
    },
    {
        slug: "debounce-hook",
        title: "useDebounce Hook",
        description: "A custom React hook to debounce any fast-changing value.",
        date: "2023-10-01",
        content: ``
    },
    {
        slug: "modal-component",
        title: "Modal Component",
        description: "Accessible modal with smooth animations.",
        date: "2023-10-01",
        content: ``
    },
];