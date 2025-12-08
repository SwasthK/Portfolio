import { profile } from "@/lib/data/data-profile";
import { Avatar } from "./avatar";
import { Socials } from "./socials";
import { DashLine } from "./dashline";
import { TabSwitcher } from "./tab-switcher";
import { Skills } from "./skills";
import { OnlineStatus } from "./online-status";
import { ProfileTag } from "./profile-tag";

export function IntroCard() {
  return (
    <section className="">
      <div className="flex gap-3 sans  ">
        <Avatar
          className="h-[5.5rem] w-[5.5rem] animate-primary"
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
            {/* <p className="animated-text-100 tx1">{profile.tag}</p> */}
            <ProfileTag />
            <OnlineStatus />
          </div>
          <Socials></Socials>
        </div>
      </div>

      <DashLine />

      <div className="flex gap-4 items-center justify-between w-full animate-primary ">
        <div className="bg-[#EDEDED] dark:bg-[#2e2b2b84] text-[#412222] border dark:text-white px-3 py-2 text-xs sm:text-sm rounded-[5px] sans font-[370]">
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
