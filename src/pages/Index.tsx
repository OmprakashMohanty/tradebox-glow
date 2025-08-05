import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-tradebox-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhoWeServeSection />
      </main>
    </div>
  );
};

export default Index;
