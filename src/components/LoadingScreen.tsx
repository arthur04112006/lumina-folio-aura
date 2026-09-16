import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const completionStarted = useRef(false);
  const exitTimer = useRef<number>();
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        return Math.min(prev + Math.random() * 12 + 6, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 100 || completionStarted.current) {
      return;
    }

    completionStarted.current = true;

    const completeTimer = window.setTimeout(() => {
      setIsComplete(true);
      exitTimer.current = window.setTimeout(onComplete, 800);
    }, 500);

    return () => {
      window.clearTimeout(completeTimer);

      if (exitTimer.current) {
        window.clearTimeout(exitTimer.current);
      }
    };
  }, [onComplete, progress]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />

          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <span
                key={particle.id}
                className="hero-particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center space-y-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse-glow" />
                <div className="absolute inset-2 bg-background rounded-full" />
                <div className="absolute inset-4 bg-gradient-accent rounded-full" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-display-lg font-display font-medium gradient-text"
            >
              Arthur Nicolas
            </motion.h1>

            <div className="w-80 mx-auto space-y-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="h-1 bg-muted rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-primary rounded-full glow-primary"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-body-sm font-body font-medium text-muted-foreground"
              >
                Carregando portfólio... {Math.floor(Math.min(progress, 100))}%
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center space-x-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
