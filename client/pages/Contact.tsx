import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (send to backend or email service)
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afraoua@live.fr",
      href: "mailto:afraoua@live.fr",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+39 351 753 9367",
      href: "tel:+393517539367",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sondrio, Italy",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:afraoua@live.fr",
      color: "hover:text-[hsl(var(--blue-accent))]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-[hsl(var(--blue-accent))]",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-[hsl(var(--blue-accent))]",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <div className="h-1 w-20 bg-[hsl(var(--purple-accent))] rounded-full" />
            <p className="text-white/60 mt-6 max-w-2xl">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to collaborate or just say
              hello!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(var(--purple-accent))] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(var(--purple-accent))] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(var(--purple-accent))] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(var(--purple-accent))] transition-colors resize-none"
                    placeholder="Tell me more about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-[hsl(var(--purple-accent))] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Whether you have a question, a project proposal, or just
                    want to say hi, feel free to get in touch. I typically
                    respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Direct Contact
                  </h4>
                  <div className="space-y-3">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <a
                          key={info.label}
                          href={info.href}
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                        >
                          <Icon size={20} />
                          <div className="flex flex-col">
                            <span className="text-xs text-white/50 font-semibold uppercase">
                              {info.label}
                            </span>
                            <span>{info.value}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-all ${social.color}`}
                        title={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
