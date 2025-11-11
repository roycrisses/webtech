import { Code, Smartphone, Globe, Search, Share2, Video, CheckCircle } from 'lucide-react'

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
  return (
    <div className="pt-20 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <service.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-gray-400">Understanding your goals and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-400">Creating beautiful and functional designs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Develop</h3>
              <p className="text-gray-400">Building with cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deploy</h3>
              <p className="text-gray-400">Launching and ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="p-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
