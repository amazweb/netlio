import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:afraoua@live.fr",
      label: "Email",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[hsl(var(--background))] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Web Development</li>
              <li>Full-Stack Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-[hsl(var(--purple-accent))] mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:afraoua@live.fr"
                    className="text-white text-sm hover:text-[hsl(var(--purple-accent))] transition-colors"
                  >
                    afraoua@live.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-[hsl(var(--purple-accent))] mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+393517539367"
                    className="text-white text-sm hover:text-[hsl(var(--purple-accent))] transition-colors"
                  >
                    +39 351 753 9367
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[hsl(var(--purple-accent))] mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase">
                    Location
                  </p>
                  <p className="text-white text-sm">Sondrio, Italy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-white/60 text-sm mb-4">
              Ready to start your project? Let's talk!
            </p>
            <a
              href="mailto:afraoua@live.fr"
              className="inline-block px-4 py-2 rounded-lg bg-[hsl(var(--purple-accent))] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © {currentYear} Abdellah Afraoua. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
