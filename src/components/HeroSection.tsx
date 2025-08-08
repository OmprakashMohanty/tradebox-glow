import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import DashboardMockup from './DashboardMockup';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-mesh relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-purple/5 via-transparent to-gradient-cyan/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gradient-purple via-gradient-cyan to-gradient-pink bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <span className="text-white">SEBI-Registered</span>
                <br />
                <span className="bg-gradient-to-r from-gradient-cyan to-gradient-purple bg-clip-text text-transparent">
                  Advisors
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              One platform for compliance, analytics & smarter trading. Modern Infrastructure for Research Analysts, Investment Advisors with Compliant, Scalable, and White-labeled Technology.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button 
                size="lg"
                className="bg-gradient-accent text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-gradient-pink/30 transition-all duration-300 transform hover:scale-105"
              >
                Book a Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gradient-blue text-gradient-blue hover:bg-gradient-blue hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                Request Free Trial
              </Button>
            </motion.div>

          </div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <DashboardMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;