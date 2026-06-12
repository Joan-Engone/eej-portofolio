interface SkillBar {
  label: string;
  percentage: number;
}

interface TechItem {
  icon: string;
  label: string;
}

const techStack: TechItem[] = [
  { icon: "smartphone", label: "Java / Flutter" },
  { icon: "code", label: "Next.js / TS" },
  { icon: "database", label: "Prisma / SQL" },
  { icon: "coffee", label: "Spring / React" },
];

const skillBars: SkillBar[] = [
  { label: "System Architecture", percentage: 95 },
  { label: "Cloud Infrastructure", percentage: 85 },
];

export default function Experience() {
  return (
    <section id="experience" className="py-section-padding">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
              PROFESSIONAL JOURNEY
            </p>
            <h2 className="font-headline-md text-headline-md mb-12">Work Experience</h2>

            <div className="relative border-l-2 border-surface-container ml-4">
              <div className="mb-12 ml-8 relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background shadow-lg" />
                <div className="neomorph-card p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-title-sm text-title-sm">Software Engineer Intern</h4>
                      <p className="text-primary font-medium">Radiant Insurance Company</p>
                    </div>
                    <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant whitespace-nowrap">
                      SEPT 2025 - JAN 2026
                    </span>
                  </div>
                  <p className="text-secondary text-body-base">
                    Driving innovation through the development of HR Management System with
                    different portals using Next js, Typescript, Javascript, prisma and Postgresql.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack & Skills */}
          <div>
            <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
              TECH STACK
            </p>
            <h2 className="font-headline-md text-headline-md mb-12">Expertise</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {techStack.map(({ icon, label }) => (
                  <div key={label} className="neomorph-card p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg neomorph-inset flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <span className="font-bold">{label}</span>
                  </div>
                ))}
              </div>

              <div className="neomorph-card p-8 rounded-2xl">
                <h4 className="font-title-sm text-title-sm mb-6">Backend Proficiency</h4>
                <div className="space-y-6">
                  {skillBars.map(({ label, percentage }) => (
                    <div key={label}>
                      <div className="flex justify-between mb-2">
                        <span className="font-label-caps text-label-caps uppercase">{label}</span>
                        <span className="font-label-caps text-label-caps text-primary">{percentage}%</span>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}