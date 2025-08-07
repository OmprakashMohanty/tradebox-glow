import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import OnboardingStepsSection from '@/components/OnboardingStepsSection';
import StatsSection from '@/components/StatsSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tradebox-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OnboardingStepsSection />
        <StatsSection />
        <WhoWeServeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
