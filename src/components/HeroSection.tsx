import { ArrowDown, Briefcase, Monitor, Smartphone } from "lucide-react";

// const profileImg = "https://i.postimg.cc/25HzBq1D/Image-(10).jpg";
const profileImg = "assets/pkpro2.png";

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
            {/* Animated gradient blobs */}
            <div className="absolute -inset-10 animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/40 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-accent/40 rounded-full blur-2xl" />
            </div>
            <div className="absolute -inset-10 animate-[spin_12s_linear_infinite_reverse]">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
            </div>

            {/* Orbiting rings with gradient strokes */}
            <div className="absolute -inset-6 rounded-full border-2 border-transparent animate-[spin_15s_linear_infinite]" style={{ borderImage: 'linear-gradient(135deg, hsl(217 91% 60% / 0.5), transparent 50%, hsl(260 80% 65% / 0.5)) 1' }} />
            <div className="absolute -inset-10 rounded-full animate-[spin_20s_linear_infinite_reverse]">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(217 91% 60% / 0.2)" strokeWidth="0.5" strokeDasharray="4 6" />
              </svg>
            </div>
            <div className="absolute -inset-16 rounded-full animate-[spin_25s_linear_infinite]">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(260 80% 65% / 0.15)" strokeWidth="0.3" strokeDasharray="2 8" />
              </svg>
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full animate-float"
                style={{
                  background: i % 2 === 0 ? 'hsl(217 91% 60%)' : 'hsl(260 80% 65%)',
                  boxShadow: i % 2 === 0 ? '0 0 12px hsl(217 91% 60% / 0.8)' : '0 0 12px hsl(260 80% 65% / 0.8)',
                  top: `${15 + Math.sin(i * 1.05) * 40}%`,
                  left: `${15 + Math.cos(i * 1.05) * 40}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              />
            ))}

            {/* Hexagon pattern overlay */}
            <div className="absolute -inset-8 animate-[spin_30s_linear_infinite_reverse] opacity-20">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <polygon points="100,10 170,50 170,130 100,170 30,130 30,50" fill="none" stroke="hsl(217 91% 60%)" strokeWidth="0.5" />
                <polygon points="100,30 150,60 150,120 100,150 50,120 50,60" fill="none" stroke="hsl(260 80% 65%)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Main glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/25 rounded-full blur-3xl animate-float" />

            <div className="relative glass-card rounded-full p-2 shadow-[0_0_60px_-10px_hsl(217_91%_60%_/_0.3)]">
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
