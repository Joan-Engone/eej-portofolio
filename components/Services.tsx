interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "smartphone",
    title: "Mobile Development",
    description:
      "Expertise in building native and cross-platform mobile apps using Java/XML and Flutter for high-performance user experiences.",
  },
  {
    icon: "stack",
    title: "Full-stack Development",
    description:
      "Crafting end-to-end solutions with Next.js, TypeScript, JavaScript, and database management via Prisma and PostgreSQL.",
  },
  {
    icon: "integration_instructions",
    title: "Enterprise Systems",
    description:
      "Developing scalable enterprise applications combining the robust power of Java/Spring Boot with modern React frontends.",
  },
  {
    icon: "checklist",
    title: "Software Quality Assurance",
    description:
      "Ensuring robust software delivery through comprehensive automated testing, continuous integration, and rigorous QA lifecycles.",
  },
  {
    icon: "security",
    title: "Software Security",
    description:
      "Implementing secure coding practices, performing vulnerability assessments, and maintaining high standards for data protection.",
  },
  {
    icon: "assignment",
    title: "Software Project Management",
    description:
      "Driving project success through Agile/Scrum methodologies, efficient resource planning, and end-to-end lifecycle management.",
  },
];

export default function Services() {
  return (
    <section id="features" className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-16">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4 text-center">
            FEATURES
          </p>
          <h2 className="font-headline-md text-headline-md text-center">What I Do</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, description }) => (
            <div key={title} className="neomorph-card p-10 rounded-3xl group">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">{icon}</span>
              </div>
              <h3 className="font-title-sm text-title-sm mb-4">{title}</h3>
              <p className="text-secondary text-body-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}