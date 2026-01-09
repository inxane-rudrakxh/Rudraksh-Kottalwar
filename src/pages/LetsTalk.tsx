import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const LetsTalk = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-md"
      >
        <div className="section-container flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
            RUDRAKSH<span className="text-primary">.</span>
          </Link>
          
          <Link
            to="/"
            className="text-label uppercase text-foreground/70 transition-colors hover:text-foreground"
          >
            Back to Home
          </Link>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-32 pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-label uppercase text-primary mb-6 block">Contact</span>
              
              <h1 className="font-display text-display-xl mb-6">
                Let's Talk<span className="text-primary">.</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground mb-16 max-w-md">
                Open to collaboration, projects, and meaningful conversations.
              </p>

              {/* Email */}
              <div className="mb-12">
                <span className="text-label uppercase text-muted-foreground block mb-3">Email</span>
                <a
                  href="mailto:hello@rudraksh.dev"
                  className="group inline-flex items-center gap-3 font-display text-display-sm text-foreground transition-colors hover:text-primary"
                >
                  <span>hello@rudraksh.dev</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-label uppercase text-muted-foreground block mb-4">Connect</span>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-md text-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-16"
            >
              {/* Identity */}
              <p className="text-label uppercase text-muted-foreground mb-12">
                INXANE RUDRAKXH — Full-Stack Developer
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="text-label uppercase text-muted-foreground block mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-body-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-label uppercase text-muted-foreground block mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-body-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-label uppercase text-muted-foreground block mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-body-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors resize-none min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-display text-body-lg font-semibold transition-all hover:gap-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="section-container">
          <p className="text-body-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Rudraksh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LetsTalk;
