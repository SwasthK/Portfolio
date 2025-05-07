import BlogHeader from "@/components/blogs/blog-header";
import BlogHeader2 from "@/components/blogs/blog-header2";
import TableOfContents from "@/components/blogs/table-of-contents";
import HyperLinks from "@/components/hyperlinks";
import { Code } from "@/components/snippets/code";
import Image from "next/image";

export default function BlogPages() {
  return (
    <div>
      <BlogHeader
        title="How to Build a Portfolio"
        description="A step-by-step guide to creating an impressive portfolio."
        className="py-5"
      />
      <div className="relative aspect-video ">
        <Image
          fill
          src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
          alt="something"
          className="cover object-cover absolute w-full rounded-md"
        />
      </div>
      <TableOfContents
        contents={[
          { label: "Introduction", id: "section1" },
          { label: "Choose a Platform", id: "section2" },
          { label: " Select a Template", id: "section3" },
          { label: "Add Your Projects", id: "section4" },
        ]}
      />
      <BlogHeader2 label="1. Introduction" props={{ id: "section1" }} />
      <p>
        Building a portfolio is essential for showcasing your skills and
        projects. In this guide, we will walk you through the process of
        creating a portfolio that stands out.
      </p>
      <Code
        isCopy={false}
        className="py-8"
        code={`import { useState } from "react";`}
        path="src/app/blogs/how-to-build-portfolio/page.tsx"
      />
      <BlogHeader2
        label="1. Introduction"
        props={{ id: "section1" }}
        className="my-0"
      />
      <HyperLinks label="Google" href="https://google.com" className="my-3" />
    </div>
  );
}
