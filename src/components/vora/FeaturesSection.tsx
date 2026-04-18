import { motion } from "framer-motion";
import { Timer, UserPlus, Plug, SlidersHorizontal, BarChart3 } from "lucide-react";

const features = [
  { icon: Timer, title: "Instant Responses", text: "Answer customers instantly, anytime." },
  { icon: UserPlus, title: "Lead Capture", text: "Automatically gather contact details and route high-value prospects to your team." },
  { icon: Plug, title: "Easy Integration", text: "Connect VORA to your website in minutes. Zero coding required." },
  { icon: SlidersHorizontal, title: "Customizable AI", text: "Personalize conversations to seamlessly match your brand's unique tone." },
  { icon: BarChart3, title: "Smart Analytics", text: "Track interaction metrics and continuously improve performance." },
];

const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-glow/3 rounded-full blur-[150px]" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Powerful Features</h2>
        <p className="mt-4 text-muted-foreground text-lg">Everything you need to automate customer engagement.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="glass-panel p-8 group hover:glow-cyan-sm transition-all duration-500 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
