interface Certification {
  icon: string;
  issuer: string;
  title: string;
  description: string;
  credentialHref: string;
}

const certifications: Certification[] = [
  {
    icon: "workspace_premium",
    issuer: "UDEMY",
    title: "Software Architecture & Design of Modern Large Scale Systems",
    description: "Mastering design patterns, microservices, and enterprise scalability principles for modern high-load systems.",
    credentialHref: "#",
  },
  {
    icon: "computer",
    issuer: "CISCO",
    title: "Operating Systems Basics",
    description: "Fundamental understanding of operating systems, process management, and file systems architecture.",
    credentialHref: "#",
  },
  {
    icon: "lan",
    issuer: "CISCO",
    title: "Networking Essentials",
    description: "Comprehensive understanding of IP networking, security, and router configuration.",
    credentialHref: "#",
  },
  {
    icon: "hub",
    issuer: "INTERNET SOCIETY",
    title: "Advanced Network Operations 2.0",
    description: "Expert-level training in managing complex network infrastructures and internet protocols.",
    credentialHref: "#",
  },
  {
    icon: "settings_input_component",
    issuer: "INTERNET SOCIETY",
    title: "Introduction to Network Operations",
    description: "Gaining core skills for managing and troubleshooting networked environments effectively.",
    credentialHref: "#",
  },
  {
    icon: "insights",
    issuer: "CISCO",
    title: "Introduction to Data Science",
    description: "Exploring data analysis, statistics, and machine learning fundamentals for business intelligence.",
    credentialHref: "#",
  },
  {
    icon: "terminal",
    issuer: "NDG",
    title: "NDG Linux Essentials",
    description: "In-depth knowledge of Linux command line, open source philosophy, and system administration.",
    credentialHref: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-section-padding bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">VERIFIED EXPERTISE</p>
          <h2 className="font-headline-md text-headline-md">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map(({ icon, issuer, title, description, credentialHref }) => (
            <div key={title} className="neomorph-card p-8 rounded-3xl flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl neomorph-inset flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-secondary">{issuer}</p>
                  <h4 className="font-title-sm text-title-sm">{title}</h4>
                </div>
              </div>
              <p className="text-secondary text-body-base mb-6 flex-grow">{description}</p>
              <a href={credentialHref} className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all mt-auto">
                VIEW CREDENTIAL <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}