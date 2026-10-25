import Image from "next/image";

interface DesignProject {
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  prototypeHref: string;
  prototypeLabel: string;
}

const designProjects: DesignProject[] = [
  {
    title: "Mobility – Shared Taxi App",
    category: "Mobile App UI/UX",
    description:
      "End-to-end UX for a digitalized shared-taxi platform: rider onboarding, route search, live trip tracking and payment flows.",
    image: "/design/mobilitymo.png",
    tools: ["Figma", "Prototyping", "User Flows"],
    prototypeHref: "#",
    prototypeLabel: "View Prototype",
  },
  {
    title: "MIS Dashboard",
    category: "Dashboard Design",
    description:
      "Role-based dashboards for administrators, managers and staff, focused on clear data hierarchy and fast daily workflows.",
    image: "/design/kolivoaccueil.png",
    tools: ["Figma", "Design System", "Data Visualization"],
    prototypeHref: "#",
    prototypeLabel: "View Prototype",
  },
  {
    title: "Auto Zone Marketplace",
    category: "Web UI Design",
    description:
      "Marketplace interface for browsing, comparing and listing vehicles, designed for buyers, sellers and admins.",
    image: "/design/autozone.png",
    tools: ["Figma", "Wireframing", "UI Kit"],
    prototypeHref: "#",
    prototypeLabel: "View Prototype",
  },
];

export default function DesignProjects() {
  return (
    <section id="design" className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
            DESIGN
          </p>
          <h2 className="font-headline-md text-headline-md">
            UI/UX Design Projects
          </h2>
          <p className="text-secondary text-body-base max-w-2xl mx-auto mt-4">
            From research and wireframes to polished interfaces and clickable
            prototypes, here is a selection of my design work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map(
            ({
              title,
              category,
              description,
              image,
              tools,
              prototypeHref,
              prototypeLabel,
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
                    height={300}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={image.startsWith("http")}
                  />
                  <span className="absolute top-4 left-4 bg-inverse-surface text-white px-3 py-1 rounded-full font-label-caps text-label-caps">
                    {category}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-title-sm text-title-sm mb-2 px-2">
                    {title}
                  </h4>

                  <p className="text-secondary text-body-base mb-4 px-2 flex-1">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 px-2 mb-6">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="neomorph-inset px-3 py-1 rounded-full text-primary font-label-caps text-label-caps"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto px-2 pb-2">
                    <a
                      href={prototypeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-inverse-surface text-white px-4 py-2 rounded-lg font-label-caps text-label-caps font-bold hover:bg-primary transition-all"
                    >
                      {prototypeLabel}
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