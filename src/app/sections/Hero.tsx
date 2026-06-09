import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import type { PointerEvent } from 'react';
import curatorImage from '../../assets/brand/curator-silhouette.svg';
import heroTexture from '../../assets/brand/hero-red-3d-texture.jpg';
import marizaLogo from '../../assets/brand/mariza-logo.svg';
import { contactLinks } from '../siteData';

const Hero = () => {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.4 });
  const glowX = useTransform(smoothX, [-1, 1], [-260, 260]);
  const glowY = useTransform(smoothY, [-1, 1], [-150, 150]);
  const textureX = useTransform(smoothX, [-1, 1], [18, -18]);
  const textureY = useTransform(smoothY, [-1, 1], [12, -12]);
  const portraitX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const portraitY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const portraitRotate = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);
  const titleX = useTransform(smoothX, [-1, 1], [7, -7]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="hero"
      className="mariza-hero relative isolate min-h-screen overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:px-8"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="mariza-hero-bg" aria-hidden="true">
        <motion.img src={heroTexture} alt="" className="mariza-hero-texture" style={{ x: textureX, y: textureY, scale: 1.04 }} />
        <div className="mariza-hero-grid" />
        <div className="mariza-hero-redline mariza-hero-redline-one" />
        <div className="mariza-hero-redline mariza-hero-redline-two" />
        <div className="mariza-hero-sweep" />
        <motion.div className="mariza-hero-cursor-light" style={{ x: glowX, y: glowY }} />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-[1400px] items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.78fr)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
          }}
          className="relative z-20 mx-auto w-full min-w-0 max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <motion.img
            src={marizaLogo}
            alt="Mariza"
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.94 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mariza-hero-logo mx-auto mb-8 h-auto w-36 drop-shadow-[0_22px_60px_rgba(227,0,8,0.25)] sm:w-44 lg:mx-0"
          />

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{ x: titleX }}
            className="mariza-hero-title text-6xl font-black leading-none text-[#fff8ed] sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            MARIZA
            <span className="block text-[#fb171d]">ONLINE</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#e5e9f0] sm:text-2xl sm:leading-10 lg:mx-0"
          >
            3D анимация, каармандар жана YouTube монетизация боюнча практикалык онлайн курс. Нөлдөн баштап Blender, iClone, монтаж жана канал өстүрүү системасына чейин.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <motion.a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#fb171d] px-7 py-4 text-base font-black text-white shadow-[0_22px_70px_rgba(251,23,29,0.32)] transition-colors hover:bg-[#ff383d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb171d] sm:w-auto"
            >
              Курска жазылуу
              <ArrowRight className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="#curriculum"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/[0.06] px-7 py-4 text-base font-bold text-[#fff8ed] backdrop-blur-xl transition-colors hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Программаны көрүү
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: portraitX, y: portraitY, rotate: portraitRotate }}
          className="pointer-events-none absolute bottom-[-6rem] right-[-7.5rem] z-0 flex h-[520px] w-[390px] max-w-none items-end justify-center opacity-45 sm:bottom-[-8rem] sm:right-[-4rem] sm:h-[640px] sm:w-[480px] lg:pointer-events-auto lg:relative lg:bottom-auto lg:right-auto lg:z-auto lg:mx-auto lg:h-[680px] lg:w-full lg:max-w-[520px] lg:opacity-100"
          aria-label="Куратор Mariza Online"
        >
          <div className="mariza-portrait-light" aria-hidden="true" />
          <img src={marizaLogo} alt="" className="mariza-portrait-logo pointer-events-none absolute" aria-hidden="true" />
          <img src={curatorImage} alt="Mariza Online куратор" className="mariza-portrait-image relative z-10 h-full w-auto object-contain" />
          <div className="mariza-portrait-floor" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#0b0f18]" aria-hidden="true" />
    </section>
  );
};

export default Hero;
