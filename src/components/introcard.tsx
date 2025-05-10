import { profile } from "@/lib/data/data-profile";
import { Avatar } from "./avatar";
import { Socials } from "./socials";
import { DashLine } from "./dashline";
import { TabSwitcher } from "./tab-switcher";
import { Skills } from "./skills";
import { OnlineStatus } from "./online-status";

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
            <OnlineStatus />
          </div>
          <Socials></Socials>
        </div>
      </div>

      <DashLine />

      <div className="flex gap-4 items-center justify-between w-full animate-primary">
        <div className="bg-[#EDEDED] px-3 py-2 text-xs sm:text-sm rounded-[5px] sans tx1 font-[370]">
          {profile.desc}
        </div>
      </div>

      <Skills />

      <div className="">
        <DashLine />
        <TabSwitcher />
      </div>
    </section>
  );
}
