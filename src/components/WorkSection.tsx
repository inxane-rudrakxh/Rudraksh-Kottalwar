import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Layerstop",
    category: "Brand Identity / Visual System",
    year: "2024",
    image: project1,
  },
  {
    title: "Nocturn Studios",
    category: "Print Edition / Editorial",
    year: "2024",
    image: project2,
  },
  {
    title: "Forma Collective",
    category: "Interface Design / Web",
    year: "2023",
    image: project3,
  },
  {
    title: "Axiom Apparel",
    category: "Apparel Graphics / Packaging",
    year: "2023",
    image: project4,
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
            <span className="text-label uppercase text-primary mb-4 block">Selected Projects</span>
            <h2 className="font-display text-display-lg">
              Work<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-body-md text-muted-foreground max-w-md text-right hidden md:block">
            A curated selection of brand identities, print editions, interfaces, and visual ventures.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-body-lg text-foreground border-b border-foreground pb-1 transition-colors hover:text-primary hover:border-primary"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
