import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const email = "nic.oliveira.dev@gmail.com";
  const phoneDisplay = "(45) 99811-9853";
  const whatsapp = "https://wa.me/5545998119853";
  const linkedin = "https://www.linkedin.com/in/nicolas-oliveira-545b1939a";
  const github = "https://github.com/arthur04112006";
  const instagram = "https://www.instagram.com/arthur_oliv04";

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: email,
      href: `mailto:${email}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: phoneDisplay,
      href: whatsapp,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: "nicolas-oliveira-545b1939a",
      href: linkedin,
    },
    {
      icon: Github,
      title: "GitHub",
      details: "github.com/arthur04112006",
      href: github,
    },
    {
      icon: MapPin,
      title: "Localização",
      details: "Brasil",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: github, label: "GitHub" },
    { icon: Linkedin, href: linkedin, label: "LinkedIn" },
    { icon: Instagram, href: instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${email}`, label: "Email" },
    { icon: Phone, href: whatsapp, label: "WhatsApp" },
  ];

  const opportunities = [
    "Desenvolvimento full stack",
    "Projetos com inteligência artificial",
    "Automação de processos",
    "Freelas e parcerias técnicas",
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
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background-secondary to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-display-md md:text-display-lg font-display font-medium mb-6 gradient-text">
              Vamos Conversar
            </h2>
            <p className="text-body-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estou aberto a oportunidades, parcerias, freelas e conversas sobre desenvolvimento web, inteligência artificial e automação.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-heading-lg font-heading font-semibold mb-6 gradient-text-accent">
                  Entre em Contato
                </h3>
                <p className="text-body-md font-body text-muted-foreground mb-8 leading-relaxed">
                  Se você precisa de um desenvolvedor full stack com visão de produto, experiência prática e interesse forte por IA, estes são meus canais principais.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    className="flex items-center space-x-4 p-4 glass rounded-xl hover-lift-fast group transition-all duration-100"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-100">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{info.title}</h4>
                      <p className="font-body text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4 text-foreground">Redes</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                      className="p-3 glass rounded-full hover:shadow-glow transition-all duration-100 group"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-primary group-hover:text-primary-light transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass p-8 hover-lift-fast h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <Sparkles size={24} className="text-white" />
                  </div>

                  <h3 className="text-heading-lg font-heading font-semibold mb-4 gradient-text">
                    O que posso construir
                  </h3>
                  <p className="text-body-md font-body text-muted-foreground leading-relaxed mb-6">
                    Gosto de atuar em projetos que exigem clareza técnica, aprendizado rápido e entrega funcional, conectando interfaces, APIs, bancos de dados e automações.
                  </p>

                  <div className="grid gap-3 mb-8">
                    {opportunities.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-muted-foreground font-body">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1 rounded-xl" asChild>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                      Chamar no WhatsApp
                      <MessageCircle size={18} className="ml-2" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" className="flex-1 rounded-xl" asChild>
                    <a href={`mailto:${email}`}>
                      Enviar Email
                      <Send size={18} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
