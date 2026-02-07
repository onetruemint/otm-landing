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
      className={`group h-96 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden transition-colors hover:border-mint/40 flex ${
        featured ? "flex-col md:flex-row md:h-64" : "flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 bg-gray-800 ${
          featured
            ? "h-44 md:h-full md:w-1/2"
            : "h-44"
        }`}
      >
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.name}
            fill
            className="object-cover"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            <svg
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        className={`p-6 flex flex-col min-h-0 flex-1 ${
          featured ? "md:w-1/2" : ""
        }`}
      >
        <h3 className="shrink-0 text-lg font-semibold text-gray-100 group-hover:text-mint transition-colors">
          {project.name}
        </h3>
        <div className="mt-2 min-h-0 flex-1 overflow-y-auto">
          <p className="text-sm text-gray-400">
            {project.description ?? "\u00A0"}
          </p>
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {card}
      </a>
    );
  }

  return card;
}
