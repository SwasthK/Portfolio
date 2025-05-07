import { profile } from "@/lib/data";
import { Avatar } from "./avatar";
import { Socials } from "./socials";
import { DashLine } from "./dashline";
import { TabSwitcher } from "./tab-switcher";

export function IntroCard() {
  return (
    <section className="">
      <div className="flex gap-6 sans  ">
        <Avatar
          className="h-24 w-24 rounded-[5px] animate-primary"
          name={profile.name}
          url={profile.image}
        />
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <p className="text-xl sm:text-2xl font-semibold  text-custom-tertiary animated-text-100">
              {profile.name}
            </p>
          </div>
          <div className="flex gap-4 items-center text-xs">
            <p className="animated-text-100 tx1">{profile.tag}</p>
          
          </div>
          <Socials></Socials>
        </div>
      </div>

      <DashLine />

      <div className="flex gap-4 items-center justify-between w-full">
        <div className="bg-[#EDEDED] px-3 py-2 text-xs sm:text-sm rounded-[5px] sans tx1 font-[370]">
          I&apos;m a developer, optimist, and community builder. I work at Vercel,
          where I teach the Next.js community, an open-source web framework
          built with React.
        </div>
      </div>

      <div className="pt-3 flex gap-2 flex-col w-full">
        {stacks.map((stack) => (
          <div key={stack.label}>
            <p className="text-xs font-light tx1">{stack.label}</p>
            <div className="flex gap-2 items-start ">
              {stack.items.map((item) => (
                <div key={item.name} className="h-4 relative sans pl-1">
                  <p className="text-xs font-light text-[#4F576C]">
                    {" "}
                    {item.name} |
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <DashLine />
        <TabSwitcher />
      </div>
    </section>
  );
}

const stacks = [
  {
    label: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    label: "Frameworks",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    label: "Databases",
    items: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
  },
  {
    label: "Devops",
    items: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "AWS EC2",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "AWS S3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
  },
];
