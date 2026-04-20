import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const logos = ["​", "​", "​", "\n", "​"];

const SocialProof = () => (
  <section className="section-howit relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {logos.map((name) => (
          <span key={name} className="text-silver/40 font-bold text-lg tracking-[0.3em] uppercase select-none">
            {name}
          </span>
        ))}
        <div className="flex items-center justify-center gap-0 text-silver/50 w-full">
          <Activity className="w-5 h-5 text-cyan-glow/60 -ml-[19px]" />
          <span className="font-medium font-sans text-xl text-center text-cyan-600 opacity-75 tracking-[0.5em]">NEVER MISS LEAD </span>
        </div>
      </motion.div>
      <motion.p
        className="text-center mt-6 text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        +100 Conversations Automated.
      </motion.p>
    </div>
  </section>
);

export default SocialProof;
