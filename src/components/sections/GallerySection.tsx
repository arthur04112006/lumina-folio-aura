import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import photoLinkedin from "@/assets/optimized/photo-linkedin.jpg";
import eventItaipu from "@/assets/optimized/event-itaipu.jpg";
import eventBiopark from "@/assets/optimized/event-biopark.jpg";
import eventTeam from "@/assets/optimized/event-team.jpg";
import projectMomentOne from "@/assets/optimized/project-moment-one.jpg";
import projectMomentTwo from "@/assets/optimized/project-moment-two.jpg";
import projectMomentThree from "@/assets/optimized/project-moment-three.jpg";
import projectMomentFour from "@/assets/optimized/project-moment-four.jpg";
import eventMomentOne from "@/assets/optimized/event-moment-one.jpg";
import eventMomentTwo from "@/assets/optimized/event-moment-two.jpg";
import postPhoto from "@/assets/optimized/post-photo.jpg";
import galleryScreenshot from "@/assets/optimized/gallery-screenshot.jpg";

const GallerySection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const autoplayRef = useRef<number>();
  const resumeAutoplayRef = useRef<number>();

  const photos = [
    { src: eventTeam, title: "Hackathons", description: "Trabalho em equipe, prototipação e entrega sob pressão." },
    { src: eventMomentTwo, title: "Tecnologia aplicada", description: "Experiências que fortalecem repertório técnico e colaboração." },
    { src: projectMomentThree, title: "Construção de soluções", description: "Momentos de projeto, validação e evolução técnica." },
    { src: photoLinkedin, title: "Perfil profissional", description: "Foto utilizada em materiais profissionais e redes." },
    { src: eventItaipu, title: "Evento e tecnologia", description: "Participação em experiências práticas e desafios reais." },
    { src: eventBiopark, title: "Aprendizado", description: "Aprendizado contínuo em ambientes de inovação." },
    { src: projectMomentOne, title: "Projetos práticos", description: "Registros da trajetória em desenvolvimento e tecnologia." },
    { src: projectMomentTwo, title: "Experiência acadêmica", description: "Vivências conectando estudo, prática e produto." },
    { src: projectMomentFour, title: "Eventos", description: "Participação em atividades ligadas a tecnologia e inovação." },
    { src: eventMomentOne, title: "Aprendizado contínuo", description: "Contato com problemas reais e novas abordagens." },
    { src: postPhoto, title: "Arthur Nicolas", description: "Histórias, momentos e conexões movidas pela tecnologia" },
    { src: galleryScreenshot, title: "Registro de projeto", description: "Parte dos bastidores e materiais da minha trajetória." },
  ];

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

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = undefined;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!carouselApi || !isSectionInView) return;

    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3500);
  }, [carouselApi, isSectionInView, stopAutoplay]);

  const scheduleAutoplayResume = useCallback(() => {
    stopAutoplay();

    if (!isSectionInView) return;

    if (resumeAutoplayRef.current) {
      window.clearTimeout(resumeAutoplayRef.current);
    }

    resumeAutoplayRef.current = window.setTimeout(() => {
      startAutoplay();
    }, 7000);
  }, [isSectionInView, startAutoplay, stopAutoplay]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    if (isSectionInView) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    carouselApi.on("pointerDown", scheduleAutoplayResume);

    return () => {
      stopAutoplay();

      if (resumeAutoplayRef.current) {
        window.clearTimeout(resumeAutoplayRef.current);
      }

      carouselApi.off("pointerDown", scheduleAutoplayResume);
    };
  }, [carouselApi, isSectionInView, scheduleAutoplayResume, startAutoplay, stopAutoplay]);

  useEffect(() => {
    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }

      if (resumeAutoplayRef.current) {
        window.clearTimeout(resumeAutoplayRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="mb-6 font-display text-display-md font-medium gradient-text md:text-display-lg">
              Momentos
            </h2>
            <p className="mx-auto max-w-3xl font-body text-body-lg leading-relaxed text-muted-foreground">
              Registros de eventos, projetos e experiências que fazem parte da minha trajetória em tecnologia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {photos.map((photo) => (
                  <CarouselItem key={photo.src} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="glass h-full overflow-hidden hover-lift">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-5">
                          <h3 className="font-heading text-heading-sm font-semibold text-foreground">
                            {photo.title}
                          </h3>
                          <p className="mt-1 font-body text-body-sm leading-relaxed text-muted-foreground">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                onPointerDown={scheduleAutoplayResume}
                className="left-2 border-border/60 bg-background/70 hover:bg-background md:-left-5"
              />
              <CarouselNext
                onPointerDown={scheduleAutoplayResume}
                className="right-2 border-border/60 bg-background/70 hover:bg-background md:-right-5"
              />
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
