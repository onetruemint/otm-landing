import Image from "next/image";
import { Project } from "@/lib/types";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const card = (
    <div
      className={`group rounded-xl border border-gray-800 bg-gray-900 overflow-hidden transition-colors hover:border-mint/40 ${
        featured ? "md:flex" : ""
      }`}
    >
      {project.image_url && (
        <div className={`relative aspect-video ${featured ? "md:w-1/2" : ""}`}>
          <Image
            src={project.image_url}
            alt={project.name}
            fill
            className="object-cover"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          />
        </div>
      )}
      <div className={`p-6 ${featured && project.image_url ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
        <h3 className="text-lg font-semibold text-gray-100 group-hover:text-mint transition-colors">
          {project.name}
        </h3>
        {project.description && (
          <p className="mt-2 text-sm text-gray-400 line-clamp-3">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return card;
}
