import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Subtle grid background - reduced opacity */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      
      {/* Gradient accent - reduced intensity */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-40"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Role label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-label uppercase text-foreground/60 tracking-widest">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Main headline - typography focused */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-xl leading-[0.95] mb-8"
          >
            Building Apps for
            <br />
            <span className="text-primary">Web</span>
            <span className="text-foreground/40">,</span>{" "}
            <span className="text-primary">Desktop</span>
            <span className="text-foreground/40"> &</span>
            <br />
            <span className="text-primary">Mobile</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-lg text-foreground/60 max-w-xl mb-12"
          >
            Hi, I'm Rudraksh — a full-stack developer building websites, 
            desktop applications, and Android apps with clean code and solid architecture.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-label uppercase text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
