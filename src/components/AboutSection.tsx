import { Globe, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Crafting Digital Products with <span className="gradient-text">Purpose</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-card p-8 rounded-2xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a product-focused UI/UX & Web Designer with over 5 years of experience creating scalable web and mobile applications. My design philosophy centers on understanding users deeply and translating complex requirements into clean, intuitive interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialize in SaaS dashboard design, responsive web interfaces, and building structured design systems that bridge design and development. I work closely with engineering teams to ensure pixel-perfect implementation and measurable user impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every project I take on is guided by usability, consistency, and a drive to solve real problems through thoughtful design.
            </p>
          </div>

          <div className="space-y-6">
            {/* Languages */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Languages size={18} className="text-primary" />
                <h3 className="font-display font-semibold">Languages</h3>
              </div>
              <div className="space-y-3">
                {[
                  { lang: "Hindi", level: "Native" },
                  { lang: "Gujarati", level: "Native" },
                  { lang: "English", level: "Professional" },
                ].map((l) => (
                  <div key={l.lang} className="flex justify-between text-sm">
                    <span className="text-foreground">{l.lang}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={18} className="text-primary" />
                <h3 className="font-display font-semibold">Education</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">MCA</p>
                  <p className="text-muted-foreground">2017–2019 · CGPA: 7.37</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">BCA</p>
                  <p className="text-muted-foreground">2014–2017 · CGPA: 6.15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
