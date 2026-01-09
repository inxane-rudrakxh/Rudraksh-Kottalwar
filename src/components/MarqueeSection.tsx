const MarqueeSection = () => {
  const items = [
    "BRAND IDENTITY",
    "VISUAL SYSTEMS", 
    "PRINT EDITIONS",
    "INTERFACE DESIGN",
    "ART DIRECTION",
    "TYPOGRAPHY",
  ];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="font-display text-display-md text-foreground/20 whitespace-nowrap px-8">
              {item}
            </span>
            <span className="text-primary text-2xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
