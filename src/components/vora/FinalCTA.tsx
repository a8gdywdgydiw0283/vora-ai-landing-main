import { motion } from "framer-motion";

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue to-background" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

    <motion.div
      className="container relative z-10 mx-auto px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
        Start Your Free Trial Today.
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
        Join hundreds of businesses already growing with VORA.
      </p>
      <a href="https://www.instagram.com/vora.systems" target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-cyan hover:scale-105 transition-transform duration-300 inline-block">
        Get Started
      </a>
      <p className="mt-6 text-sm text-muted-foreground">
        Secure, reliable, and built for scale.
      </p>
    </motion.div>
  </section>
);

export default FinalCTA;
