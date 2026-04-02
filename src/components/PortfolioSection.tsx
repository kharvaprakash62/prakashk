import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description: "Data-driven dashboard with real-time analytics, interactive charts, and customizable widgets.",
    tools: ["Figma", "React", "Tailwind"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Productivity Mobile App UI",
    description: "Task management app with intuitive flows, dark mode, and gesture-based interactions.",
    tools: ["Figma", "Protopie", "iOS HIG"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Responsive Corporate Website",
    description: "Modern corporate site with clean hierarchy, CMS integration, and accessibility compliance.",
    tools: ["Figma", "Webflow", "GSAP"],
    color: "from-primary/15 to-accent/15",
  },
  {
    title: "Conversion Landing Page",
    description: "High-converting landing page with A/B tested layouts and optimized call-to-actions.",
    tools: ["Figma", "HTML/CSS", "Analytics"],
    color: "from-accent/15 to-primary/15",
  },
  {
    title: "Design System Library",
    description: "Scalable component library with tokens, variants, and comprehensive documentation.",
    tools: ["Figma", "Storybook", "Tokens"],
    color: "from-primary/20 to-accent/10",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Portfolio</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Selected <span className="gradient-text">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`glass-card-hover group rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Placeholder thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-foreground/30 font-display text-sm">Preview</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
