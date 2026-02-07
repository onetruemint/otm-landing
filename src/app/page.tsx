import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";

export const revalidate = 60;

async function getProjects(): Promise<Project[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("pinned", { ascending: false })
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch projects:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function Home() {
  const projects = await getProjects();
  const pinned = projects.filter((p) => p.pinned);
  const regular = projects.filter((p) => !p.pinned);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects projects={pinned} />
        <ProjectGrid projects={regular} />
      </main>
      <Footer />
    </div>
  );
}
