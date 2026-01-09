import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const tools = ["Cursor", "Figma", "Framer", "Android Studio", "Supabase"];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-card relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
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
            
            <div className="space-y-6 text-body-lg text-muted-foreground mb-12">
              <p>
                I'm Shashish—a full-stack developer passionate about building clean, 
                functional applications. Every project starts with intent and 
                ends with precision.
              </p>
              <p>
                From concept to deployment, I focus on transforming complex ideas into 
                elegant, user-focused solutions that solve real problems.
              </p>
            </div>

            {/* Tools */}
            <div>
              <span className="text-label uppercase text-muted-foreground mb-6 block">Tools</span>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <span key={tool} className="text-body-md text-foreground/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-end"
          >
            {/* Profile Image */}
            <div className="mb-10 max-w-md">
              <img
                src={profilePhoto}
                alt="Shashish"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Philosophy text */}
            <div className="max-w-md text-right">
              <p className="font-display text-display-sm text-foreground mb-2">
                "Code with purpose. Build with clarity."
              </p>
              <p className="text-body-md text-muted-foreground">
                Every line of code should serve a reason—never just to exist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
