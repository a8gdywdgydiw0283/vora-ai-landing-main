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

const Index = () => (
  <main className="bg-background min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <SocialProof />
    <ProblemSolution />
    <FeaturesSection />
    <HowItWorks />
    <ProductShowcase />
    <BusinessBenefits />
    <Testimonials />
    <BrandStory />
    <FinalCTA />
  </main>
);

export default Index;
