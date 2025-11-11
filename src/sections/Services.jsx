import { Code, Smartphone, Globe, Search, Share2, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { RevealOnScroll, ScaleOnHover } from '../components/Animations';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites built with cutting-edge technologies for optimal performance and user experience.',
    features: [
      'Responsive Design',
      'Modern Frameworks (React, Vue, Angular)',
      'SEO-Friendly Architecture',
      'Fast Loading Speed',
      'Cross-Browser Compatibility'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'Intuitive UI/UX Design',
      'App Store Optimization',
      'Push Notifications'
    ]
  },
  {
    icon: Globe,
    title: 'Domain & Hosting Services',
    description: 'Reliable domain registration and high-performance hosting solutions for your online presence.',
    features: [
      'Domain Registration',
      'SSL Certificates',
      'Cloud Hosting',
      '99.9% Uptime Guarantee',
      'Daily Backups'
    ]
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Strategic SEO services to boost your visibility and rank higher in search engine results.',
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO',
      'Content Strategy',
      'Analytics & Reporting'
    ]
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Targeted social media campaigns that build brand awareness and engage your audience.',
    features: [
      'Content Creation',
      'Platform Management',
      'Ad Campaign Management',
      'Audience Engagement',
      'Performance Analytics'
    ]
  },
  {
    icon: Video,
    title: 'Video Ads Production',
    description: 'Professional video advertisements that captivate audiences and drive conversions.',
    features: [
      'Script Writing',
      'Professional Filming',
      'Video Editing',
      'Motion Graphics',
      'Multi-Platform Optimization'
    ]
  }
]

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the online world.
            </p>
          </div>
        </RevealOnScroll>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="h-full"
            >
              <ScaleOnHover>
                <div className="h-full p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group">
                  <motion.div 
                    className="w-14 h-14 bg-purple-900/30 rounded-lg border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScaleOnHover>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <RevealOnScroll>
          <div className="mt-20 text-center">
            <ScaleOnHover>
              <div className="p-12 bg-zinc-900 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Have a project in mind?
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-400 mb-8"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Let's discuss how we can help bring your ideas to life with our expert services.
                </motion.p>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <ScaleOnHover>
                    <button 
                      onClick={scrollToContact}
                      className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </ScaleOnHover>
                </motion.div>
              </div>
            </ScaleOnHover>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Services
