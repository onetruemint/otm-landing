import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import ProjectGridLayout from "./ProjectGridLayout";

export default function ProjectGrid({
  projects,
}: {
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return (
    <SectionContainer>
      <SectionHeading>Projects</SectionHeading>
      <ProjectGridLayout>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGridLayout>
    </SectionContainer>
  );
}
