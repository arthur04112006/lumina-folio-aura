import { motion } from "framer-motion";
import { useState } from "react";
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
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
  const [expandedHighlight, setExpandedHighlight] = useState<string | null>(null);

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
      summary: "Passei por Farma Zapy, Maxicom e ZT Marketing Digital, com QA, automação de testes e design.",
      text: "Tive experiência na Farma Zapy como analista de qualidade (QA) e comercial, aprimorando sistemas para atendimento farmacêutico. Também trabalhei na Maxicom com automação de testes, na ZT Marketing Digital como designer e desenvolvi soluções web como freelancer.",
    },
    {
      icon: Trophy,
      title: "Projetos e desafios reais",
      summary: "Projetos práticos com visão computacional, automação, hardware e hackathons.",
      text: "Minha trajetória inclui projetos acadêmicos e práticos com visão computacional, automação, otimização, hardware com Arduino e participação em hackathons, sempre com foco em resolver problemas de forma funcional.",
    },
  ];

  const journeySteps = [
    { title: "Ensino médio", description: "Primeira plataforma, criada para o meu colégio" },
    { title: "IA como bolsista", description: "Graduação em Inteligência Artificial" },
    { title: "Maxicom", description: "Estágio em automação de testes" },
    { title: "Farma Zapy", description: "Analista de qualidade (QA) e comercial" },
    { title: "ZT Marketing Digital", description: "Designer para redes sociais e campanhas" },
    { title: "Hackathons", description: "Desafios de inovação e entregas em equipe" },
    { title: "Full Stack", description: "Sistemas completos com IA e automação" },
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
    <section id="about" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-10 text-center md:mb-16">
            <h2 className="mb-4 font-display text-display-sm font-medium gradient-text md:mb-6 md:text-display-lg">
              Sobre Mim
            </h2>
            <p className="mx-auto max-w-3xl font-body text-body-md leading-relaxed text-muted-foreground md:text-body-lg">
              Desenvolvedor full stack com forte interesse por inteligência artificial, automação e criação de sistemas
              completos para problemas reais.
            </p>
          </motion.div>

          <div className="mb-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-12 md:mb-16">
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <motion.div
                className="glass relative overflow-hidden rounded-2xl p-5 hover-lift md:p-8"
                whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <h3 className="relative z-10 mb-3 font-heading text-heading-md font-semibold gradient-text-accent md:mb-4 md:text-heading-lg">
                  Minha Jornada
                </h3>
                <div className="relative z-10 space-y-3 font-body text-body-sm leading-relaxed text-muted-foreground md:space-y-4 md:text-body-md">
                  <p className="md:hidden">
                    Minha jornada começou no ensino médio, criando soluções úteis, e hoje conecta IA, produto e
                    desenvolvimento full stack.
                  </p>
                  <div className={`${isJourneyExpanded ? "block" : "hidden"} space-y-3 md:block md:space-y-4`}>
                    <p>
                      Minha jornada na programação começou ainda no ensino médio, quando desenvolvi uma plataforma para
                      meu colégio com cadastro de alunos e conteúdos em vídeo. Esse primeiro projeto consolidou meu
                      interesse por criar soluções úteis, completas e acessíveis.
                    </p>
                    <p>
                      Hoje curso Inteligência Artificial como bolsista e aplico esse aprendizado em projetos que
                      envolvem visão computacional, modelagem matemática, automação e análise técnica. No trabalho,
                      busco transformar necessidades operacionais em ferramentas simples de usar e consistentes.
                    </p>
                    <p>
                      Tenho base sólida em Java, Python, JavaScript, React, PHP, HTML, CSS, MySQL e PostgreSQL, além de
                      experiência conectando front-end, back-end, banco de dados e integrações em soluções funcionais.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary-light md:hidden"
                    onClick={() => setIsJourneyExpanded((current) => !current)}
                  >
                    {isJourneyExpanded ? "Recolher" : "Expandir para ler"}
                  </button>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    className="glass group rounded-xl p-3 hover-lift md:p-5"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-primary transition-all duration-300 group-hover:shadow-glow md:h-12 md:w-12">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-heading text-sm font-semibold text-foreground md:mb-2 md:text-base">
                          {item.title}
                        </h4>
                        <p className="text-xs font-body leading-relaxed text-muted-foreground md:hidden">
                          {expandedHighlight === item.title ? item.text : item.summary}
                        </p>
                        <p className="hidden font-body text-body-sm leading-relaxed text-muted-foreground md:block">
                          {item.text}
                        </p>
                        <button
                          type="button"
                          className="mt-2 text-xs font-semibold text-primary-light md:hidden"
                          onClick={() =>
                            setExpandedHighlight((current) => (current === item.title ? null : item.title))
                          }
                        >
                          {expandedHighlight === item.title ? "Recolher" : "Expandir para ler"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex h-full flex-col space-y-4 md:space-y-6">
              <div className="space-y-2">
                <h3 className="font-heading text-heading-md font-semibold text-foreground md:text-heading-lg">
                  Habilidades e conhecimentos
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-body-md">
                  Tecnologias e áreas em que atuo com prática real no desenvolvimento de soluções.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ scale: 1.04, y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                    className="glass group relative overflow-hidden rounded-xl p-3 hover-lift md:p-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 space-y-2 md:space-y-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary transition-all duration-300 group-hover:shadow-glow md:h-12 md:w-12">
                        <skill.icon size={20} className="text-white" />
                      </div>
                      <h4 className="font-heading text-sm font-semibold leading-snug text-foreground md:text-base">
                        {skill.title}
                      </h4>
                      <p className="font-body text-xs leading-relaxed text-muted-foreground md:text-body-sm">
                        {skill.description}
                      </p>
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
                <div className="mb-3 flex items-center justify-between gap-4 md:mb-4">
                  <h3 className="font-heading text-base font-semibold text-foreground md:text-heading-sm">
                    Linha do tempo
                  </h3>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-body text-xs font-medium text-primary-light md:px-3 md:text-body-sm">
                    Jornada
                  </span>
                </div>

                <div className="relative">
                  <div className="absolute bottom-3 left-[9px] top-3 w-px bg-gradient-to-b from-primary/20 via-primary/60 to-accent/70" />

                  <ol>
                    {journeySteps.map((step, index) => {
                      const isCurrent = index === journeySteps.length - 1;

                      return (
                        <motion.li
                          key={step.title}
                          className="relative flex items-start gap-3 pb-3 last:pb-0 md:gap-4"
                          variants={{
                            hidden: { opacity: 0, x: -12 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: index * 0.08,
                                duration: 0.3,
                                ease: "easeOut",
                              },
                            },
                          }}
                        >
                          <span
                            className={`relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              isCurrent ? "border-primary bg-primary/20 shadow-glow" : "border-white/20 bg-background"
                            }`}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${isCurrent ? "bg-gradient-primary" : "bg-primary-light/70"}`}
                            />
                          </span>

                          <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                            <div className="min-w-0">
                              <h4 className="font-heading text-sm font-semibold leading-tight text-foreground md:text-base">
                                {step.title}
                              </h4>
                              <p className="font-body text-xs leading-relaxed text-muted-foreground md:text-body-sm">
                                {step.description}
                              </p>
                            </div>
                            {isCurrent && (
                              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-body text-[10px] font-medium text-primary-light md:text-xs">
                                Hoje
                              </span>
                            )}
                          </div>
                        </motion.li>
                      );
                    })}
                  </ol>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="glass rounded-xl p-4 text-center hover-lift md:p-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className="mb-1 font-display text-heading-lg font-medium gradient-text md:mb-2 md:text-display-sm"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="font-body text-xs text-muted-foreground md:text-body-sm">{stat.label}</p>
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
