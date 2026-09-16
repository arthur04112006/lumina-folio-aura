import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import GallerySection from "./sections/GallerySection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import { startSmoothScroll } from "@/lib/smoothScroll";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (isLoading) return;
    return startSmoothScroll();
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    pointerPositionRef.current = { x: event.clientX, y: event.clientY };

    if (pointerFrameRef.current) return;

    pointerFrameRef.current = window.requestAnimationFrame(() => {
      const glow = cursorGlowRef.current;
      if (glow) {
        glow.style.transform = `translate3d(${pointerPositionRef.current.x}px, ${pointerPositionRef.current.y}px, 0)`;
        glow.classList.add("is-active");
      }
      pointerFrameRef.current = undefined;
    });
  };

  useEffect(() => {
    return () => {
      if (pointerFrameRef.current) {
        window.cancelAnimationFrame(pointerFrameRef.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-background text-foreground" onPointerMove={handlePointerMove}>
        <div ref={cursorGlowRef} className="cursor-glow" />

        <motion.div
          className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-primary via-primary-light to-accent"
          style={{ scaleX: smoothScrollProgress }}
        />

        <AnimatePresence>{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}</AnimatePresence>

        <AnimatePresence>
          {!isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
    </MotionConfig>
  );
};

export default Portfolio;
