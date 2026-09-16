import { motion } from "framer-motion";
import { useMemo } from "react";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/smoothScroll";
import profilePhoto from "@/assets/optimized/profile-photo.jpg";

const HeroSection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
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
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="absolute inset-0" aria-hidden="true">
        {particles.map((particle, i) => (
          <span
            key={i}
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid w-full max-w-6xl items-center gap-6 px-5 pb-8 pt-20 text-center sm:px-6 md:gap-10 md:pt-24 lg:grid-cols-[1fr_360px] lg:text-left"
      >
        <div className="order-2 lg:order-1">
          <motion.p
            variants={itemVariants}
            className="mb-3 text-sm font-body font-medium uppercase tracking-[0.16em] text-primary md:mb-4 md:text-body-lg md:normal-case md:tracking-normal"
          >
            Olá, eu sou Arthur Nicolas Oliveira
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-[2.15rem] font-display font-semibold leading-[0.95] md:mb-6 md:text-display-xl md:font-medium md:leading-tight"
          >
            <span className="gradient-text">Full Stack</span>
            <br />
            <span className="gradient-text-accent">e IA aplicada</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-5 max-w-[30rem] text-sm font-body leading-relaxed text-muted-foreground md:mb-8 md:max-w-2xl md:text-heading-sm lg:mx-0"
          >
            <span className="md:hidden">
              Sistemas web, automações e IA com foco em produto, performance e entrega real.
            </span>
            <span className="hidden md:inline">
              Desenvolvo sistemas web, automações e soluções com inteligência artificial, unindo front-end,
              back-end e visão prática de produto.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start md:mb-12 md:gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              className="h-12 rounded-xl px-6 text-sm font-semibold sm:text-base md:h-auto md:px-8 md:py-6 md:text-lg"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>

            <Button
              variant="glass"
              size="lg"
              className="h-12 rounded-xl px-6 text-sm font-semibold sm:text-base md:h-auto md:px-8 md:py-6 md:text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Entre em Contato
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-4 flex justify-center gap-3 md:mb-12 md:gap-6 lg:justify-start"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full glass p-2.5 transition-all duration-300 hover:shadow-glow md:p-3"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-primary md:hidden" />
                <social.icon size={24} className="hidden text-primary md:block" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="order-1 relative mx-auto mt-2 w-40 sm:w-56 md:w-72 lg:order-2 lg:w-80"
        >
          <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,hsl(217_91%_60%_/_0.28),hsl(24_95%_53%_/_0.12)_45%,transparent_70%)] md:-inset-8" />
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
          className="hidden flex-col items-center space-y-2 pb-4 md:flex md:pb-0 lg:col-span-2"
        >
          <p className="text-body-sm font-body text-muted-foreground">Desça para descobrir</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer rounded-full glass p-2"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="floating-orb left-10 top-20 h-20 w-20 opacity-30" style={{ animationDuration: "10s" }} />
        <div className="floating-orb bottom-32 right-16 h-16 w-16 opacity-20" style={{ animationDuration: "12s" }} />
        <div className="floating-orb right-10 top-1/2 h-12 w-12 opacity-40" style={{ animationDuration: "8s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
