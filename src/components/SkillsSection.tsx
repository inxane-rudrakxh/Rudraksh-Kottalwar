import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Java", "C", "C++"],
  },
  {
    title: "Desktop Development",
    skills: ["Python (Desktop)", "File Handling", "Encryption Basics"],
  },
  {
    title: "Mobile Development",
    skills: ["Android Development", "Java", "Kotlin"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "REST APIs", "SQLite", "MongoDB"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-spacing relative">
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
            <span className="text-label uppercase text-primary mb-4 block">Technical Expertise</span>
            <h2 className="font-display text-display-lg">
              Skills<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-body-md text-muted-foreground max-w-md text-right hidden md:block">
            Technologies and tools I use to build modern applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 border border-border bg-card/30 h-full transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
                {/* Category number */}
                <span className="text-label text-muted-foreground mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category title */}
                <h3 className="font-display text-display-sm text-foreground mb-6 transition-colors group-hover:text-primary">
                  {category.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-body-sm text-muted-foreground flex items-center gap-3"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
