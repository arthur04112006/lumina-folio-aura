import { motion } from "framer-motion";
import { useMemo } from "react";
import { ArrowDown, Github, Instagram, Linkedin, Mail, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/optimized/profile-photo.jpg";

interface HeroSectionProps {
  likes: number;
}

const HeroSection = ({ likes }: HeroSectionProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/arthur04112006", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nicolas-oliveira-545b1939a", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/arthur_oliv04", label: "Instagram" },
    { icon: Mail, href: "mailto:nic.oliveira.dev@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-primary rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid w-full max-w-6xl items-center gap-10 px-6 pt-24 text-center lg:grid-cols-[1fr_360px] lg:text-left"
      >
        <div>
          <motion.p
            variants={itemVariants}
            className="text-primary text-body-lg font-body font-medium mb-4"
          >
            Olá, eu sou Arthur Nicolas Oliveira
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-display-lg md:text-display-xl font-display font-medium mb-6 leading-tight"
          >
            <span className="gradient-text">Full Stack</span>
            <br />
            <span className="gradient-text-accent">e IA aplicada</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body-lg md:text-heading-sm font-body text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Desenvolvo sistemas web, automações e soluções com inteligência artificial, unindo front-end,
            back-end e visão prática de produto.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center lg:justify-start"
          >
            <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-body-sm font-body text-muted-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                <ThumbsUp size={16} />
              </span>
              <span>
                <strong className="font-semibold text-foreground">{likes}</strong>{" "}
                {likes === 1 ? "pessoa curtiu" : "pessoas curtiram"} este portfólio
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Projetos
            </Button>

            <Button
              variant="glass"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entre em Contato
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-6 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-full hover:shadow-glow transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto w-64 sm:w-72 lg:w-80"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 glass p-2 shadow-2xl">
            <img
              src={profilePhoto}
              alt="Arthur Nicolas Oliveira"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-2 lg:col-span-2"
        >
          <p className="text-body-sm font-body text-muted-foreground">Scroll para descobrir</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 glass rounded-full cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360, y: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 glass rounded-full opacity-30"
        />
        <motion.div
          animate={{ rotate: -360, y: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-16 w-16 h-16 glass rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: 360, x: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-10 w-12 h-12 glass rounded-full opacity-40"
        />
      </div>
    </section>
  );
};

export default HeroSection;
