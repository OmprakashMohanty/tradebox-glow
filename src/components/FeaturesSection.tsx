import { motion } from 'framer-motion';
import { Users, Briefcase, Brain, Share2, BarChart3, Settings, Bot } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Client Onboarding Solution',
      description: 'Streamlined digital onboarding with KYC compliance and automated documentation',
      gradient: 'from-gradient-cyan/20 to-gradient-blue/20',
      iconColor: 'text-gradient-cyan'
    },
    {
      icon: Briefcase,
      title: 'Model Portfolio Management',
      description: 'Create, manage and track model portfolios with real-time performance analytics',
      gradient: 'from-gradient-purple/20 to-gradient-pink/20',
      iconColor: 'text-gradient-purple'
    },
    {
      icon: Brain,
      title: 'AI Powered Portfolio Review',
      description: 'Intelligent portfolio analysis with AI-driven insights and recommendations',
      gradient: 'from-gradient-pink/20 to-gradient-purple/20',
      iconColor: 'text-gradient-pink'
    },
    {
      icon: Share2,
      title: 'Research Delivery Engine',
      description: 'Distribute research reports and recommendations to clients efficiently',
      gradient: 'from-gradient-blue/20 to-gradient-cyan/20',
      iconColor: 'text-gradient-blue'
    },
    {
      icon: BarChart3,
      title: 'CRM & Insights',
      description: 'Comprehensive client relationship management with detailed analytics',
      gradient: 'from-gradient-cyan/20 to-gradient-purple/20',
      iconColor: 'text-gradient-cyan'
    },
    {
      icon: Settings,
      title: 'White Label Setup',
      description: 'Fully customizable platform with your brand identity and domain',
      gradient: 'from-gradient-purple/20 to-gradient-blue/20',
      iconColor: 'text-gradient-purple'
    },
    {
      icon: Bot,
      title: 'Algo Trading Support',
      description: 'Algorithmic trading capabilities with automated execution strategies',
      gradient: 'from-gradient-pink/20 to-gradient-cyan/20',
      iconColor: 'text-gradient-pink'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-tradebox-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gradient-purple to-gradient-cyan bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools designed specifically for SEBI-registered professionals
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${feature.iconColor} bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-gradient-purple/10 to-gradient-cyan/10 blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;