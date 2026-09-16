import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Code2, FlaskConical, Palette, ShieldCheck } from "lucide-react";

const experiences = [
  {
    icon: Palette,
    role: "Designer",
    company: "ZT Marketing Digital",
    location: "",
    tasks: [
      "Criação de artes, posts e identidade visual para redes sociais e campanhas de marketing digital.",
      "Desenvolvimento de materiais gráficos e apoio na comunicação visual de clientes.",
      "Entrega de criativos com foco em conversão e engajamento.",
    ],
    tags: ["Design", "Identidade Visual", "Marketing"],
  },
  {
    icon: ShieldCheck,
    role: "Analista de Qualidade (QA) e Comercial",
    company: "Farma Zapy",
    location: "",
    tasks: [
      "Desenvolvimento e aprimoramento de sistemas para atendimento farmacêutico, com foco em produtividade e eficiência operacional.",
      "Execução de testes manuais e automatizados, identificação de falhas e acompanhamento do fluxo de desenvolvimento.",
      "Atuação comercial em contato direto com clientes, conectando necessidades do usuário às decisões de produto.",
    ],
    tags: ["QA", "Testes", "Comercial", "Produto"],
  },
  {
    icon: FlaskConical,
    role: "Estagiário em Automação de Testes",
    company: "Maxicom",
    location: "",
    tasks: [
      "Construção e manutenção de rotinas de teste automatizado com Playwright e Selenium com Java, reduzindo esforço manual de validação.",
      "Documentação de cenários de teste e reporte de defeitos junto ao time de desenvolvimento.",
    ],
    tags: ["Playwright", "Selenium", "Java"],
  },
  {
    icon: Code2,
    role: "Desenvolvedor Freelancer",
    company: "Autônomo",
    location: "",
    tasks: ["Desenvolvimento de soluções web sob demanda, do levantamento de requisitos à entrega em produção."],
    tags: ["Web", "Full Stack"],
  },
  {
    icon: Building2,
    role: "Auxiliar Administrativo",
    company: "Lar Cooperativa Agroindustrial",
    location: "Cascavel, PR",
    tasks: [
      "Rotinas administrativas, organização de informações e apoio operacional em ambiente corporativo de grande porte.",
    ],
    tags: ["Administrativo", "Organização"],
  },
];

const ExperienceSection = () => {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="experience" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsl(24_95%_53%_/_0.1),transparent_65%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-10 text-center md:mb-16">
            <h2 className="mb-4 font-display text-display-sm font-medium gradient-text md:mb-6 md:text-display-lg">
              Experiências
            </h2>
            <p className="mx-auto max-w-3xl font-body text-body-md leading-relaxed text-muted-foreground md:text-body-lg">
              Empresas por onde passei e as funções que desempenhei em cada uma delas.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-primary/0 md:left-6" />

            <div className="space-y-4 md:space-y-6">
              {experiences.map((experience) => {
                const isExpanded = expandedCompany === experience.company;
                const hasMore = experience.tasks.length > 1;

                return (
                  <motion.div
                    key={experience.company}
                    variants={itemVariants}
                    className="relative pl-14 md:pl-20"
                  >
                    <div className="absolute left-0 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow md:top-6 md:h-12 md:w-12">
                      <experience.icon size={20} className="text-white" />
                    </div>

                    <motion.div
                      whileHover={{ x: 6 }}
                      className="glass group relative overflow-hidden rounded-2xl p-4 hover-lift md:p-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="mb-3 flex flex-col gap-1 md:mb-4">
                          <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-primary-light md:text-xs md:tracking-[0.22em]">
                            {experience.company}
                            {experience.location && (
                              <span className="text-muted-foreground"> · {experience.location}</span>
                            )}
                          </p>
                          <h3 className="font-heading text-base font-semibold leading-snug text-foreground md:text-heading-md">
                            {experience.role}
                          </h3>
                        </div>

                        <ul className="space-y-2 font-body text-xs leading-relaxed text-muted-foreground md:text-body-sm">
                          {experience.tasks.map((task, index) => (
                            <li
                              key={task}
                              className={`${index > 0 && !isExpanded ? "hidden md:flex" : "flex"} gap-2`}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light md:mt-2" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>

                        {hasMore && (
                          <button
                            type="button"
                            className="mt-2 text-xs font-semibold text-primary-light md:hidden"
                            onClick={() => setExpandedCompany(isExpanded ? null : experience.company)}
                          >
                            {isExpanded ? "Recolher" : "Expandir para ler"}
                          </button>
                        )}

                        <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
                          {experience.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-body text-[10px] font-medium text-primary-light md:px-2.5 md:py-1 md:text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
