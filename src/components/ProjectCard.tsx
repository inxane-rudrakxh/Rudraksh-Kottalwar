import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, description, tags, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="p-6 border border-border bg-card/50 h-full transition-all duration-300 hover:border-primary/50 hover:bg-card">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-label text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="font-display text-display-sm text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-label text-xs text-muted-foreground px-2 py-1 bg-muted/50 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
