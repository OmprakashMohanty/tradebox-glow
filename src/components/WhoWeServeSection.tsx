import { motion } from 'framer-motion';
import { TrendingUp, Shield, Globe, MessageSquare, FileCheck, Building2 } from 'lucide-react';

const WhoWeServeSection = () => {
  const clientTypes = [
    {
      title: 'Research Analysts',
      gradient: 'from-gradient-purple to-gradient-cyan',
      bgGradient: 'from-gradient-purple/20 to-gradient-cyan/20'
    },
    {
      title: 'Registered Investment Advisors',
      gradient: 'from-gradient-pink to-gradient-purple',
      bgGradient: 'from-gradient-pink/20 to-gradient-purple/20'
    }
  ];

  const integrations = [
    {
      icon: Globe,
      title: 'Website and App API',
      description: 'Seamless integration with your digital platforms.',
      gradient: 'from-gradient-cyan to-gradient-blue'
    },
    {
      icon: MessageSquare,
      title: 'Telegram Automation',
      description: 'Real-time trade delivery to private groups.',
      gradient: 'from-gradient-purple to-gradient-pink'
    },
    {
      icon: FileCheck,
      title: 'E-Signing and Payment Gateway',
      description: 'Compliance through trusted service partners like Protean and Razorpay.',
      gradient: 'from-gradient-pink to-gradient-cyan'
    },
    {
      icon: Building2,
      title: 'Broker API Access',
      description: 'Connect with brokers like Alice Blue & more.',
      gradient: 'from-gradient-blue to-gradient-purple'
    }
  ];

  return (
    <section className="py-20 bg-tradebox-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-pink/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-cyan/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gradient-pink to-gradient-cyan bg-clip-text text-transparent">
              Who We Serve
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            Empowering SEBI-Registered Experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${client.bgGradient} backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500`}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 text-center">
                {/* Content */}
                <h3 className="text-3xl font-bold text-white">
                  {client.title}
                </h3>
              </div>

              {/* Animated background glow */}
              <motion.div 
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${client.gradient} blur-xl`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Powerful Integrations Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gradient-purple to-gradient-cyan bg-clip-text text-transparent">
              Powerful Integrations
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 flex items-start space-x-4">
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${integration.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <integration.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {integration.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </div>

              {/* Animated background glow */}
              <motion.div 
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${integration.gradient} blur-xl`}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;