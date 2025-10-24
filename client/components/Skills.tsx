export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "GraphQL", level: 85 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "Firebase", level: 80 },
        { name: "Docker", level: 82 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Team Collaboration", level: 92 },
        { name: "Project Management", level: 85 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold text-white mb-8">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[hsl(var(--purple-accent))] to-[hsl(var(--blue-accent))] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
