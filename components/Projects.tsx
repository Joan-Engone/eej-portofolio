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
  title: "Global Concept",
  description:
    "Built to support digital marketing and brand communication, this platform enables businesses to promote their services, publish content, and engage customers effectively online.",
  image: "/projects/global-concepts-p.jpg",
  websiteHref: "https://global-concept-joan-engones-projects.vercel.app/",
  secondaryLabel: "View Source",
  secondaryHref: "#",
},
  {
  title: "Agneghe Beach Hotel",
  description: "A modern web application for Agneghe Beach Hotel, featuring room reservations, guest management, online booking, restaurant ordering, and real-time room availability.",
  image: "/projects/agneghe.jpg",
  websiteHref: "https://agneghe.vercel.app",
  secondaryLabel: "Case Study",
  secondaryHref: "#"
},
  {
  title: "Radiant HR Management System",
  description: "High-performance Java desktop application for comprehensive human resource management, including employee records, payroll, recruitment, performance tracking, and organizational analytics.",
  image: "/projects/radiant.jpg",
  websiteHref: "#",
  secondaryLabel: "View Source",
  secondaryHref: "#"
},
{
  title: "Website Gym",
  description: "A modern web application for a gym enterprise.",
  image: "/projects/gym.jpg",
  websiteHref: "#",
  secondaryLabel: "View Source",
  secondaryHref: "#"
},

{
  title: "Symptra App",
  description: "An android application for a gym enterprise.",
  image: "/projects/symptra.jpg",
  websiteHref: "#",
  secondaryLabel: "View Source",
  secondaryHref: "#"
}
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
                className="neomorph-card rounded-3xl overflow-hidden flex flex-col group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={225}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={image.startsWith("http")} // Only unoptimized for external URLs
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
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