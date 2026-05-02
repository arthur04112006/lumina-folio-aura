import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProjectsSection = () => {
  const githubProfile = "https://github.com/arthur04112006";

  const techStyles: Record<string, string> = {
    React: "border-cyan-400/40 bg-cyan-500/10 text-cyan-200",
    Vercel: "border-white/30 bg-white/10 text-white",
    Python: "border-yellow-400/40 bg-yellow-500/10 text-yellow-200",
    IA: "border-violet-400/40 bg-violet-500/10 text-violet-200",
    "Visão Computacional": "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200",
    Arduino: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
    Hardware: "border-orange-400/40 bg-orange-500/10 text-orange-200",
    Software: "border-blue-400/40 bg-blue-500/10 text-blue-200",
    Web: "border-sky-400/40 bg-sky-500/10 text-sky-200",
    "Front-end": "border-cyan-400/40 bg-cyan-500/10 text-cyan-200",
    "Back-end": "border-indigo-400/40 bg-indigo-500/10 text-indigo-200",
    "Gestão Ágil": "border-blue-400/40 bg-blue-500/10 text-blue-200",
    Produtividade: "border-lime-400/40 bg-lime-500/10 text-lime-200",
    Automação: "border-orange-400/40 bg-orange-500/10 text-orange-200",
    Farmácias: "border-green-400/40 bg-green-500/10 text-green-200",
    Atendimento: "border-teal-400/40 bg-teal-500/10 text-teal-200",
    Sistemas: "border-slate-300/40 bg-slate-400/10 text-slate-200",
    Comunidade: "border-pink-400/40 bg-pink-500/10 text-pink-200",
    Hackathon: "border-red-400/40 bg-red-500/10 text-red-200",
    Turismo: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
    Produto: "border-amber-400/40 bg-amber-500/10 text-amber-200",
  };

  const projects = [
    {
      title: "Sprint Tracker Hub",
      description:
        "Sistema para gerenciamento de sprints e tarefas, com foco em organização, produtividade e acompanhamento do fluxo de equipes de desenvolvimento. O deploy é uma área operacional para gestor e desenvolvedores, sem landing page pública.",
      technologies: ["React", "Gestão Ágil", "Produtividade", "Vercel"],
      demoLink: "https://sprint-tracker-hub.vercel.app/",
      demoLabel: "Sistema online",
      codeLink: "https://github.com/arthur04112006/sprint-tracker-hub",
      videoLink: "",
      featured: true,
      accent: "from-blue-500/30 via-cyan-500/20 to-orange-500/30",
    },
    {
      title: "GateVision",
      description:
        "Sistema de reconhecimento de placas veiculares que utiliza inteligência artificial para automatizar a abertura de portões, conectando visão computacional, segurança e automação.",
      technologies: ["Python", "IA", "Visão Computacional", "Automação"],
      demoLink: "",
      demoLabel: "",
      codeLink: "https://github.com/Wessel2007/Gate-Vision",
      videoLink: "",
      featured: true,
      accent: "from-orange-500/30 via-blue-500/20 to-violet-500/30",
    },
    {
      title: "Pharm Assist",
      description:
        "Projeto voltado ao contexto farmacêutico, explorando tecnologia para apoiar rotinas de atendimento, organização e eficiência em processos ligados à área.",
      technologies: ["Web", "Farmácias", "Atendimento", "Sistemas"],
      demoLink: "",
      demoLabel: "",
      codeLink: "https://github.com/arthur04112006/Pharm-Assist-",
      videoLink: "",
      featured: false,
      accent: "from-emerald-500/25 via-blue-500/20 to-sky-500/25",
    },
    {
      title: "Comunitech",
      description:
        "Projeto de aplicação web criado para resolver uma necessidade prática com foco em comunidade, organização de informações e experiência de uso.",
      technologies: ["Web", "Front-end", "Back-end", "Comunidade"],
      demoLink: "",
      demoLabel: "",
      codeLink: "https://github.com/arthur04112006/Comunitech",
      videoLink: "",
      featured: false,
      accent: "from-sky-500/25 via-indigo-500/20 to-orange-500/25",
    },
    {
      title: "AutoHouse",
      description:
        "Casa automatizada com Arduino, integrando hardware e software para controle de dispositivos, sensores e automações em um protótipo funcional.",
      technologies: ["Arduino", "Automação", "Hardware", "Software"],
      demoLink: "",
      demoLabel: "",
      codeLink: "https://github.com/arthur04112006/projetoArduino1SemestreBiopark",
      videoLink: "",
      featured: false,
      accent: "from-amber-500/30 via-orange-500/20 to-blue-500/25",
    },
    {
      title: "Raiz Iguaçu",
      description:
        "Projeto desenvolvido no contexto do Hackatour Cataratas, trabalhando solução, prototipação e entrega sob pressão em equipe.",
      technologies: ["Hackathon", "Web", "Turismo", "Produto"],
      demoLink: "",
      demoLabel: "",
      codeLink: "https://github.com/Wessel2007/Hackatour-Cataratas",
      videoLink: "",
      featured: false,
      accent: "from-green-500/25 via-cyan-500/20 to-blue-500/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background-secondary" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="text-display-sm md:text-display-lg font-display font-medium mb-4 md:mb-6 gradient-text">
              Meus Projetos
            </h2>
            <p className="text-body-md md:text-body-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projetos que mostram minha atuação em aplicações web, inteligência artificial, automação e soluções completas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 mb-10 md:mb-12">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card className={`glass overflow-hidden hover-lift transition-all duration-500 ${
                  project.featured ? "border-primary/20" : ""
                }`}>
                  <div className="relative h-24 sm:h-32 md:h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_28%)]" />
                    <div className="absolute inset-0 flex items-center justify-center px-3 md:px-6">
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs font-body text-primary-light mb-1 md:mb-2 uppercase tracking-[0.18em] md:tracking-[0.22em]">
                          Projeto
                        </p>
                        <h3 className="text-base sm:text-heading-sm md:text-heading-xl font-display font-medium leading-tight text-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-center justify-center gap-2 md:gap-4 p-3 md:p-6">
                      {project.demoLink && (
                        <Button variant="hero" size="sm" className="rounded-full" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            {project.demoLabel || "Demo"}
                          </a>
                        </Button>
                      )}
                      {project.videoLink && (
                        <Button variant="hero" size="sm" className="rounded-full" asChild>
                          <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                            <PlayCircle size={16} />
                            Vídeo
                          </a>
                        </Button>
                      )}
                      <Button variant="glass" size="sm" className="rounded-full" asChild>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="p-3 md:p-5 space-y-2 md:space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                      <h3 className="text-base sm:text-heading-sm md:text-heading-md font-heading font-semibold leading-tight text-foreground group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="w-fit px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-body font-semibold bg-gradient-accent text-white rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>

                    <p className="line-clamp-3 text-xs md:text-body-sm font-body text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-body font-medium rounded-full border ${techStyles[tech] ?? "border-primary/40 bg-primary/10 text-primary-light"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-1 md:pt-2 text-xs md:text-sm">
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 md:gap-2 text-primary hover:text-primary-light transition-colors"
                        >
                          <ExternalLink size={14} className="md:h-4 md:w-4" />
                          <span className="font-body">{project.demoLabel || "Ver projeto"}</span>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 md:gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={14} className="md:h-4 md:w-4" />
                        <span className="font-body">Código</span>
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button
              variant="glass"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl group"
              asChild
            >
              <a href={githubProfile} target="_blank" rel="noopener noreferrer">
                Ver Todos no GitHub
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
