import { ProjectsDataTypes } from "../types/types-project";
import { icons } from "./global";

export const projectsData: ProjectsDataTypes[] = [
    {
        name: "fsmap-cli",
        slug: "fsmap-cli",
        desc: "A powerful CLI tool for managing and visualizing file system structures with ease.",
        cover:
            "/images/projects/fsmap/cover.png",
        url: "https://www.npmjs.com/package/fsmap-cli",
        date: "26 Mar 2025",
        content: `<p><strong>fsmap</strong> is a powerful CLI tool that scans any directory (local or remote GitHub repo) and visualizes its folder structure in a clean, tree-like format.</p><p>Supports output as text, markdown, JSON, and even integrates file size, modified dates, and Git status.</p><h3>Features </h3><ul class="list-disc list-outside leading-3  marker:text-black -mt-2"><li class="leading-normal -mb-2"><p>📁 Visualize any local folder structure</p></li><li class="leading-normal -mb-2"><p>🌍 Fetch and display <strong>GitHub repo structure</strong> via <code class="text-black rounded-md  mono  px-1.5 py-1 text-sm" spellcheck="false">--repo</code></p></li><li class="leading-normal -mb-2"><p>🧹 Smart one-repo caching system (reuse if same repo, delete if not)</p></li><li class="leading-normal -mb-2"><p>💾 Show file sizes (<code class="text-black rounded-md  mono  px-1.5 py-1 text-sm" spellcheck="false">--show-size</code>)</p></li><li class="leading-normal -mb-2"><p>🕒 Show last modified dates (<code class="text-black rounded-md  mono  px-1.5 py-1 text-sm" spellcheck="false">--show-date</code>)</p></li><li class="leading-normal -mb-2"><p>🧑‍💻 Show Git status (<code class="text-black rounded-md  mono  px-1.5 py-1 text-sm" spellcheck="false">--show-git</code>)</p></li><li class="leading-normal -mb-2"><p>📝 Output as: text (default), markdown, JSON, or HTML</p></li><li class="leading-normal -mb-2"><p>📄 Save output to a file</p></li><li class="leading-normal -mb-2"><p>🔍 Works recursively with depth control</p></li></ul><h3>Installation</h3><div class="code-block"><div class="code-metadata"><p class="code-path"> as a global dependency</p><button class="code-copy">Copy</button></div><pre data-path="as a global dependency"><code>npm install -g fsmap-cli</code></pre></div><div class="code-block"><div class="code-metadata"><p class="code-path"> as a dev dependency</p><button class="code-copy">Copy</button></div><pre data-path="as a dev dependency"><code>npm install -D fsmap-cli</code></pre></div><h3>Usage</h3><div class="code-block"><div class="code-metadata"><p class="code-path"> In your project</p><button class="code-copy">Copy</button></div><pre data-path="In your project"><code>npx fsmap</code></pre></div><p><br></p><p>See Usage and Installation guide here : <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.npmjs.com/package/fsmapkit">https://www.npmjs.com/package/fsmapkit</a></p><p><br></p><p>Valid Contributions are allowed here : <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/SwasthK/fsmap">https://github.com/SwasthK/fsmap</a></p>`,
        images: [
            "/images/projects/fsmap/p1.png",
            // "/images/projects/ekashunyam/p2.png",
            // "/images/projects/ekashunyam/p3.png",
            // "/images/projects/ekashunyam/p4.png",
        ],
        stacks: [
            "Node.js",
            "TypeScript",
            "Commander.js",
            "tsup",
            "npm",
            "cli-spinner",
        ],
        summary: "fsmap-cli is a powerful CLI tool built with Node.js and TypeScript, designed to manage and visualize file system structures efficiently, featuring commands for directory listing, file searching, and more.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "https://github.com/SwasthK/fsmap"
            },
            {
                name: "Package",
                icon: icons.Globe,
                url: "https://www.npmjs.com/package/fsmapkit"
            }
        ]
    },
    {
        name: "Ekashunyam 2.0",
        slug: "ekashunyam",
        desc: "A dynamic and scalable platform for managing intercollegiate events with ease and efficiency.",
        cover:
            "/images/projects/ekashunyam/cover.png",
        url: "https://ekashunyam.xyz/",
        date: "26 Mar 2025",
        content: `<p><strong>Ekashunyam</strong> is a sleek, modern web platform designed to digitally transform intercollegiate fest management at <strong>SDM College, Ujire – Department of Computer Science</strong>. It addressed a real-world challenge by <strong>automating the entire fest management process</strong>, marking a first in the college’s history. The platform attracted <strong>30+ registered teams</strong> and achieved an impressive <strong>7,000+ online reach</strong>, showcasing its impact and popularity.</p><p><br></p><p>Built with <strong>Next.js</strong> and <strong>TypeScript</strong>, Ekashunyam ensures scalability, maintainability, and a strong developer experience. <strong>NextAuth</strong> powers secure authentication with support for <strong>Google login</strong> and <strong>email magic link</strong>, offering a seamless sign-in process. For data management, it uses <strong>PostgreSQL</strong> with <strong>Prisma ORM</strong> for efficient, type-safe queries, while <strong>React Query</strong> handles server state and caching for fast, reliable data fetching.</p><p><br></p><p>The application features a <strong>sleek, modern UI</strong> crafted with <strong>Tailwind CSS</strong> and enriched with smooth animations using <strong>GSAP</strong> and <strong>Lenis</strong>, delivering a buttery-smooth scrolling experience that delights users. From the landing page to the admin panel, every interaction feels dynamic and premium. Media uploads are efficiently managed using <strong>Cloudinary</strong>, leveraging robust object storage and CDN delivery for optimal performance.</p><p><br></p><p>An intuitive <strong>admin panel</strong>, built with <strong>shadcn/ui</strong> components, provides <strong>role-based access control</strong>, allowing administrators to monitor registrations, track team activities, and manage event operations in real time—all from a single dashboard. The platform was deployed on <strong>Vercel</strong>, ensuring lightning-fast performance and seamless CI/CD workflows.</p><p><br></p><p>Ekashunyam was highly praised by faculty and students as a <strong>full-stack solution that solved a real-world problem</strong>, automating previously manual and time-consuming tasks. As the <strong>first-ever digital automation of the fest at the college</strong>, it set a new benchmark for future events, demonstrating the transformative power of web technology in traditional processes.</p>`,
        images: [
            "/images/projects/ekashunyam/p1.png",
            "/images/projects/ekashunyam/p2.png",
            "/images/projects/ekashunyam/p3.png",
            "/images/projects/ekashunyam/p4.png",
        ],
        stacks: [
            "Next.js",
            "TypeScript",
            "NextAuth",
            "PostgreSQL",
            "Prisma",
            "ReactQuery",
            "Tailwind CSS",
            "Cloudinary",
            "Lenis",
            "Vercel",
            "GSAP"
        ],
        summary: "Ekashunyam is a full-stack event management platform built with Next.js, TypeScript, and PostgreSQL, automating intercollegiate fest operations with a sleek UI, secure login, and admin dashboard.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "https://github.com/SwasthK/ekashuunyam-monorepo"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "https://www.ekashunyam.xyz/"
            }
        ]
    },
    {
        name: "Scribble",
        slug: "scribble",
        desc: `A vibrant platform to create, share, and engage with content in a connected community.`,
        cover:
            "/images/projects/scribble/cover.png",
        url: "https://scribble-orpin.vercel.app/",
        date: "9 Jan 2025",
        content: `<p><strong>Scribble</strong> is a powerful, dynamic <strong>full-stack blogging application</strong> designed to deliver an exceptional writing and reading experience for both content creators and readers. Built with modern technologies like <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>React Router DOM</strong>, and <strong>Hono.js</strong>, Scribble combines <strong>speed, scalability, and an elegant UI</strong> to ensure a seamless user journey from writing to publishing.</p><p><br></p><p>At its core, Scribble features a <strong>Notion-like rich text editor powered by BlockNote</strong>, allowing users to write and format content using blocks—providing flexibility and control akin to modern content creation tools. Writers can effortlessly <strong>save drafts, publish posts, and track their writing progress</strong> within an intuitive interface.</p><p><br></p><p>The platform includes a <strong>robust user management system</strong> with custom profile editing, enabling users to personalize their profiles. Readers and writers can <strong>follow or unfollow users, like and comment on posts, save favorite blogs, and explore recommended content</strong> based on tags and categories—fostering a highly interactive and engaging community.</p><p><br></p><p>On the backend, Scribble uses <strong>PostgreSQL with Prisma ORM</strong> for efficient, type-safe database management. The <strong>API layer is powered by Hono.js and deployed on Cloudflare Workers</strong>, delivering <strong>blazing-fast serverless execution at the edge</strong> for global scalability and quick response times.</p><p><br></p><p>For data fetching and caching, Scribble leverages <strong>React Query</strong> and <strong>TanStack Query</strong>, ensuring smooth, cached interactions with the backend while maintaining UI responsiveness. <strong>Zod</strong> adds an extra layer of safety through schema validation for reliable data operations.</p><p><br></p><p>The UI is beautifully styled with <strong>Tailwind CSS</strong> and enhanced by <strong>shadcn/ui</strong> components, offering a sleek, modern, and accessible interface. Features like <strong>pagination, SEO optimization</strong>, and <strong>edge object storage via Edge Store</strong> enable efficient media management and <strong>CDN-powered delivery</strong> for optimal performance.</p><p><br></p><p>Finally, Scribble is <strong>deployed on Vercel</strong>, benefiting from optimized CI/CD pipelines and a <strong>global edge network for fast-loading pages</strong>. Every aspect of Scribble is designed to be a <strong>complete, production-ready blogging platform</strong>, solving real-world blogging needs while delivering <strong>extensibility, performance, and a premium user experience</strong>.</p>`,
        images: [
            "/images/projects/scribble/p1.png",
            "/images/projects/scribble/p2.png",
            "/images/projects/scribble/p3.png",
            "/images/projects/scribble/p4.png",
        ],
        stacks: [
            "React",
            "TypeScript ",
            "Tailwind CSS",
            "React Router DOM ",
            "BlockNote Editor",
            "React Query",
            "Recoil",
            "Axios",
            "Hono.js",
            "Cloudflare Workers",
            "PostgreSQL",
            "Prisma",
            "Zod"
        ],
        summary: "Scribble is a dynamic full-stack blogging platform built with React, TypeScript, and Hono.js, featuring a Notion-like editor, profile management, interactions, and seamless publishing.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "https://github.com/SwasthK/Scribble"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "https://scribble-orpin.vercel.app/"
            }
        ]
    },
    {
        name: "Food Stories",
        slug: "food-stories",
        desc: "FoodStories is a sleek, modern recipe app crafted for passionate food lovers and home chefs",
        cover:
            "/images/projects/foodstories/cover.png",
        url: "https://foodstories.netlify.app/",
        date: "18 Dec 2024",
        content: `<p><strong>FoodStories</strong> is a modern <strong>recipe application</strong> designed to make discovering and preparing food <strong>simple, enjoyable, and accessible</strong>. Featuring a <strong>clean, responsive UI</strong> built with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Material UI</strong>, it offers an <strong>intuitive, seamless experience</strong> across all devices.</p><p><br></p><p>The app enables users to <strong>browse recipes by categories, search by name, and sort recipes efficiently</strong>, making it easy to find exactly what you’re craving. Each recipe includes <strong>detailed ingredient lists and step-by-step cooking instructions</strong>, guiding users effortlessly from start to finish.</p><p><br></p><p>To enhance user support, FoodStories integrates an <strong>interactive FAQ section</strong> addressing common queries. It dynamically fetches recipe data using <strong>Axios</strong> from the <strong>DummyJSON API</strong>, ensuring <strong>fresh and relevant content</strong> with every interaction.</p><p><br></p><p>Behind the scenes, <strong>React Router DOM</strong> powers <strong>smooth page navigation</strong>, while the app is deployed on <strong>Netlify</strong>, providing <strong>fast, reliable access</strong> for users worldwide. Altogether, FoodStories combines <strong>dynamic functionality with sleek design</strong>, creating an <strong>engaging, user-friendly platform for food lovers everywhere</strong>.</p>`,
        images: [
            "/images/projects/foodstories/p1.png",
            "/images/projects/foodstories/p2.png",
            "/images/projects/foodstories/p3.png",
            "/images/projects/foodstories/p4.png",
        ],
        stacks: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Material UI",
            "Axios",
            "React Router DOM",
            "Netlify"
        ],
        summary: "FoodStories is a modern recipe app built with React, TypeScript, Tailwind CSS & Material UI, offering categorized search, detailed recipes, and smooth user experience.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "https://github.com/SwasthK/FoodStories"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "https://foodstories.netlify.app/"
            }
        ]
    },
];
