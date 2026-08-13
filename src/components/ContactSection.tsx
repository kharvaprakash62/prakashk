import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_m92lo0n", "template_3c02s4c", {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, "GfhXRNdesy5Q7O0Tf");
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-[--skeleton-width]">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl space-y-5">
              {[
                { icon: Mail, label: "Kharvaprakash62@gmail.com", href: "mailto:Kharvaprakash62@gmail.com" },
                { icon: Phone, label: "+91 8671 947 093", href: "tel:+918671947093" },
                { icon: MapPin, label: "Vadodara, Gujarat, India", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Globe, href: "#", label: "Behance" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
