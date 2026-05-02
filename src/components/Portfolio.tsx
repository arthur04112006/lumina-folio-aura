import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Sparkles, ThumbsUp } from "lucide-react";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import GallerySection from "./sections/GallerySection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import {
  fetchPortfolioLikesCount,
  getStoredLikeStatus,
  getVisitorId,
  registerPortfolioLike,
  storeLikeStatus,
} from "@/lib/portfolioLikes";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isRegisteringLike, setIsRegisteringLike] = useState(false);
  const [likeBurst, setLikeBurst] = useState(0);
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

  const handleLike = async () => {
    setLikeBurst((currentBurst) => currentBurst + 1);

    if (hasLiked || isRegisteringLike) {
      return;
    }

    setIsRegisteringLike(true);
    setLikes((currentLikes) => currentLikes + 1);

    try {
      const visitorId = getVisitorId();
      await registerPortfolioLike(visitorId);
      storeLikeStatus();
      setHasLiked(true);
      setLikes(await fetchPortfolioLikesCount());
    } catch (error) {
      setLikes((currentLikes) => Math.max(currentLikes - 1, 0));
      console.error(error);
    } finally {
      setIsRegisteringLike(false);
    }
  };

  useEffect(() => {
    if (!mounted) {
      return;
    }

    setHasLiked(getStoredLikeStatus());

    fetchPortfolioLikesCount()
      .then(setLikes)
      .catch((error) => console.error(error));
  }, [mounted]);

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
              <HeroSection likes={likes} />
              <AboutSection />
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

      <AnimatePresence>
        {!isLoading && (
          <motion.button
            type="button"
            onClick={handleLike}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-5 right-5 z-[45] flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-3 text-sm font-body font-semibold text-foreground shadow-glow backdrop-blur-xl transition-colors hover:border-primary/50 hover:bg-primary/15 md:bottom-7 md:right-7"
            aria-label="Deixar um joinha visual"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-white">
              <ThumbsUp size={18} />
              <AnimatePresence mode="popLayout">
                {likeBurst > 0 && (
                  <motion.span
                    key={likeBurst}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.35, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-primary-light"
                  />
                )}
              </AnimatePresence>
            </span>

            <span className="hidden sm:block">{hasLiked ? "Curtido" : "Curtir"}</span>
            {likes > 0 && (
              <motion.span
                key={likes}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="min-w-5 rounded-full bg-white/10 px-2 py-0.5 text-xs text-primary-light"
              >
                +{likes}
              </motion.span>
            )}

            <AnimatePresence>
              {likeBurst > 0 && (
                <span key={likeBurst} className="pointer-events-none absolute inset-0">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <motion.span
                      key={index}
                      initial={{ x: 16, y: 14, scale: 0, opacity: 0 }}
                      animate={{
                        x: [22, 18 + Math.cos(index) * 48],
                        y: [8, -18 - Math.sin(index) * 34],
                        scale: [0, 1, 0.35],
                        opacity: [0, 1, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.75, ease: "easeOut" }}
                      className="absolute right-6 top-3 text-primary-light"
                    >
                      <Sparkles size={12} />
                    </motion.span>
                  ))}
                </span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
