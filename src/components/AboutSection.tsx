import { Globe, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-[--skeleton-width]">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Crafting Digital Products with <span className="gradient-text">Purpose</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-card p-8 rounded-2xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a product-focused UI/UX & Web Designer based in Vadodara, with over 5 years of experience shaping scalable digital products for startups and enterprise clients. I translate user insights into polished web and mobile interfaces that feel intuitive, accessible, and on-brand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialize in SaaS dashboards, responsive websites, and design systems built around reusable components, interaction patterns, and developer-ready assets. My process blends research, wireframing, prototyping, and design handoff to deliver consistent experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I partner with product teams to solve business problems through thoughtful layouts, clarity of interaction, and measurable improvements in usability and engagement.
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
