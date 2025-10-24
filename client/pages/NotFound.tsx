import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Decorative gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute rounded-full blur-[100px] opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)",
              top: "-15%",
              left: "-10%",
              width: "500px",
              height: "500px",
            }}
          />
          <div
            className="absolute rounded-full blur-[120px] opacity-25"
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
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white mb-4">
              404
            </h1>
            <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full mx-auto mb-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-white/60 text-lg mb-8 max-w-2xl">
            Sorry, the page you're looking for doesn't exist. It might have been moved
            or deleted.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--purple-accent))] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={20} />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
