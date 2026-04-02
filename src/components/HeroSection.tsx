import { ArrowDown, Briefcase, Monitor, Smartphone } from "lucide-react";

const profileImg = "https://i.postimg.cc/25HzBq1D/Image-(10).jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fade-in">
          <p className="text-primary font-medium mb-3 tracking-wide text-sm uppercase">UI/UX & Web Designer</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Prakash Kharva</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Designing intuitive digital experiences through thoughtful UI/UX and modern web design.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300">
              View Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-xl font-medium text-foreground hover:border-primary/40 transition-all duration-300">
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { icon: Briefcase, label: "5+ Years Experience" },
              { icon: Monitor, label: "SaaS & Product Design" },
              { icon: Smartphone, label: "Web & Mobile" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon size={16} className="text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="order-1 md:order-2 flex justify-center animate-scale-in">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-float" />
            
            {/* Decorative ring pattern */}
            <div className="absolute -inset-6 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-10 rounded-full border border-dashed border-accent/15 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute -inset-14 rounded-full border border-dotted border-primary/10 animate-[spin_40s_linear_infinite]" />
            
            {/* Corner dots */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.6)]" />
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.6)]" />

            <div className="relative glass-card rounded-full p-2">
              <img
                src={profileImg}
                alt="Prakash Kharva"
                width={400}
                height={400}
                className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
