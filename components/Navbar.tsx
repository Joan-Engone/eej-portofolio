"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "about";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 120) {   // Increased offset for better feel
          current = section.getAttribute("id") ?? "about";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[4px_4px_10px_rgba(0,0,0,0.05),-4px_-4px_10px_rgba(255,255,255,0.8)]">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            E
          </div>
          <span className="font-title-sm text-title-sm font-bold tracking-tight text-on-surface">
            DevPortfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);

            return (
              <a
                key={href}
                href={href}
                className="relative font-label-caps text-label-caps transition-colors duration-300 group"
              >
                <span
                  className={`${
                    isActive ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                >
                  {label}
                </span>

                {/* Smooth Underline */}
                <span
                  className={`absolute bottom-[-2px] left-0 h-[2px] bg-primary transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <button className="bg-inverse-surface text-white px-6 py-2.5 rounded-lg font-label-caps text-label-caps font-bold hover:bg-primary transition-all duration-300 active:scale-95 shadow-lg">
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}