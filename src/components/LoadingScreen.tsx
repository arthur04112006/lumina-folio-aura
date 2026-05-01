import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--loading-cursor-x", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--loading-cursor-y", `${event.clientY}px`);
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onPointerMove={handlePointerMove}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background [--loading-cursor-x:50vw] [--loading-cursor-y:50vh]"
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 glass-heavy" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(460px_circle_at_var(--loading-cursor-x)_var(--loading-cursor-y),hsl(217_91%_60%_/_0.24),hsl(24_95%_53%_/_0.10)_36%,transparent_66%)] mix-blend-screen" />

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
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
                Carregando portfólio... {Math.floor(progress)}%
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
