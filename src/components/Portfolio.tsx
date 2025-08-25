import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Add scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('animate');
        }
      });
    };

    if (!isLoading) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            
            <main>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border/50 bg-background-secondary">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-muted-foreground mb-4 md:mb-0">
                    © 2024 Portfolio. Todos os direitos reservados.
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Feito com ❤️ usando React + Framer Motion
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;