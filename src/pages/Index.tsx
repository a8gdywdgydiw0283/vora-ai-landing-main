import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/vora/Navbar";
import HeroSection from "@/components/vora/HeroSection";
import SocialProof from "@/components/vora/SocialProof";
import ProblemSolution from "@/components/vora/ProblemSolution";
import FeaturesSection from "@/components/vora/FeaturesSection";
import HowItWorks from "@/components/vora/HowItWorks";
import ProductShowcase from "@/components/vora/ProductShowcase";
import BusinessBenefits from "@/components/vora/BusinessBenefits";
import Testimonials from "@/components/vora/Testimonials";
import BrandStory from "@/components/vora/BrandStory";
import FinalCTA from "@/components/vora/FinalCTA";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getStrategicHeadline = () => {
  if (typeof window === "undefined") {
    return "While You Rest, Your Competitors Close Your Deals";
  }

  const params = new URLSearchParams(window.location.search);
  const utmSource = (params.get("utm_source") || "").toLowerCase();
  const utmCampaign = (params.get("utm_campaign") || "").toLowerCase();
  const referrer = document.referrer.toLowerCase();

  if (utmCampaign.includes("retarget") || utmSource.includes("meta")) {
    return "Retarget Every Lost Lead Before Your Competitors Do";
  }

  if (utmSource.includes("google") || referrer.includes("google.")) {
    return "Turn High-Intent Search Traffic Into Booked Clients";
  }

  if (
    utmSource.includes("instagram") ||
    utmSource.includes("facebook") ||
    referrer.includes("instagram.") ||
    referrer.includes("facebook.")
  ) {
    return "Convert Social DMs Into Revenue 24/7";
  }

  if (referrer.includes("linkedin.")) {
    return "Scale B2B Lead Response Without Hiring More Staff";
  }

  return "While You Rest, Your Competitors Close Your Deals";
};

const Index = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [strategicHeadline, setStrategicHeadline] = useState("While You Rest, Your Competitors Close Your Deals");
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const loaderBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setStrategicHeadline(getStrategicHeadline());
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) {
      gsap.set(cursorRef.current, { autoAlpha: 0 });
      return;
    }

    const cursor = cursorRef.current;
    gsap.set(cursor, { x: -500, y: -500, autoAlpha: 0.9 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.26, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.26, ease: "power3.out" });

    const onMouseMove = (event: MouseEvent) => {
      xTo(event.clientX - 170);
      yTo(event.clientY - 170);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.killTweensOf(cursor);
    };
  }, []);

  useEffect(() => {
    if (!loaderVisible || !loaderRef.current || !loaderBarRef.current) return;

    const loaderElement = loaderRef.current;
    const barElement = loaderBarRef.current;
    const brandPulse = gsap.to(".vora-loader-brand", {
      opacity: 0.95,
      y: -2,
      duration: 0.7,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    const loaderTimeline = gsap.timeline();
    loaderTimeline
      .fromTo(
        barElement,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.25, ease: "power2.inOut" },
      )
      .to(loaderElement, {
        autoAlpha: 0,
        duration: 0.55,
        delay: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setLoaderVisible(false);
        },
      });

    return () => {
      brandPulse.kill();
      loaderTimeline.kill();
    };
  }, [loaderVisible]);

  return (
    <>
      {loaderVisible && (
        <div ref={loaderRef} className="vora-loader" role="status" aria-live="polite" aria-label="Loading VORA experience">
          <div className="vora-loader-content">
            <div className="vora-loader-brand">VORA</div>
            <div className="vora-loader-bar">
              <div ref={loaderBarRef} className="vora-loader-bar-fill" />
            </div>
          </div>
        </div>
      )}
      <div className="bg-grid" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      <main className="bg-background min-h-screen overflow-x-hidden relative z-10">
        <Navbar />
        <div className="gsap-reveal"><HeroSection strategicHeadline={strategicHeadline} /></div>
        <div className="gsap-reveal"><SocialProof /></div>
        <div className="gsap-reveal"><ProblemSolution /></div>
        <div className="gsap-reveal"><FeaturesSection /></div>
        <div className="gsap-reveal"><HowItWorks /></div>
        <div className="gsap-reveal"><ProductShowcase /></div>
        <div className="gsap-reveal"><BusinessBenefits /></div>
        <div className="gsap-reveal"><Testimonials /></div>
        <div className="gsap-reveal"><BrandStory /></div>
        <div className="gsap-reveal"><FinalCTA /></div>
      </main>
    </>
  );
};

export default Index;
