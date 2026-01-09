import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-label uppercase text-primary mb-6 block">Get in Touch</span>
          
          <h2 className="font-display text-display-xl mb-8">
            Let's Create
            <br />
            Something Bold<span className="text-primary">.</span>
          </h2>
          
          <p className="text-body-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Have a project in mind? I'm always open to discussing new ventures, 
            creative ideas, or opportunities to be part of your vision.
          </p>

          <a
            href="mailto:hello@shashish.design"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-display text-body-lg font-semibold transition-all hover:gap-6"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-label uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
            
            <p className="text-body-md text-muted-foreground">
              Based in India — Available Worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
