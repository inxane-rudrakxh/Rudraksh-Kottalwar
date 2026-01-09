import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AttendX",
    description: "AI-based attendance management system using voice recognition.",
    tags: ["Web", "Python", "Voice Recognition"],
  },
  {
    title: "SecureVault",
    description: "Desktop application for securely storing and encrypting personal files.",
    tags: ["Desktop", "Python", "Encryption"],
  },
  {
    title: "SecureVault v2",
    description: "Enhanced version of SecureVault with biometric authentication and advanced security features.",
    tags: ["Desktop", "Python", "Face Recognition"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-spacing relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 border-b border-border pb-8"
        >
          <div>
            <span className="text-label uppercase text-primary mb-4 block">Featured Work</span>
            <h2 className="font-display text-display-lg">
              Projects<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-body-md text-muted-foreground max-w-md text-right hidden md:block">
            Personal projects exploring AI, security, and cross-platform development.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkSection;
