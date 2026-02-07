import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects({
  projects,
}: {
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-100 mb-8">
        Featured Projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>
    </section>
  );
}
