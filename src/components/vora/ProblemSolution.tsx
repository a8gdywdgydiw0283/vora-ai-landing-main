import { motion } from "framer-motion";

const ProblemSolution = () => (
  <section className="section-features relative">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Businesses lose leads when customers wait for replies.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every minute of delay is a missed opportunity.
          </p>
        </motion.div>

        <motion.div
          className="glass-panel p-8 md:p-10 space-y-6 glow-cyan-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">The Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Zero Wait Time. Zero Missed Leads.
          </h2>
          <p className="text-lg text-silver leading-relaxed">
            VORA provides instant, intelligent AI responses 24/7. No opportunity is missed, and your team is freed from repetitive queries.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
