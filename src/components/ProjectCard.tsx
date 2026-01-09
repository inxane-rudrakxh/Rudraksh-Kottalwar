import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, year, image, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-card mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-foreground flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 text-foreground" />
          </div>
        </div>

        {/* Number index */}
        <div className="absolute top-4 left-4 text-label text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-display-md text-foreground mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-label uppercase text-muted-foreground">{category}</p>
        </div>
        <span className="text-label text-muted-foreground">{year}</span>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
