import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import GallerySection from "./sections/GallerySection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pointerFrameRef = useRef<number>();
  const pointerPositionRef = useRef({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerPositionRef.current = { x: event.clientX, y: event.clientY };

    if (pointerFrameRef.current) {
      return;
    }

    const target = event.currentTarget;
    pointerFrameRef.current = window.requestAnimationFrame(() => {
      target.style.setProperty("--cursor-x", `${pointerPositionRef.current.x}px`);
      target.style.setProperty("--cursor-y", `${pointerPositionRef.current.y}px`);
      pointerFrameRef.current = undefined;
    });
  };

  useEffect(() => {
    let scrollFrame: number | undefined;

    const handleScroll = () => {
      if (scrollFrame) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(() => {
        const elements = document.querySelectorAll(".fade-in-up, .fade-in-left");
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          if (isVisible) {
            element.classList.add("animate");
          }
        });
        scrollFrame = undefined;
      });
    };

    if (!isLoading) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    return () => {
      if (pointerFrameRef.current) {
        window.cancelAnimationFrame(pointerFrameRef.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="interactive-shell min-h-screen bg-background text-foreground"
      onPointerMove={handlePointerMove}
    >
      <div className="cursor-glow" />

      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-primary via-primary-light to-accent"
        style={{ scaleX: smoothScrollProgress }}
      />

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
              <ExperienceSection />
              <GallerySection />
              <ProjectsSection />
              <ContactSection />
            </main>

            <footer className="py-8 border-t border-border/50 bg-background-secondary">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
                  <div className="text-muted-foreground">
                    © 2026 Arthur Nicolas Oliveira. Todos os direitos reservados.
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion
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
