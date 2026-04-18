import { motion } from "framer-motion";
import { Link, BookOpen, Rocket } from "lucide-react";

const steps = [
  { icon: Link, title: "Connect", text: "Integrate VORA directly into your website environment in minutes." },
  { icon: BookOpen, title: "Train", text: "Feed the AI your documentation. VORA instantly learns your business inside and out." },
  { icon: Rocket, title: "Convert", text: "Launch your assistant and start turning passive website visitors into active leads." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-foreground mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent">
          <motion.div
            className="absolute left-0 w-full h-20 bg-gradient-to-b from-primary to-transparent"
            initial={{ top: "0%" }}
            whileInView={{ top: ["0%", "100%"] }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex gap-8 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary border border-glass-border flex items-center justify-center flex-shrink-0 glow-cyan-sm">
                <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
