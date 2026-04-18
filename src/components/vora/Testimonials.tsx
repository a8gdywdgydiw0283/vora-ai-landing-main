import { motion } from "framer-motion";

const quotes = [
  {
    text: "VORA transformed our support system. The implementation was seamless, and our customers love the instant resolution.",
    author: "Director of Operations, TechFlow",
  },
  {
    text: "We saw a 35% increase in lead conversion within the first month. VORA is the smartest investment our sales team has made.",
    author: "Founder, Apex Solutions",
  },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={i}
            className="relative bg-card/30 p-8 md:p-10 rounded-2xl border-l-2 border-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-silver italic leading-relaxed">
              &ldquo;{q.text}&rdquo;
            </p>
            <footer className="mt-6 text-sm text-muted-foreground font-medium">
              — {q.author}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
