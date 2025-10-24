import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              About Me
            </h1>
            <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Full-Stack Developer & Designer
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I'm Abdellah Afraoua, a passionate full-stack developer from Morocco with a
                  deep love for crafting beautiful, functional digital experiences. With
                  expertise in React, Node.js, and modern web technologies, I transform
                  ideas into reality.
                </p>
                <p>
                  My journey in web development started with a curiosity about how things
                  work. Today, I specialize in building scalable applications that users
                  love to interact with, combining design thinking with solid engineering
                  practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open source, or sharing knowledge with the community.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-[hsl(var(--purple-accent))] mb-2">
                  5+
                </div>
                <p className="text-white/70">Years of Experience</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-[hsl(var(--purple-accent))] mb-2">
                  50+
                </div>
                <p className="text-white/70">Projects Completed</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-[hsl(var(--purple-accent))] mb-2">
                  100%
                </div>
                <p className="text-white/70">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">Technologies I Use</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
                "Next.js",
                "Vue.js",
                "GraphQL",
                "Docker",
                "AWS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center text-white/70 hover:bg-white/10 hover:text-white transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
