const skillCategories = [
  {
    title: "UX Skills",
    skills: ["UX Research", "User Flows", "Wireframing", "Prototyping"],
  },
  {
    title: "UI & Product Design",
    skills: ["SaaS Dashboard Design", "Mobile App UI", "Design Systems", "Visual Design"],
  },
  {
    title: "Development Collaboration",
    skills: ["Responsive Web Design", "HTML & CSS", "Developer Handoff", "Design Tokens"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Tools & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold mb-5 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
