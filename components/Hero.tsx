import Image from "next/image";

const socialIcons = ["terminal", "code_blocks", "cloud"];
const skillIcons = ["javascript", "database", "data_object"];

export default function Hero() {
  return (
    <header
      id="about"
      className="pt-[160px] pb-section-padding px-gutter max-w-container-max mx-auto overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
            WELCOME TO MY WORLD
          </p>

          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Hi, I&apos;m <span className="text-primary">ENGONE Edouard Joan</span>
            <br />a Software <span className="text-gradient">Developer.</span>
          </h1>

          <p className="text-secondary text-body-base max-w-xl mb-12">
            I build robust, scalable, and high-performance software solutions.
            Specializing in full-stack development with a focus on enterprise-grade
            architectures and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-12">
            {/* Social Links */}
            <div>
              <p className="font-label-caps text-label-caps text-secondary mb-4">
                FIND WITH ME
              </p>
              <div className="flex gap-4">
                {socialIcons.map((icon) => (
                  <div
                    key={icon}
                    className="w-12 h-12 rounded-xl neomorph-card flex items-center justify-center text-secondary hover:text-primary cursor-pointer transition-colors"
                  >
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="font-label-caps text-label-caps text-secondary mb-4">
                BEST SKILL ON
              </p>
              <div className="flex gap-4">
                {skillIcons.map((icon) => (
                  <div
                    key={icon}
                    className="w-12 h-12 rounded-xl neomorph-card flex items-center justify-center text-primary"
                  >
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />

          <div className="relative neomorph-card rounded-3xl p-4 overflow-hidden">
            <Image
              src="/images/profile.jpeg"           // ← Change this to your real image path
              alt="Engone Edouard Joan"
              width={600}
              height={750}
              className="w-full aspect-[4/5] object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}