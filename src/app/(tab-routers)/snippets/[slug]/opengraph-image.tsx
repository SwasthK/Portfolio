import { snippetsData } from "@/lib/data/data-snippet";
import { geistRegular, giestBold } from "@/lib/opengraph";
import { ImageResponse } from "next/og";

export const alt = "Snippet | SwasthK";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const snippet = snippetsData.find((snippet) => snippet.slug === params.slug);

  if (!snippet) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            color: "red",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Snippet Not Found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/images/profile/cover.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          style={{
            fontFamily: "GeistBold",
            marginTop: 60,
            fontSize: 50,
            lineHeight: 1.25,
            maxWidth: "90%",
          }}
        >
          {snippet.title || "Check out this snippet!"}
        </div>
        <div
          style={{
            fontFamily: "GeistRegular",
            fontSize: 25,
            marginTop: 20,
            opacity: 0.75,
          }}
        >
          Snippets | SwasthK
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GeistRegular",
          data: geistRegular,
          style: "normal",
        },
        {
          name: "GeistBold",
          data: giestBold,
          style: "normal",
        },
      ],
    }
  );
}
