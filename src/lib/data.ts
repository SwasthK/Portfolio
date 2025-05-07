

import { GithubIcon, Linkedin, FileTextIcon, Twitter, MailIcon, Globe } from "lucide-react"
import { ProjectsDataTypes, SnippetsDataTypes } from "./types";

export const icons = {
    Github: GithubIcon,
    Twitter: Twitter,
    Linkedin: Linkedin,
    FileTextIcon: FileTextIcon,
    MailIcon: MailIcon,
    Globe: Globe
}

export const tabs = [
    { name: "Projects", value: "projects" },
    { name: "Snippets", value: "snippets" },
    { name: "Blogs", value: "blogs" },
    { name: "Experience", value: "experience" },
];

export const profile = {
    name: "Swasthik K",
    tag: "JS | TS developer",
    title: "Web Developer",
    desc: "A passionate web developer with a knack for creating dynamic and responsive web applications. I thrive on challenges and constantly seek opportunities to learn and grow in the ever-evolving tech landscape.",
    image: "https://www.ekashunyam.xyz/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdvpaztqr9%2Fimage%2Fupload%2Fv1742498061%2F20241222_145056_dwfz9a.jpg&w=1920&q=75",
}

export const socials = [
    {
        name: "Github",
        url: "https://github.com/SwasthK",
        target: "_blank",
        icon: icons.Github,
        className: "group-link",
        size: 18,
        tip: "Github"
    },
    {
        name: "X",
        url: "https://x.com/swasthik319",
        target: "_blank",
        icon: icons.Twitter,
        className: "group-link",
        size: 18,
        tip: "X (Twitter)"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/swasthik-k-a788aa255/",
        target: "_blank",
        icon: icons.Linkedin,
        className: "group-link",
        size: 18,
        tip: "LinkedIn"
    },
    {
        name: "Resume",
        url: "https://drive.google.com/file/d/1BHPVzAMSh2jNQ58IpuBtXLwxapWguspm/view?usp=sharing",
        target: "_blank",
        icon: icons.FileTextIcon,
        className: "group-link",
        size: 18,
        tip: "Resume"
    },
    {
        name: "Email",
        url: "mailto:swasth319@gmail.com",
        target: "_blank",
        icon: icons.MailIcon,
        className: "group-link",
        size: 18,
        tip: "Email"
    }
]

export const projectsData: ProjectsDataTypes[] = [
    {
        name: "Ekashunyam2.0",
        slug: "ekashunyam",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },
    {
        name: "Ekashunyam2.0",
        slug: "ekashunyam1",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },
    {
        name: "Ekashunyam2.0",
        slug: "ekashunyam3",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },
    {
        name: "Ekashunyam2.0",
        slug: "ekashunya6m",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },
    {
        name: "Ekashunyam2.0",
        slug: "ekas7hunyam",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },
    {
        name: "Ekashunyam2.0",
        slug: "ekashu8nyam",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },
    {
        name: "Ekashunyam2.0",
        slug: "ekash0unyam",
        desc: "A web application that provides a platform for students to learn and practice coding.",
        cover:
            "https://blog.olivierlarose.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjzzgtonmw9s6%2F34OZ0GP1Pr5E2ptZeysyp3%2F51bd8a82fad29fefbe0d0b27042f1a23%2FArtboard-1-copy-8-_1_.jpg&w=640&q=75",
        url: "https://ekashunyam.xyz/",
        date: "21 Dec 2024",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis pariatur suscipit fugit. Dolorem consectetur libero magnam accusantium velit officiis dolorum. Animi expedita voluptatem consequatur fugiat accusantium, dolore ea doloribus reprehenderit obcaecati, aliquid tempore excepturi, id repellendus earum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam, ex totam minima voluptatum iure nemo harum tenetur. Porro repellendus hic ipsum dolor sunt, voluptas fuga temporibus maiores nostrum doloremque animi natus, quaerat rerum architecto nesciunt numquam. Quidem aut quasi cumque vel nostrum ullam recusandae? Libero aliquam minima at rerum eveniet. Iure repudiandae veniam nesciunt tempora recusandae dolorem distinctio culpa reprehenderit perspiciatis. Dicta suscipit ut facilis hic delectus sapiente quae autem tempore eligendi, libero quam eius labore iure quo numquam laudantium rem nisi soluta aliquam. Fugiat a dolor quaerat voluptate? Doloribus, sapiente aut ducimus eum distinctio provident blanditiis nobis quis.",
        images: [
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
            "https://st2.depositphotos.com/1592314/7878/i/450/depositphotos_78782028-stock-photo-golf-course-spring-field-with.jpg",
        ],
        stacks: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "Prisma",

            "TypeScript",
            "JavaScript",

            "HTML",

            "CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
        ],
        summary: "Ekashunyam is a web application that provides a platform for students to learn and practice coding. It offers a variety of coding challenges and tutorials to help students improve their coding skills. The application is built using React, Next.js, and Node.js, and uses MongoDB as the database. The frontend is styled using Tailwind CSS and Material UI.",
        links: [
            {
                name: "Source Code",
                icon: icons.Github,
                url: "dvchgsdvhgc"
            },
            {
                name: "Live Demo",
                icon: icons.Globe,
                url: "dvchgsdvhgc"
            }
        ]
    },

];

export const experienceData = [
    {
        name: "CodeLab Systems",
        date: "Dec 2024 - Jan 2024",
        desc: "Worked as a Software Engineer Intern at CodeLab Systems, where I developed and maintained web applications using React and Node.js.",
        image: "https://codelabsystems.in/assets/img/logo/cl.png",
        url: "https://codelabsystems.com/",
        stacks: ["React", "Node.js", "Express", "TypeScript"],
    },
];

export const snippetsData: SnippetsDataTypes[] = [
    {
        slug: "accordian",
        title: "Custom Button",
        description: "A reusable, theme-aware button with variants.",
        date: "2023-10-01",
    },
    {
        slug: "debounce-hook",
        title: "useDebounce Hook",
        description: "A custom React hook to debounce any fast-changing value.",
        date: "2023-10-01",
    },
    {
        slug: "modal-component",
        title: "Modal Component",
        description: "Accessible modal with smooth animations.",
        date: "2023-10-01",
    },
];
