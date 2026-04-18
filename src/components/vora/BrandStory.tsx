import { motion } from "framer-motion";

const BrandStory = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Fluid background abstraction */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-silver/10 to-primary/20 blur-[80px] animate-float" />
    </div>

    <div className="container relative z-10 mx-auto px-6 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          The VORA Standard
        </h2>
        <p className="text-lg md:text-xl text-silver leading-relaxed">
          VORA is designed for modern businesses that demand intelligent, automated support without
          compromising the customer experience. We merge advanced machine learning with premium,
          frictionless design to give you a smarter, sharper way to engage your audience.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BrandStory;
