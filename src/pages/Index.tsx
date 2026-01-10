import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import MarqueeSection from "@/components/MarqueeSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* TOP ANCHOR (LOGO SCROLL) */}
        <div id="top"></div>

        {/* HERO */}
        <HeroSection />

        {/* MARQUEE */}
        <MarqueeSection />

        {/* PROJECTS */}
        <section id="work">
          <WorkSection />
        </section>

        {/* SKILLS */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* ABOUT */}
        <section id="about">
          <AboutSection />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
