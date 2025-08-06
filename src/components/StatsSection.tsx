import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Briefcase, MessageSquare } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Experts Signed-up',
      gradient: 'from-gradient-cyan to-gradient-blue',
      delay: 0.1
    },
    {
      icon: TrendingUp,
      value: '10,000+',
      label: 'Customers Onboarded',
      gradient: 'from-gradient-purple to-gradient-pink',
      delay: 0.2
    },
    {
      icon: DollarSign,
      value: '₹500Cr+',
      label: 'Transactions Value',
      gradient: 'from-gradient-pink to-gradient-cyan',
      delay: 0.3
    },
    {
      icon: Briefcase,
      value: '1,200+',
      label: 'Model Portfolios',
      gradient: 'from-gradient-blue to-gradient-purple',
      delay: 0.4
    },
    {
      icon: MessageSquare,
      value: '150+',
      label: 'Telegram Channels Integrated',
      gradient: 'from-gradient-cyan to-gradient-pink',
      delay: 0.5
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
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="py-24 bg-tradebox-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            TradeBox Stats
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by thousands of financial professionals across India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="relative p-8 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl hover:border-opacity-60 transition-all duration-300 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5`}>
                    <div className="w-full h-full bg-tradebox-surface rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="relative z-10">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;