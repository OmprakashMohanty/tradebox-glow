import { motion } from 'framer-motion';
import { Calendar, MessageSquare, UserCheck } from 'lucide-react';

const OnboardingStepsSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Book a 1:1 call',
      icon: Calendar,
      gradient: 'from-gradient-purple/20 to-gradient-cyan/20',
      iconColor: 'text-gradient-purple'
    },
    {
      number: '2', 
      title: 'Share your business type',
      icon: MessageSquare,
      gradient: 'from-gradient-cyan/20 to-gradient-blue/20',
      iconColor: 'text-gradient-cyan'
    },
    {
      number: '3',
      title: 'Get personalized onboarding',
      icon: UserCheck,
      gradient: 'from-gradient-pink/20 to-gradient-purple/20',
      iconColor: 'text-gradient-pink'
    }
  ];

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

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-tradebox-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            In just{' '}
            <span className="bg-gradient-to-r from-gradient-purple to-gradient-cyan bg-clip-text text-transparent">
              15 minutes
            </span>
            , see how Tradebox can transform your business.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className={`group relative bg-gradient-to-br ${step.gradient} backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300`}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative z-10 text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 border border-white/20">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <step.icon className={`w-12 h-12 ${step.iconColor} mx-auto`} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Step {step.number}
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  {step.title}
                </p>
              </div>
              
              {/* Connecting arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-white/40 to-white/20"></div>
                  <div className="absolute -right-1 -top-1 w-3 h-3 border-r-2 border-t-2 border-white/40 transform rotate-45"></div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl group-hover:from-white/10 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingStepsSection;