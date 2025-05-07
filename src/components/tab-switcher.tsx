import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabProjects } from "./tab-projects";
import { TabSnippets } from "./tab-snippets";
import { TabBlogs } from "./tab-blogs";
import { TabExperience } from "./tab-experience";
import { tabs } from "@/lib/data";

export function TabSwitcher() {
  return (
  
    <Tabs defaultValue={tabs[0].value} >
      <TabsList className="">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="cursor-pointer flex items-center gap-2 hover:underline hover:underline-offset-4">
           <p>{tab.name}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={tabs[0].value}>
        <TabProjects></TabProjects>
      </TabsContent>
      <TabsContent value={tabs[1].value}>
        <TabSnippets />
      </TabsContent>
      <TabsContent value={tabs[2].value}>
        <TabBlogs />
      </TabsContent>
      <TabsContent value={tabs[3].value}>
        <TabExperience />
      </TabsContent>
    </Tabs>
  );
}