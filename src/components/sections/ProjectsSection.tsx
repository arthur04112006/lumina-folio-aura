import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demoLink: "#",
      codeLink: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com interface moderna",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Firebase"],
      demoLink: "#",
      codeLink: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Site portfolio responsivo com animações fluidas",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Framer Motion", "Tailwind"],
      demoLink: "#",
      codeLink: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com visualizações interativas",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Chart.js", "API Integration"],
      demoLink: "#",
      codeLink: "#",
      featured: false,
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Meus Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Uma seleção dos meus trabalhos mais recentes e significativos
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group ${project.featured ? "lg:col-span-2" : ""}`}
              >
                <Card className={`glass overflow-hidden hover-lift transition-all duration-500 ${
                  project.featured ? "border-primary/20" : ""
                }`}>
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                    <div className="absolute inset-0 bg-muted animate-pulse" />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        variant="hero"
                        size="sm"
                        className="rounded-full"
                        asChild
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                      <Button
                        variant="glass"
                        size="sm"
                        className="rounded-full"
                        asChild
                      >
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Código
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-accent text-white rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4 pt-2">
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
                      >
                        <span>Ver projeto</span>
                        <ArrowRight size={16} />
                      </motion.a>
                      <motion.a
                        href={project.codeLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        <span>Código</span>
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button
              variant="glass"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl group"
            >
              Ver Todos os Projetos
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;