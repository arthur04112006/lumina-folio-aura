import { motion } from "framer-motion";
import { Brain, BriefcaseBusiness, Code2, Database, Trophy, Zap } from "lucide-react";

const getAge = (birthDate: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
};

const AboutSection = () => {
  const age = getAge(new Date(2006, 10, 4));

  const skills = [
    {
      icon: Code2,
      title: "Full Stack",
      description: "React, JavaScript, Java, PHP, HTML e CSS",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Visão computacional, modelagem, otimização e automação",
    },
    {
      icon: Database,
      title: "Dados e Integrações",
      description: "MySQL, PostgreSQL e sistemas completos ponta a ponta",
    },
    {
      icon: Zap,
      title: "Qualidade e Automação",
      description: "Testes automatizados, Arduino e soluções sob demanda",
    },
  ];

  const stats = [
    { number: String(age), label: "anos" },
    { number: "2", label: "hackathons: Itaipu e Biopark" },
    { number: "IA", label: "graduação como bolsista" },
    { number: "Full", label: "back-end, front-end e produto" },
  ];

  const highlights = [
    {
      icon: BriefcaseBusiness,
      title: "Experiência profissional",
      text: "Atualmente atuo na PharmaZap, desenvolvendo e aprimorando sistemas para atendimento, gestão e eficiência operacional em farmácias. Antes disso, trabalhei na Maxicom com automação de testes e também desenvolvi soluções como freelancer.",
    },
    {
      icon: Trophy,
      title: "Projetos e desafios reais",
      text: "Minha trajetória inclui projetos acadêmicos e práticos com visão computacional, automação, otimização, hardware com Arduino e participação em hackathons, sempre com foco em resolver problemas de forma funcional.",
    },
  ];

  const journeySteps = [
    "Ensino médio",
    "IA como bolsista",
    "Maxicom",
    "PharmaZap",
    "Hackathons",
    "Full Stack",
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
    <section id="about" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="text-display-sm md:text-display-lg font-display font-medium mb-4 md:mb-6 gradient-text">
              Sobre Mim
            </h2>
            <p className="text-body-md md:text-body-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desenvolvedor full stack com forte interesse por inteligência artificial, automação e criação de sistemas completos para problemas reais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-stretch mb-10 md:mb-16">
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <motion.div
                className="glass p-5 md:p-8 rounded-2xl hover-lift relative overflow-hidden"
                whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute left-8 top-20 h-[1px] w-[72%] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
                  <div className="absolute left-16 top-36 h-[1px] w-[62%] bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0" />
                  <div className="absolute left-10 top-52 h-[1px] w-[76%] bg-gradient-to-r from-primary/0 via-primary/35 to-primary/0" />
                </div>

                <h3 className="text-heading-md md:text-heading-lg font-heading font-semibold mb-3 md:mb-4 gradient-text-accent relative z-10">
                  Minha Jornada
                </h3>
                <div className="space-y-3 md:space-y-4 text-body-sm md:text-body-md text-muted-foreground leading-relaxed font-body relative z-10">
                  <p>
                    Minha jornada na programação começou ainda no ensino médio, quando desenvolvi uma plataforma para meu colégio com cadastro de alunos e conteúdos em vídeo. Esse primeiro projeto consolidou meu interesse por criar soluções úteis, completas e acessíveis.
                  </p>
                  <p>
                    Hoje curso Inteligência Artificial como bolsista e aplico esse aprendizado em projetos que envolvem visão computacional, modelagem matemática, automação e análise técnica. No trabalho, busco transformar necessidades operacionais em ferramentas simples de usar e consistentes.
                  </p>
                  <p>
                    Tenho base sólida em Java, Python, JavaScript, React, PHP, HTML, CSS, MySQL e PostgreSQL, além de experiência conectando front-end, back-end, banco de dados e integrações em soluções funcionais.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    className="glass p-3 md:p-5 rounded-xl hover-lift group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm md:text-base font-semibold text-foreground mb-1 md:mb-2">{item.title}</h4>
                        <p className="text-xs md:text-body-sm font-body text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex h-full flex-col space-y-4 md:space-y-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ scale: 1.04, y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                    className="glass p-3 md:p-6 rounded-xl hover-lift group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="space-y-2 md:space-y-3 relative z-10">
                      <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <skill.icon size={20} className="text-white" />
                      </div>
                      <h4 className="font-heading text-sm md:text-base font-semibold leading-snug text-foreground">{skill.title}</h4>
                      <p className="text-xs md:text-body-sm font-body text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="glass mt-0 rounded-2xl border border-white/10 p-4 md:p-5 lg:mt-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <div className="mb-3 md:mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-heading-sm font-heading font-semibold text-foreground">
                    Linha do tempo
                  </h3>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 md:px-3 py-1 text-xs md:text-body-sm font-body font-medium text-primary-light">
                    Jornada
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
                  {journeySteps.map((step, index) => (
                    <motion.div
                      key={step}
                      className="min-w-0 sm:flex sm:items-center sm:gap-2"
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: index * 0.08,
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      <span className="flex min-h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-2.5 py-2 text-xs font-body font-medium leading-tight text-foreground backdrop-blur-xl sm:min-h-0 sm:rounded-full sm:px-3 sm:py-1.5 sm:text-body-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[10px] text-primary-light sm:hidden">
                          {index + 1}
                        </span>
                        {step}
                      </span>
                      {index < journeySteps.length - 1 && (
                        <motion.span
                          className="hidden text-primary-light sm:inline"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="text-center glass p-4 md:p-6 rounded-xl hover-lift"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-heading-lg md:text-display-sm font-display font-medium gradient-text mb-1 md:mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-xs md:text-body-sm font-body text-muted-foreground">{stat.label}</p>
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
