import Image from "next/image";
import React from "react";
import { RenderWYSIWYG } from "../render-wysiwyg";
import BlogHeader from "./blog-header";
import { BlogsDataType } from "@/lib/types/types-blog";

export function BlogDetails({ blog }: { blog: BlogsDataType }) {
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
      <div className="mt-6">
        <RenderWYSIWYG content={blog.content} />
      </div>
    </div>
  );
}
