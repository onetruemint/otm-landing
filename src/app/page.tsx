import { db } from "@/lib/firebase";
import { Project } from "@/lib/types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";

export const revalidate = 60;

async function getProjects(): Promise<Project[]> {
  if (!db) return [];

  try {
    const snapshot = await db
      .collection("projects")
      .orderBy("pinned", "desc")
      .orderBy("display_order", "asc")
      .get();

    return snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Project,
    );
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
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
