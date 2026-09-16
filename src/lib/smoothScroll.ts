import Lenis from "lenis";

let lenis: Lenis | null = null;

export const startSmoothScroll = () => {
  if (lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenis = instance;

  let frame = 0;
  const raf = (time: number) => {
    instance.raf(time);
    frame = window.requestAnimationFrame(raf);
  };
  frame = window.requestAnimationFrame(raf);

  return () => {
    window.cancelAnimationFrame(frame);
    instance.destroy();
    lenis = null;
  };
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, { duration: 1.1 });
  } else {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const pauseSmoothScroll = () => lenis?.stop();

export const resumeSmoothScroll = () => lenis?.start();
