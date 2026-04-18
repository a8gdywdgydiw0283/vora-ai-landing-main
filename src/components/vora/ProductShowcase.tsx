import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, Users } from "lucide-react";

const ProductShowcase = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-transparent" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Built for Performance
      </motion.h2>

      <motion.div
        className="relative max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ perspective: "1200px" }}
      >
        <div
          className="glass-panel p-1 glow-cyan"
          style={{ transform: "rotateX(5deg) rotateY(-2deg)" }}
        >
          <div className="bg-card/80 rounded-xl p-6 md:p-8">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">vora.ai/dashboard</span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Chat panel */}
              <div className="glass-panel p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <MessageSquare className="w-4 h-4 text-primary" /> Live Chat
                </div>
                {[
                  { name: "Sarah K.", msg: "How do I reset my password?", time: "2m ago" },
                  { name: "James L.", msg: "Pricing for enterprise?", time: "5m ago" },
                  { name: "Mia T.", msg: "Integration with Slack?", time: "8m ago" },
                ].map((c) => (
                  <div key={c.name} className="p-3 rounded-lg bg-secondary/50 border border-border/50">
                    <p className="text-xs text-primary font-medium">{c.name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{c.msg}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-1">{c.time}</p>
                  </div>
                ))}
              </div>

              {/* Analytics */}
              <div className="glass-panel p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" /> Analytics
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Response Rate", value: "99.2%", bar: 99 },
                    { label: "Satisfaction", value: "94.5%", bar: 94 },
                    { label: "Conversion", value: "38.7%", bar: 39 },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{m.label}</span>
                        <span className="text-foreground font-mono">{m.value}</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary/70 rounded-full" style={{ width: `${m.bar}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mini chart */}
                <div className="mt-5 flex items-end gap-1 h-16">
                  {[40, 55, 35, 65, 50, 75, 60, 80, 70, 85, 78, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Leads */}
              <div className="glass-panel p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Users className="w-4 h-4 text-primary" /> Lead Stream
                </div>
                {[
                  { name: "Apex Corp", score: "92", status: "Hot" },
                  { name: "Nova Labs", score: "87", status: "Warm" },
                  { name: "Orbit Inc", score: "74", status: "Warm" },
                  { name: "Pulse AI", score: "68", status: "New" },
                ].map((l) => (
                  <div key={l.name} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                    <div>
                      <p className="text-sm text-foreground font-medium">{l.name}</p>
                      <p className="text-[10px] text-muted-foreground">Score: {l.score}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      l.status === "Hot" ? "bg-primary/20 text-primary" : "bg-secondary text-silver"
                    }`}>
                      {l.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductShowcase;
