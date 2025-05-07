import { ProjectDetailsContainer } from "@/components/project-main/projectdetailscontainer";
import { ProjectNotFound } from "@/components/project-meta-components/project-not-found";
import { projectsData } from "@/lib/data";
import { ProjectsDataTypes } from "@/lib/types";

export default async function Projects({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result: ProjectsDataTypes | undefined = projectsData.find(
    (project) => project.slug === slug.toLowerCase()
  );

  if (!result) {
    return <ProjectNotFound />;
  }

  return (
    <div className="">
      {!result ? (
        <ProjectNotFound />
      ) : (
        <ProjectDetailsContainer project={result} />
      )}
    </div>
  );
}
