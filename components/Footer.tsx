const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full py-section-padding shadow-inner">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <span className="font-title-sm text-title-sm font-bold text-on-surface">DevPortfolio</span>
          </div>
          <p className="font-body-base text-body-base text-on-surface-variant max-w-xs text-center md:text-left">
            &copy; 2024 DevPortfolio. Built with Precision. Engineering digital experiences.
          </p>
        </div>

        <div className="flex gap-8">
          {footerLinks.map(({ label, href }) => (
            
              key={label}
              href={href}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}