import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with payment integration",
    category: "E-commerce",
    tags: ["React", "Node.js", "Stripe"],
    imageUrl:
      "https://images.pexels.com/photos/6214370/pexels-photo-6214370.jpeg?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Learning Management System",
    description: "Interactive educational platform with course management",
    category: "Education",
    tags: ["React", "Firebase", "TypeScript"],
    imageUrl:
      "https://images.pexels.com/photos/20432872/pexels-photo-20432872.jpeg?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Online Store",
    description: "Modern e-commerce platform with admin dashboard",
    category: "E-commerce",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl:
      "https://images.pexels.com/photos/7679456/pexels-photo-7679456.jpeg?w=600&h=400&fit=crop",
  },
];

export default function ProjectPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "E-commerce", "Education"];

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            PROJECT PORTFOLIO
          </h2>
          <h3 className="text-2xl font-semibold text-[hsl(var(--purple-accent))] mb-4">
            Selected Works
          </h3>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            A curated collection of my most impactful digital solutions,
            blending innovative design with robust functionality.
          </p>
          <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full mx-auto mt-6" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[hsl(var(--purple-accent))] text-white"
                  : "bg-white/5 text-white/70 border border-white/10 hover:border-white/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all hover:bg-white/10 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-[hsl(var(--purple-accent))]/20 to-[hsl(var(--blue-accent))]/20 flex items-center justify-center relative overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="relative text-white/30 text-lg font-semibold">
                      {project.category}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium text-[hsl(var(--purple-accent))] bg-[hsl(var(--purple-accent))]/10 border border-[hsl(var(--purple-accent))]/30 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-[hsl(var(--purple-accent))] transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-[hsl(var(--purple-accent))] transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
