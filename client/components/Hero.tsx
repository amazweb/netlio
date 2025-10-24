import { Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[hsl(var(--background))] pt-20 sm:pt-24 pb-20 min-h-screen flex items-center justify-center"
      style={{ margin: "7px 0 0 -1px" }}
    >
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Top left white to purple gradient */}
        <div
          className="absolute rounded-full blur-[100px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)",
            top: "-15%",
            left: "-10%",
            width: "500px",
            height: "500px",
          }}
        />
        {/* Blob 2 - Top right pink to purple gradient */}
        <div
          className="absolute rounded-full blur-[120px] opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(168, 85, 247, 0.25) 50%, transparent 70%)",
            top: "-10%",
            right: "-5%",
            width: "550px",
            height: "550px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-white"
              >
                <path
                  d="M8 1L10.4 7.4L17 8L12 13L13.8 19.5L8 15.9L2.2 19.5L4 13L-1 8L5.6 7.4L8 1Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-xs sm:text-sm font-mono text-white/90 tracking-wide">
                Crafting digital experiences
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div style={{ margin: "-4px 0 24px" }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                <span className="inline-block">I'm</span>
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="text-white/40 text-sm font-light">
                <h2 style={{ textAlign: "center" }}></h2>
              </div>
              <div className="relative inline-block">
                <div
                  className="h-1 sm:h-1.5 bg-[hsl(var(--purple-accent))] mt-2 sm:mt-4 rounded-full"
                  style={{
                    width: "95%",
                  }}
                />
              </div>
            </div>
            <div className="relative inline-block">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[hsl(var(--purple-accent))] tracking-tight mb-2 sm:mb-4">
                <p>Abdellah</p>
                <p>Afraoua</p>
              </h2>
              {/* Underline accent */}
              <div
                className="h-1 sm:h-1.5 bg-[hsl(var(--purple-accent))] mt-2 sm:mt-4 rounded-full"
                style={{
                  width: "95%",
                }}
              />
            </div>
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              style={{ marginTop: "27px" }}
            >
              Full-Stack Developer
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12">
            <a
              href="https://drive.google.com/file/d/16OGMpCZtUrLENL4MtFyfo1mrdA-OX8lJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[hsl(var(--purple-accent))] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border-2 border-[hsl(var(--purple-accent))] text-[hsl(var(--purple-accent))] font-semibold hover:bg-[hsl(var(--purple-accent))]/10 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border-2 border-[hsl(var(--purple-accent))] text-[hsl(var(--purple-accent))] font-semibold hover:bg-[hsl(var(--purple-accent))]/10 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
