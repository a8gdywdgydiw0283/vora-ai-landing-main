import { motion } from "framer-motion";
import voraLogo from "@/assets/vora-logo-custom.png";

type HeroSectionProps = {
  strategicHeadline: string;
};

const HeroLogo = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
    {/* Outer glow pulse */}
    <div className="absolute inset-0 rounded-full bg-cyan-glow/8 blur-3xl animate-orb-pulse" />
    {/* Mid glow ring */}
    <div className="absolute inset-6 rounded-full border border-cyan-glow/15 animate-orb-pulse" />
    {/* Glass backdrop */}
    <div
      className="absolute inset-8 rounded-full"
      style={{
        background: 'radial-gradient(circle at 40% 35%, hsl(185 100% 50% / 0.08), hsl(220 60% 8% / 0.6))',
        border: '1px solid hsl(185 100% 50% / 0.12)',
        backdropFilter: 'blur(40px)',
      }}
    />
    {/* Logo */}
    <div className="relative z-10 w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 overflow-hidden rounded-full">
      <motion.img
        src={voraLogo}
        alt="VORA"
        className="w-full h-full object-contain"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* 3D Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none animate-shimmer-sweep"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, hsl(185 100% 80% / 0.25) 45%, hsl(185 100% 95% / 0.4) 50%, hsl(185 100% 80% / 0.25) 55%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
      />
    </div>
    {/* Outer reflection ring */}
    <div className="absolute inset-2 rounded-full border border-silver/10" />
  </div>
);

const HeroSection = ({ strategicHeadline }: HeroSectionProps) => {
  return (
    <section className="hero-section section-hero relative overflow-hidden">
      {/* Bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue to-background" />
      {/* Subtle radial glow */}
      <div className="hero-right-glow absolute top-1/2 right-1/4 -translate-y-1/2 rounded-full bg-cyan-glow/5 blur-[120px]" />
      {/* MODIFIED: 3D floating blobs/orbs */}
      <div className="hero-blob hero-blob-one" />
      <div className="hero-blob hero-blob-two" />
      <div className="hero-blob hero-blob-three" />
      {/* MODIFIED: 3D perspective grid floor */}
      <div className="hero-grid-floor" />
      {/* MODIFIED: dashed orbit ring */}
      <div className="hero-orbit-ring" />
      {/* MODIFIED: floating glassmorphic card */}
      <div className="hero-glass-float-card" />

      <div className="relative z-10 hero-grid">
        {/* Left content */}
        <motion.div
          className="hero-left text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-gradient-silver">​</span>{" "}
            <span
              className="block w-full text-center text-4xl font-semibold tracking-[0.08em]"
              style={{ fontFamily: '"Bebas Neue", sans-serif', color: '#00F2FF' }}
            >
              {strategicHeadline}
            </span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Instantly respond to customers, save time, and scale your business effortlessly.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <a href="https://id-preview--38023f9f-3ef6-4676-ab8d-4963587f44bd.lovable.app/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-cyan hover:scale-105 transition-transform duration-300 inline-block text-center">
              Start Free Trial
            </a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-8 py-4 rounded-lg border border-silver/30 text-foreground font-medium text-lg hover:border-silver/60 hover:bg-secondary/30 transition-all duration-300 inline-block text-center cursor-pointer">
              See How It Works
            </a>
          </motion.div>
          <motion.p
            className="text-sm text-cyan-300 border-none border-0 opacity-60 tracking-[0.5em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            DON`T MISS THE OPPORTUNITY
          </motion.p>
        </motion.div>

        {/* Right orb */}
        <motion.div
          className="hero-right flex-shrink-0 animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <HeroLogo />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
