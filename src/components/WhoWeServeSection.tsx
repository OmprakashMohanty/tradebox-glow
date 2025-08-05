import { motion } from 'framer-motion';
import { TrendingUp, Shield } from 'lucide-react';

const WhoWeServeSection = () => {
  const clientTypes = [
    {
      icon: TrendingUp,
      title: 'Research Analysts',
      description: 'SEBI-registered research analysts who provide investment recommendations and market analysis',
      features: [
        'Compliance Management',
        'Research Distribution',
        'Portfolio Modeling',
        'Client Analytics'
      ],
      gradient: 'from-gradient-purple to-gradient-cyan',
      bgGradient: 'from-gradient-purple/20 to-gradient-cyan/20'
    },
    {
      icon: Shield,
      title: 'Registered Investment Advisors',
      description: 'SEBI-RIA professionals managing client portfolios and providing investment advisory services',
      features: [
        'Portfolio Management',
        'Risk Assessment',
        'Client Onboarding',
        'Performance Tracking'
      ],
      gradient: 'from-gradient-pink to-gradient-purple',
      bgGradient: 'from-gradient-pink/20 to-gradient-purple/20'
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized solutions for different categories of SEBI-registered financial professionals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
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
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${client.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <client.icon size={40} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  {client.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {client.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {client.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${client.gradient} rounded-full`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  className={`mt-8 px-6 py-3 bg-gradient-to-r ${client.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
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

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2.5k+', label: 'RIA Registered' },
              { value: '100k+', label: 'Onboardings' },
              { value: '200+', label: 'Broke APIs Created' },
              { value: '1M+', label: 'Recommendations' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gradient-purple to-gradient-cyan bg-clip-text text-transparent group-hover:from-gradient-pink group-hover:to-gradient-purple transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;