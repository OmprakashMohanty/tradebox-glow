import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import CombinedWhoWeServeTestimonials from "@/components/CombinedWhoWeServeTestimonials";
import OnboardingStepsSection from "@/components/OnboardingStepsSection";
import PowerfulIntegrationsSection from "@/components/PowerfulIntegrationsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CombinedWhoWeServeTestimonials />
      <OnboardingStepsSection />
      <PowerfulIntegrationsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
