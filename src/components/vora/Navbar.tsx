import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import voraLogo, { VORA_LOGO_HEIGHT, VORA_LOGO_WIDTH } from "@/assets/vora-logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closePricing = () => setPricingOpen(false);

  useEffect(() => {
    if (!pricingOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePricing();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pricingOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={voraLogo}
              alt="VORA"
              width={VORA_LOGO_WIDTH}
              height={VORA_LOGO_HEIGHT}
              decoding="async"
              className="h-14 md:h-16 w-auto max-w-full"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            {/* MODIFIED: pricing button */}
            <button
              type="button"
              className="nav-link"
              onClick={() => setPricingOpen(true)}
            >
              Pricing
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/vora.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform duration-300 glow-cyan-sm"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 px-6 py-6 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-base font-medium text-silver hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* MODIFIED: pricing button */}
            <button
              type="button"
              className="block w-full text-left text-base font-medium text-silver hover:text-foreground transition-colors"
              onClick={() => {
                setPricingOpen(true);
                setMobileOpen(false);
              }}
            >
              Pricing
            </button>
            <a
              href="https://www.instagram.com/vora.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm glow-cyan-sm"
            >
              Get Started Free
            </a>
          </motion.div>
        )}
      </motion.header>

      {/* MODIFIED: pricing modal */}
      {pricingOpen && (
        <div
          className="fixed inset-0 z-[80] bg-background/75 backdrop-blur-sm p-4 md:p-8"
          onClick={closePricing}
          onKeyDown={(event) => {
            if (event.key === "Escape") closePricing();
          }}
          role="presentation"
        >
          <div className="h-full overflow-auto">
            <div
              className="max-w-6xl mx-auto my-4 md:my-8 rounded-2xl border border-border/60 bg-card/90 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Pricing plans"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Pricing</h2>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    A full-time secretary costs 3,000–4,000 EGP/mo. Vora starts at 2,000 EGP/mo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closePricing}
                  className="h-10 w-10 rounded-lg border border-border/60 text-silver hover:text-foreground hover:border-silver/50 transition-colors"
                  aria-label="Close pricing modal"
                >
                  ×
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                  <h3 className="text-xl font-bold">VORA PULSE</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Single-branch clinics &amp; small practices</p>
                  <div className="mt-4 space-y-1 text-sm">
                    <p><span className="text-silver">One-time setup:</span> 4,000 EGP</p>
                    <p><span className="text-silver">Monthly subscription:</span> 2,000 EGP / mo</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• 24/7 instant replies to common patient questions</li>
                    <li>• Basic appointment booking &amp; lead capture</li>
                    <li>• Zero missed messages — every inquiry is logged</li>
                    <li>• Simple, always-on front-desk replacement</li>
                  </ul>
                  {/* MODIFIED: invest payment button */}
                  <button
                    type="button"
                    className="mt-5 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform duration-200 glow-cyan-sm"
                  >
                    Invest Now
                  </button>
                </div>

                <div className="rounded-2xl border-2 border-primary bg-background/70 p-5 shadow-[0_0_20px_hsl(var(--cyan-glow)/0.12)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold">VORA PRIME</h3>
                    <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      Most Recommended
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Mid-size &amp; growing clinics</p>
                  <div className="mt-4 space-y-1 text-sm">
                    <p><span className="text-silver">One-time setup:</span> 5,000 EGP</p>
                    <p><span className="text-silver">Monthly subscription:</span> 3,000 EGP / mo</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• Everything in Pulse</li>
                    <li>• Smart booking with automated follow-ups</li>
                    <li>• Faster chat-to-appointment conversion</li>
                    <li>• Priority response &amp; cleaner patient experience</li>
                    <li>• Re-engages lost leads to recover bookings</li>
                  </ul>
                  {/* MODIFIED: invest payment button */}
                  <button
                    type="button"
                    className="mt-5 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform duration-200 glow-cyan-sm"
                  >
                    Invest Now
                  </button>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                  <h3 className="text-xl font-bold">VORA TITAN</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Large multi-branch operations</p>
                  <div className="mt-4 space-y-1 text-sm">
                    <p><span className="text-silver">One-time setup:</span> 8,500 EGP</p>
                    <p><span className="text-silver">Monthly subscription:</span> 4,500 EGP / mo</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• Everything in Prime</li>
                    <li>• Full brand customisation</li>
                    <li>• Advanced automation for high-volume workflows</li>
                    <li>• VIP priority support &amp; dedicated account handling</li>
                    <li>• Zero tolerance for patient loss at any branch</li>
                  </ul>
                  {/* MODIFIED: invest payment button */}
                  <button
                    type="button"
                    className="mt-5 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform duration-200 glow-cyan-sm"
                  >
                    Invest Now
                  </button>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-border/60 text-xs md:text-sm text-muted-foreground">
                All prices in Egyptian Pounds (EGP) · Setup fee is one-time · Monthly subscription billed in advance
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
