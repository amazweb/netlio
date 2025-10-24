import { Code2, Zap, Target } from "lucide-react";

export default function PersonalProfile() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend technologies",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Performance-optimized solutions with clean code",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations",
    },
  ];

  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3a504946821f498f976b3da771886988%2Fd746250380a8408eb86c4f4a43ddf26c?format=webp&width=800"
              alt="Abdellah Afraoua"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-[hsl(var(--purple-accent))]"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Personal Profile
          </h2>
          <p className="text-[hsl(var(--purple-accent))] text-xl font-semibold">
            Full Stack Developer
          </p>
          <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full mx-auto mt-6" />
        </div>

        {/* Profile Bio */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-white/80 text-center leading-relaxed text-lg">
            I'm a dedicated Full Stack Developer with a passion for creating
            exceptional digital experiences. With expertise spanning modern
            frontend frameworks, backend development, and database management, I
            bring comprehensive solutions to every project. My approach combines
            technical excellence with a deep understanding of user needs and
            business goals.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-[hsl(var(--purple-accent))]/50 hover:bg-white/10 transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-[hsl(var(--purple-accent))]/10 border border-[hsl(var(--purple-accent))]/30">
                    <Icon
                      size={28}
                      className="text-[hsl(var(--purple-accent))]"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white/60">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[hsl(var(--purple-accent))] mb-2">
              5+
            </div>
            <p className="text-white/70">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[hsl(var(--purple-accent))] mb-2">
              50+
            </div>
            <p className="text-white/70">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[hsl(var(--purple-accent))] mb-2">
              100%
            </div>
            <p className="text-white/70">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
