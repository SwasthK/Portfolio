import { skills } from "@/lib/data/data-skills";

export const Skills = () => {
  return (
    <div className="pt-3 flex gap-2 flex-col w-full animated-text-100 ">
      {skills.map((skill) => (
        <div key={skill.label}>
          <p className="text-xs font-light  ">{skill.label}</p>
          <div className="flex gap-2 items-start ">
            {skill.items.map((item) => (
              <div key={item.name} className="h-4 relative sans pl-1">
                <p className="text-xs font-light text-[#4F576C] dark-text">
                  {" "}
                  {item.name} |
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
