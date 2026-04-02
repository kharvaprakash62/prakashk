import { Palette, Layout, Search, Layers, MonitorSmartphone, Code, Target, FileCheck } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    items: [
      { icon: Search, label: "User Research" },
      { icon: Layers, label: "Wireframing & Prototyping" },
      { icon: Palette, label: "Product Interface Design" },
      { icon: FileCheck, label: "Design Systems" },
    ],
  },
  {
    title: "Web Design",
    items: [
      { icon: MonitorSmartphone, label: "Responsive Websites" },
      { icon: Layout, label: "Modern UI Layouts" },
      { icon: Target, label: "Conversion-Focused Pages" },
      { icon: Code, label: "Developer-Ready Designs" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Services</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          What I <span className="gradient-text">Offer</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="glass-card-hover p-8 rounded-2xl">
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">{service.title}</h3>
              <div className="space-y-4">
                {service.items.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
