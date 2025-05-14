import { Metadata } from "next";

export const defaultMetadata: Metadata = {
    title: {
        default: "Portfolio | SwasthK",
        template: "%s | SwasthK",
    },
    referrer: 'origin-when-cross-origin',
    description:
        "Explore Swasthik's portfolio featuring modern full-stack web projects, UI/UX designs, and blog insights on development best practices. Available for freelance and full-time opportunities.",
    authors: [{ name: "Swasthik K" }],
    creator: "Swasthik K",
    publisher: "Swasthik K",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    category: "Portfolio",
    applicationName: "Swasthik K Portfolio",
    pinterest: {
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'localhost:3000'),
    twitter: {
        card: "summary_large_image"
    },
};