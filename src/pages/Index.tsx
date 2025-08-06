import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-tradebox-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <WhoWeServeSection />
      </main>
    </div>
  );
};

export default Index;
