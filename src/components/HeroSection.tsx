import { ArrowDown, Briefcase, Monitor, Smartphone } from "lucide-react";

// const profileImg = "https://i.postimg.cc/25HzBq1D/Image-(10).jpg";
const profileImg = "assets/portrait_clean.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fade-in">
          <p className="text-primary font-medium mb-3 tracking-wide text-sm uppercase">UI/UX & Web Designer</p>
          <h1 className="animate-headline font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.95] mb-6 break-words">
            HI, I'M{" "}
            <span className="animate-headline-name gradient-text">PRAKASH KHARVA</span>
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
          <div className="flex flex-wrap gap-x-5 gap-y-3">
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
            {/* Animated design frame */}
            <div aria-hidden="true" className="absolute -inset-8 pointer-events-none">
              <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-primary/70" />
              <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-accent/70" />
              <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-accent/70" />
              <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/70" />
              <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent animate-[portrait-scan_6s_ease-in-out_infinite]" />
            </div>

            {/* Moving focus marker, like a live design-tool cursor */}
            <div aria-hidden="true" className="absolute -inset-12 pointer-events-none">
              <div className="absolute h-3 w-3 border border-accent bg-background shadow-[0_0_14px_hsl(var(--accent)/0.75)] animate-[portrait-cursor_9s_linear_infinite]" />
            </div>

            <div className="absolute -inset-5 rounded-full border-2 border-primary/20 border-dashed animate-[spin_24s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl animate-float" />

            <div>
              <img
                src={profileImg}
                alt="Prakash Kharva"
                width={400}
                height={400}
                className="rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover"
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
