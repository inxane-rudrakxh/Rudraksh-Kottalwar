const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-label uppercase text-muted-foreground">
          © 2026 RUDRAKSH. ALL RIGHTS RESERVED
        </p>
        
        <a href="#" className="font-display text-lg font-bold text-foreground">
          INXANE RUDRAKXH<span className="text-primary">.</span>
        </a>
        
        <p className="text-label uppercase text-muted-foreground">
          CODE WITH INTENT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
