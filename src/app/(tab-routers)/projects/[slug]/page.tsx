import { DataNotFound } from "@/components/data-not-found";
import { ProjectDetails } from "@/components/projects/projectdetails";
import { projectsData } from "@/lib/data/data-project";
import { ProjectsDataTypes } from "@/lib/types/types-project";

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
    return <DataNotFound label="Project" redirect="/projects" />;
  }

  return (
    <div className="">
      {!result ? (
        <DataNotFound label="Project" redirect="/projects" />
      ) : (
        <ProjectDetails project={result} />
      )}
    </div>
  );
}
