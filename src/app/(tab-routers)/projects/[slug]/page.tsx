import { DataNotFound } from "@/components/data-not-found";
import { ProjectDetails } from "@/components/projects/projectdetails";
import { projectsData } from "@/lib/data/data-project";
import { DynamicMetaDataType } from "@/lib/types/global";
import { ProjectsDataTypes } from "@/lib/types/types-project";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: DynamicMetaDataType,
): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: {
      absolute:`Project | ${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")}`,
    },
    description: "Explore Swasthik's portfolio featuring modern full-stack web projects, UI/UX designs, and blog insights on development best practices. Available for freelance and full-time opportunities.",
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
