import { motion } from "framer-motion";
import { Code2, Palette, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js, Python",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Figma, Design Systems",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização, SEO, Acessibilidade",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Código limpo, Boas práticas",
      color: "text-accent",
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-display-md md:text-display-lg font-display font-medium mb-6 gradient-text">
              Sobre Mim
            </h2>
            <p className="text-body-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor apaixonado por criar soluções inovadoras que fazem a diferença
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-heading-lg font-heading font-semibold mb-4 gradient-text-accent">
                  Minha Jornada
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                  <p>
                    Comecei minha jornada na programação há mais de 5 anos, sempre 
                    fascinado pela capacidade da tecnologia de transformar ideias 
                    em realidade.
                  </p>
                  <p>
                    Especializado em desenvolvimento full stack, combino conhecimento 
                    técnico com sensibilidade para design, criando aplicações que 
                    não apenas funcionam perfeitamente, mas também proporcionam 
                    experiências memoráveis aos usuários.
                  </p>
                  <p>
                    Cada projeto é uma oportunidade de aprender algo novo e superar 
                    limites, sempre mantendo o código limpo e as melhores práticas 
                    em mente.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-xl hover-lift group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                        <skill.icon size={24} className="text-white" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">{skill.title}</h4>
                      <p className="text-body-sm font-body text-muted-foreground">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Projetos Concluídos" },
                { number: "3+", label: "Anos de Experiência" },
                { number: "100%", label: "Cliente Satisfeitos" },
                { number: "24/7", label: "Suporte Dedicado" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center glass p-6 rounded-xl hover-lift"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-heading-xl md:text-display-sm font-display font-medium gradient-text mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-body-sm font-body text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;