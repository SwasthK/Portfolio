import { Avatar } from "@/components/avatar";
import { DashLine } from "@/components/dashline";
import RouterSwitch from "@/components/router-switch";
import { profile } from "@/lib/data/data-profile";



export default async function TabRouterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className=" w-full sans">
      <RouterSwitch />
        <div className="pt-4 flex gap-2 items-center ">
          <Avatar
            className="w-10 h-10"
            name={profile.name}
            url={profile.image}
            key={profile.name}
          ></Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-[#353b59] text-[.9rem]">{profile.name}</p>
              <p className="text-[#4F576C] text-xs  font-light">
                Stealth
              </p>
          </div>
        </div>
      </div>
      <DashLine></DashLine>
      {children}
    </div>
  );
}
