import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Logo Design",
    description: "Creative logo design with unique brand identity and visual storytelling.",
    tools: ["Illustrator", "Branding", "Typography"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/ece93e244004647.Y3JvcCwxMjA0LDk0MiwxMTAsMA.jpg",
    link: "https://www.behance.net/gallery/244004647/Logo-Design",
  },
  {
    title: "Site Redesign",
    description: "Complete website redesign with modern UI patterns and improved user experience.",
    tools: ["Figma", "Web Design", "UI/UX"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/1c7ab4244004315.Y3JvcCwyNDI0LDE4OTYsMCww.jpg",
    link: "https://www.behance.net/gallery/244004315/Site-Redesign",
  },
  {
    title: "Dashboard Design | App Design",
    description: "Dynamic dashboard and app design with intuitive data visualization and clean interface.",
    tools: ["Figma", "Dashboard", "App Design"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/91c09a193026155.Y3JvcCwxODc2LDE0NjgsMjc0LDA.png",
    link: "https://www.behance.net/gallery/193026155/Dashboard-Design-App-Design",
  },
  {
    title: "Project Management System",
    description: "End-to-end project management tool with task tracking, collaboration, and reporting features.",
    tools: ["Figma", "Web App", "UI/UX"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/aa6a09167123987.Y3JvcCwyNDAwLDE4NzcsMCww.jpg",
    link: "https://www.behance.net/gallery/167123987/Project-Management-System",
  },
  {
    title: "Health Express | Landing Page",
    description: "Health & wellness landing page with engaging visuals and conversion-focused layout.",
    tools: ["Figma", "Landing Page", "Healthcare"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/1f42e1166022515.Y3JvcCwxNjAwLDEyNTEsMCww.jpg",
    link: "https://www.behance.net/gallery/166022515/Health-Express-Landing-Page",
  },
  {
    title: "WhizzQ Landing Page",
    description: "Parallax template landing page with smooth animations and modern aesthetic.",
    tools: ["Figma", "Parallax", "Web Design"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/ec4fe6157854503.Y3JvcCwxMzk5LDEwOTUsMCww.jpg",
    link: "https://www.behance.net/gallery/157854503/WhizzQ-Landing-Page-Parallax-Template",
  },
  {
    title: "MealHi5 | Food Delivery Website",
    description: "Food delivery platform with appetizing visuals, easy ordering flow, and responsive design.",
    tools: ["Figma", "E-commerce", "Web Design"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/c6a11c156306839.Y3JvcCwxMzk5LDEwOTUsMCww.png",
    link: "https://www.behance.net/gallery/156306839/MealHi5-Food-Delivery-Website",
  },
  {
    title: "Fly Landing Page",
    description: "Travel app landing page with immersive imagery and seamless user journey.",
    tools: ["Figma", "Travel", "Landing Page"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/9397af157184219.Y3JvcCwzODUyLDMwMTIsMCww.jpg",
    link: "https://www.behance.net/gallery/157184219/Fly-Landing-Page",
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
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card-hover group rounded-2xl overflow-hidden block ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
