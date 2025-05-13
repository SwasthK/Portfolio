import { blogsData } from "@/lib/data/data-blog";
import { BlogsDataType } from "@/lib/types/types-blog";
import { ImageResponse } from "next/og";

export const alt = "Blog Preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const blog:BlogsDataType|undefined = blogsData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return new Response("Not Found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          backgroundColor: "#f8fafc",
          color: "#111827",
          fontSize: 48,
          fontWeight: 700,
          fontFamily: "sans-serif",
          border: "8px solid #111827",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "20px" }}>{blog.title}</div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 20,
            color: "#9ca3af",
          }}
        >
          Swasthik.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
