import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import Footer from "../components/footer";
import LenisProvider from "@/provider/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | SwasthK",
    template: "%s | SwasthK",
  },
  description:
    "Explore Swasthik's portfolio featuring modern full-stack web projects, UI/UX designs, and blog insights on development best practices. Available for freelance and full-time opportunities.",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Swasthik K" }],
  creator: "Swasthik K",
  publisher: "Swasthik K",
   formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Portfolio",
  applicationName:"Swasthik K Portfolio",
  pinterest:{
    richPin: true,
  },
 other: {
    custom: 'meta',
  },

  keywords: [
    "Swasthik",
    "Swasthik K",
    "Swasthik K Portfolio",
    "swasthk portfolio",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "JavaScript Developer",
    "TypeScript Projects",
    "Freelance Developer",
  ],

  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL||'localhost:3000'),
  // openGraph: {
  //   title: "Swasthik | Full Stack Web Developer & UI Designer",
  //   description:
  //     "Discover modern web apps, clean UI designs, and practical development insights built by Swasthik. Reach out for collaborations or hiring!",
  //   url: "https://your-domain.com",
  //   siteName: "Swasthik Portfolio",
  //   images: [
  //     {
  //       url: "https://your-domain.com/og-image.jpg", // Replace with your actual OG image
  //       width: 1200,
  //       height: 630,
  //       alt: "Swasthik Portfolio Open Graph Image",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Swasthik | Full Stack Web Developer & UI Designer",
  //   description:
  //     "Explore my portfolio of modern web apps and UI designs. Let's build something great!",
  //   creator: "@swasthik319",
  //   images: ["https://your-domain.com/og-image.jpg"], // Match OG image
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <div className="min-h-screen w-screen flex flex-col justify-between items-center bg-[#F4F4F4] ">
            <main className="max-w-[80ch] pt-24 relative px-8 mx-auto w-full  min-h-screen border border-gray-300 border-dashed">
              {children}
              <Footer></Footer>
            </main>
            <Toaster />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
