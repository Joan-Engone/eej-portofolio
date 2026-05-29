import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  websiteHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

const projects: Project[] = [
  {
    title: "Enterprise CRM Solution",
    description:
      "Built with Next.js, Prisma, and PostgreSQL, this CRM helps businesses manage client relationships with real-time analytics.",
    image: "https://lh3.googleusercontent.com/aida-public/AL6-d3n1D9YyU7P9",
    websiteHref: "#",
    secondaryLabel: "View Source",
    secondaryHref: "#",
  },
  {
    title: "Health & Wellness App",
    description:
      "A cross-platform Flutter application for tracking fitness metrics and personalized nutrition plans.",
    image: "https://lh3.googleusercontent.com/aida-public/AL6-d3m2P7XwU8Q0",
    websiteHref: "#",
    secondaryLabel: "Case Study",
    secondaryHref: "#",
  },
  {
    title: "Fintech Desktop Terminal",
    description:
      "High-performance Java desktop application for institutional stock trading and market data analysis.",
    image: "https://lh3.googleusercontent.com/aida-public/AL6-d3l3O6YvV9R1",
    websiteHref: "#",
    secondaryLabel: "View Source",
    secondaryHref: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-section-padding bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-headline-md text-headline-md">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            ({
              title,
              description,
              image,
              websiteHref,
              secondaryLabel,
              secondaryHref,
            }) => (
              <div
                key={title}
                className="neomorph-card rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="p-4 flex flex-col flex-1">
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={225}
                    className="w-full aspect-video object-cover rounded-2xl mb-6"
                    unoptimized
                  />

                  <h4 className="font-title-sm text-title-sm mb-2 px-2">
                    {title}
                  </h4>

                  <p className="text-secondary text-body-base mb-6 px-2 flex-1">
                    {description}
                  </p>

                  <div className="flex justify-between items-center mt-auto px-2 pb-2">
                    <a
                      href={websiteHref}
                      className="bg-inverse-surface text-white px-4 py-2 rounded-lg font-label-caps text-label-caps font-bold hover:bg-primary transition-all"
                    >
                      Visit Website
                    </a>

                    <a
                      href={secondaryHref}
                      className="text-primary font-bold hover:underline font-label-caps text-label-caps"
                    >
                      {secondaryLabel}
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}