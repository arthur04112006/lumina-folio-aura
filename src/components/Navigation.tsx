import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "experience", label: "Experiências" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      for (let index = navItems.length - 1; index >= 0; index -= 1) {
        const item = navItems[index];
        const element = document.getElementById(item.id);

        if (element && element.getBoundingClientRect().top <= 140) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-heavy backdrop-blur-heavy" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="shrink-0 cursor-pointer whitespace-nowrap font-display text-[0.72rem] font-medium leading-none gradient-text sm:text-xs md:text-2xl"
            onClick={() => scrollToSection("home")}
          >
            Arthur Nicolas
          </motion.div>

          <div className="flex min-w-0 items-center justify-end gap-1 sm:gap-2 md:gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-1 py-2 font-body text-[0.64rem] font-medium leading-none transition-colors sm:text-[0.68rem] md:px-4 md:text-sm md:leading-normal ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
