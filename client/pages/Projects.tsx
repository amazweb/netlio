import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React and Node.js, featuring product catalogs, shopping cart, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Interactive analytics dashboard displaying real-time data visualizations, custom reports, and performance metrics.",
    tags: ["React", "Chart.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Application",
    description:
      "Real-time weather application with geolocation support, detailed forecasts, and beautiful weather visualizations.",
    tags: ["React", "OpenWeather API", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Social Media Feed",
    description:
      "Social platform with user profiles, post sharing, comments, likes, and real-time notifications using WebSockets.",
    tags: ["React", "Socket.io", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "AI Chat Interface",
    description:
      "Modern chat interface powered by AI, featuring conversation history, markdown support, and intelligent responses.",
    tags: ["React", "OpenAI API", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Projects
            </h1>
            <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full" />
            <p className="text-white/60 mt-6 max-w-2xl">
              A showcase of my recent work and projects I'm proud of. Each project
              represents my commitment to quality, innovation, and solving real-world
              problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all hover:bg-white/10 group"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-[hsl(var(--purple-accent))]/20 to-[hsl(var(--blue-accent))]/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="relative text-white/30 text-lg font-semibold">
                    Project Preview
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs font-medium text-[hsl(var(--purple-accent))] bg-[hsl(var(--purple-accent))]/10 border border-[hsl(var(--purple-accent))]/30 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[hsl(var(--purple-accent))] transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[hsl(var(--purple-accent))] transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
