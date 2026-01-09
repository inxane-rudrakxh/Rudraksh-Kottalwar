import { motion } from "framer-motion";

const skills = [
  "Brand Identity",
  "Visual Systems",
  "Print Design",
  "Editorial",
  "UI/UX",
  "Motion Graphics",
  "Typography",
  "Art Direction",
];

const tools = ["Figma", "Adobe Suite", "After Effects", "Blender", "Framer"];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-card relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-label uppercase text-primary mb-4 block">About</span>
            <h2 className="font-display text-display-lg mb-8">
              Clarity
              <br />
              Over Chaos<span className="text-primary">.</span>
            </h2>
            
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                I'm Shashish—a graphic designer specializing in bold, modern visual solutions 
                that help brands confidently stand out. Every project starts with intent and 
                ends with precision.
              </p>
              <p>
                From concept to execution, I focus on transforming complex ideas into clear, 
                impactful visuals that resonate with audiences and elevate brand presence.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-16"
          >
            {/* Philosophy */}
            <div className="mb-16 p-8 border border-border">
              <span className="text-label uppercase text-muted-foreground mb-6 block">Philosophy</span>
              <blockquote className="font-display text-display-md text-foreground">
                "Design is intent made visible. Every choice should signal, not decorate."
              </blockquote>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <span className="text-label uppercase text-muted-foreground mb-6 block">Capabilities</span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-body-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <span className="text-label uppercase text-muted-foreground mb-6 block">Tools</span>
              <div className="flex flex-wrap gap-6">
                {tools.map((tool) => (
                  <span key={tool} className="text-body-md text-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
