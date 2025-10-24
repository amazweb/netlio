import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Innovations Inc.",
    feedback:
      "Abdellah delivered an exceptional web application that exceeded our expectations. His attention to detail and problem-solving skills are outstanding. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "CEO",
    company: "Digital Solutions Agency",
    feedback:
      "Working with Abdellah was a game-changer for our business. He transformed our vision into a beautiful, functional platform. Professional, reliable, and highly skilled.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Owner",
    company: "StartupHub",
    feedback:
      "The quality of code and design work was impressive. Abdellah is a true full-stack developer who understands both technical and business needs. A pleasure to work with!",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar Al-Rashid",
    role: "Business Director",
    company: "Enterprise Solutions",
    feedback:
      "Exceptional talent! Abdellah brought our complex project to life with innovative solutions and clean architecture. Would definitely collaborate again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client Feedback
          </h2>
          <p className="text-white/60 text-lg mb-8">
            What People Say About Working with Me
          </p>
          <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all hover:bg-white/10"
            >
              {/* Stars Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[hsl(var(--purple-accent))] text-[hsl(var(--purple-accent))]"
                  />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                "{testimonial.feedback}"
              </p>

              {/* Client Info */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/60 text-sm">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg mb-6">
            Ready to start your next project?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-[hsl(var(--purple-accent))] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
