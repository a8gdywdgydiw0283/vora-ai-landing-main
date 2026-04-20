import { motion } from "framer-motion";

const benefits = [
  { bold: "Save Time:", text: "Automate up to 80% of routine inquiries." },
  { bold: "Reduce Missed Leads:", text: "Engage visitors exactly when their intent is highest." },
  { bold: "Improve Support Speed:", text: "Deliver answers in milliseconds, not hours." },
  { bold: "Increase Conversions:", text: "Guide prospects through the funnel effortlessly." },
  { bold: "Scale Without Extra Staff:", text: "Handle infinite concurrent chats without increasing overhead." },
];

const BusinessBenefits = () => (
  <section className="section-why">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Businesses Choose VORA
      </motion.h2>

      <div className="space-y-0">
        {benefits.map((b, i) => (
          <motion.div
            key={b.bold}
            className="py-8 border-b border-border/40 last:border-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
              <span className="font-bold text-gradient-silver">{b.bold}</span>{" "}
              <span className="text-silver">{b.text}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessBenefits;
