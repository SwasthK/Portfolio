import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "../components/footer";
import { defaultMetadata } from "@/lib/metadata";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// import LenisProvider from "@/provider/lenis-provider";

export const geistSans = Geist({
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
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LenisProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="min-h-screen w-screen flex flex-col justify-between items-center bg-[#F4F4F4] dark:bg-[#171717]
          "
          >
            <main className="max-w-[80ch] pt-24 relative px-8 mx-auto w-full  min-h-screen sm:border-x border-gray-300 dark:border-gray-600 border-dashed">
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer></Footer>
              <Toaster />
            </main>
          </div>
        </ThemeProvider>
        {/* </LenisProvider> */}
      </body>
    </html>
  );
}
