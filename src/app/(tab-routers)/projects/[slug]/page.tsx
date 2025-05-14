import { DataNotFound } from "@/components/data-not-found";
import { ProjectDetails } from "@/components/projects/projectdetails";
import { projectsData } from "@/lib/data/data-project";
import { DynamicMetaDataType } from "@/lib/types/global";
import { ProjectsDataTypes } from "@/lib/types/types-project";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: DynamicMetaDataType): Promise<Metadata> {
  const { slug } = await params;

  const project = projectsData.find(
    (project) => project.slug === slug.toLowerCase()
  );

  if (!project) {
    return {
      title: {
        absolute: "Project Not Found",
      },
      description: "The requested code project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      absolute:
        "Project | " +
        project.slug.charAt(0).toUpperCase() +
        project.slug.slice(1).replace(/-/g, " "),
    },
    description: project.desc,
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

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
