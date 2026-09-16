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
import { pauseSmoothScroll, resumeSmoothScroll } from "@/lib/smoothScroll";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, GalleryHorizontal, LayoutGrid } from "lucide-react";
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
import hackathonPodium from "@/assets/optimized/hackathon-podium.jpg";
import hackathonPodiumAudience from "@/assets/optimized/hackathon-podium-audience.jpg";
import hackathonPitchBytecode from "@/assets/optimized/hackathon-pitch-bytecode.jpg";
import academicWeekStage from "@/assets/optimized/academic-week-stage.jpg";
import gatevisionPresentation from "@/assets/optimized/gatevision-presentation.jpg";

const GallerySection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [layout, setLayout] = useState<"carousel" | "grid">("carousel");
  const [openPhotoIndex, setOpenPhotoIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const autoplayRef = useRef<number>();
  const resumeAutoplayRef = useRef<number>();

  const photos = [
    { src: hackathonPodium, title: "3º lugar no Hackathon", description: "Pódio no Hackathon da Semana Acadêmica na Faculdade Donaduzzi." },
    { src: hackathonPitchBytecode, title: "Pitch ByteCode", description: "Apresentação de solução para consulta de protocolos em órgãos públicos." },
    { src: academicWeekStage, title: "Semana Acadêmica", description: "No palco da Semana Acadêmica dos Cursos de Tecnologia." },
    { src: gatevisionPresentation, title: "GateVision", description: "Apresentação do sistema inteligente de acesso com reconhecimento de placas." },
    { src: hackathonPodiumAudience, title: "Premiação", description: "Momento da premiação com a equipe e a banca do hackathon." },
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

  const changeLayout = (nextLayout: "carousel" | "grid") => {
    if (nextLayout === layout) return;
    if (nextLayout === "grid") setCarouselApi(undefined);
    setLayout(nextLayout);
  };

  const showSiblingPhoto = (direction: 1 | -1) => {
    setOpenPhotoIndex((current) =>
      current === null ? current : (current + direction + photos.length) % photos.length
    );
  };

  const openPhoto = openPhotoIndex === null ? null : photos[openPhotoIndex];
  const isLightboxOpen = openPhoto !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;
    pauseSmoothScroll();
    return () => {
      resumeSmoothScroll();
    };
  }, [isLightboxOpen]);

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
          <motion.div variants={itemVariants} className="mb-8 text-center md:mb-10">
            <h2 className="mb-6 font-display text-display-md font-medium gradient-text md:text-display-lg">
              Momentos
            </h2>
            <p className="mx-auto max-w-3xl font-body text-body-lg leading-relaxed text-muted-foreground">
              Registros de eventos, projetos e experiências que fazem parte da minha trajetória em tecnologia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 flex justify-center md:mb-8">
            <div className="glass relative inline-flex rounded-full p-1" role="group" aria-label="Modo de visualização">
              {[
                { id: "carousel" as const, label: "Carrossel", icon: GalleryHorizontal },
                { id: "grid" as const, label: "Grade", icon: LayoutGrid },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => changeLayout(option.id)}
                  aria-pressed={layout === option.id}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-body text-xs font-medium transition-colors md:text-body-sm ${
                    layout === option.id ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {layout === option.id && (
                    <motion.span
                      layoutId="galleryLayoutIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <option.icon size={16} className="relative z-10" />
                  <span className="relative z-10">{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            {layout === "grid" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-4 lg:grid-cols-5"
              >
                {photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setOpenPhotoIndex(index)}
                    className="group relative aspect-square overflow-hidden rounded-sm bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:rounded-lg"
                    aria-label={`Abrir foto: ${photo.title}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15" />
                  </button>
                ))}
              </motion.div>
            ) : (
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
            )}
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={openPhoto !== null} onOpenChange={(open) => !open && setOpenPhotoIndex(null)}>
        <DialogContent
          className="max-w-4xl overflow-hidden border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:rounded-2xl"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") showSiblingPhoto(1);
            if (event.key === "ArrowLeft") showSiblingPhoto(-1);
          }}
        >
          {openPhoto && (
            <>
              <div className="relative flex max-h-[75vh] items-center justify-center bg-black">
                <img
                  src={openPhoto.src}
                  alt={openPhoto.title}
                  className="max-h-[75vh] w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => showSiblingPhoto(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:bg-background"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => showSiblingPhoto(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:bg-background"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex items-start justify-between gap-4 p-4 md:p-5">
                <div>
                  <DialogTitle className="font-heading text-heading-sm font-semibold text-foreground">
                    {openPhoto.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 font-body text-body-sm leading-relaxed text-muted-foreground">
                    {openPhoto.description}
                  </DialogDescription>
                </div>
                <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-body text-xs font-medium text-primary-light">
                  {(openPhotoIndex ?? 0) + 1} / {photos.length}
                </span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
