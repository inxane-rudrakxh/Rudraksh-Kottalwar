import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center noise-overlay">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      
      {/* Gradient accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-3 h-3 bg-primary" />
            <span className="text-label uppercase text-muted-foreground tracking-widest">
              Graphic Designer / Visual Architect
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-xl mb-8"
          >
            Design
            <br />
            <span className="text-gradient">With Intent</span>
            <span className="text-primary">.</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 mt-16"
          >
            <p className="text-body-lg text-muted-foreground max-w-md">
              Crafting bold, modern visual solutions that cut through the noise. 
              Every design is intentional—built for clarity, impact, and confident brand presence.
            </p>

            <div className="flex items-start gap-6">
              <a
                href="#work"
                className="group flex items-center gap-4 text-foreground transition-colors hover:text-primary"
              >
                <span className="text-body-lg font-medium">View Selected Work</span>
                <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-6 md:left-8 flex flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent" />
          <span className="text-label uppercase text-muted-foreground" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
