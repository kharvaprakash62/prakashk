const experiences = [
  {
    role: "Software Designer",
    company: "OpenEyes Software Solutions Pvt. Ltd.",
    period: "Aug 2024 – Present",
    points: [
      "End-to-end UX flows for complex products",
      "Wireframes & high-fidelity UI design",
      "Component systems & design tokens",
      "Close developer collaboration & handoff",
    ],
  },
  {
    role: "Sr. UI/UX Developer",
    company: "Svaapta IT-Ally Solutions Pvt. Ltd.",
    period: "Jan 2022 – Aug 2024",
    points: [
      "SaaS dashboard design & iteration",
      "Mobile-first responsive interfaces",
      "Stakeholder collaboration & user research",
      "Design handoff optimization workflows",
    ],
  },
  {
    role: "Jr. Web Designer",
    company: "Zonic Digital Pvt. Ltd.",
    period: "Dec 2019 – Jan 2022",
    points: [
      "Responsive websites & landing pages",
      "Branding & creative design",
      "Conversion-focused page layouts",
      "Cross-browser compatibility testing",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Professional <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

                <div className="glass-card-hover p-6 md:p-8 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
