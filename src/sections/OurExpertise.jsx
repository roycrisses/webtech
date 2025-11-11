import InfiniteCarousel from '../components/InfiniteCarousel';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact, 
  FaAndroid, FaApple, FaJava, FaAws, FaGoogle, FaDigitalOcean, FaDocker, FaFigma,
  FaCode, FaMobileAlt, FaPalette, FaDatabase, FaCloud
} from 'react-icons/fa';
import { 
  SiFlutter, SiKotlin, SiDart, SiXcode, SiAdobexd, SiAdobephotoshop, 
  SiAdobeillustrator, SiSketch, SiInvision, SiMongodb, SiMysql, SiPostgresql, 
  SiFirebase, SiRedis, SiSqlite, SiMicrosoftazure, SiHeroku, SiVercel, SiNetlify 
} from 'react-icons/si';

const webDevelopmentTools = [
  { name: 'HTML', icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="w-12 h-12 text-yellow-400" /> },
  { name: 'Python', icon: <FaPython className="w-12 h-12 text-blue-600" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="w-12 h-12 text-white" /> },
  { name: 'NPM', icon: <FaNpm className="w-12 h-12 text-red-500" /> },
  { name: 'Docker', icon: <FaDocker className="w-12 h-12 text-blue-400" /> },
  { name: 'Figma', icon: <FaFigma className="w-12 h-12 text-purple-500" /> },
];

const appDevelopmentTools = [
  { name: 'React Native', icon: <FaReact className="w-12 h-12 text-blue-400" /> },
  { name: 'Flutter', icon: <SiFlutter className="w-12 h-12 text-blue-400" /> },
  { name: 'Swift', icon: <FaApple className="w-12 h-12 text-gray-400" /> },
  { name: 'Kotlin', icon: <SiKotlin className="w-12 h-12 text-purple-500" /> },
  { name: 'Java', icon: <FaJava className="w-12 h-12 text-red-500" /> },
  { name: 'Dart', icon: <SiDart className="w-12 h-12 text-blue-400" /> },
  { name: 'Xcode', icon: <SiXcode className="w-12 h-12 text-blue-500" /> },
  { name: 'Android', icon: <FaAndroid className="w-12 h-12 text-green-500" /> },
];

const designTools = [
  { name: 'Figma', icon: <FaFigma className="w-12 h-12 text-purple-500" /> },
  { name: 'Adobe XD', icon: <SiAdobexd className="w-12 h-12 text-purple-400" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="w-12 h-12 text-blue-500" /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="w-12 h-12 text-orange-500" /> },
  { name: 'Sketch', icon: <SiSketch className="w-12 h-12 text-yellow-500" /> },
  { name: 'InVision', icon: <SiInvision className="w-12 h-12 text-pink-500" /> },
];

const databaseTools = [
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="w-12 h-12 text-blue-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-blue-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-12 h-12 text-yellow-500" /> },
  { name: 'Redis', icon: <SiRedis className="w-12 h-12 text-red-500" /> },
  { name: 'SQLite', icon: <SiSqlite className="w-12 h-12 text-blue-300" /> },
];

const cloudTools = [
  { name: 'AWS', icon: <FaAws className="w-12 h-12 text-orange-500" /> },
  { name: 'Azure', icon: <SiMicrosoftazure className="w-12 h-12 text-blue-500" /> },
  { name: 'Google Cloud', icon: <FaGoogle className="w-12 h-12 text-blue-400" /> },
  { name: 'Heroku', icon: <SiHeroku className="w-12 h-12 text-purple-500" /> },
  { name: 'Vercel', icon: <SiVercel className="w-12 h-12 text-white" /> },
  { name: 'Netlify', icon: <SiNetlify className="w-12 h-12 text-teal-400" /> },
  { name: 'DigitalOcean', icon: <FaDigitalOcean className="w-12 h-12 text-blue-400" /> },
];

const OurExpertise = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="expertise" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-purple-400">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies and tools to deliver exceptional solutions for your business
          </p>
        </div>

        {/* Categories with Carousels */}
        <div className="space-y-16">
          {/* Web Development */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaCode className="w-8 h-8 text-purple-400" />
              Web Development
            </h2>
            <InfiniteCarousel items={webDevelopmentTools} speed={30} />
          </div>

          {/* App Development */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaMobileAlt className="w-8 h-8 text-purple-400" />
              Mobile App Development
            </h2>
            <InfiniteCarousel items={appDevelopmentTools} speed={28} />
          </div>

          {/* Design Tools */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaPalette className="w-8 h-8 text-purple-400" />
              Design & UI/UX
            </h2>
            <InfiniteCarousel items={designTools} speed={26} />
          </div>

          {/* Database */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaDatabase className="w-8 h-8 text-purple-400" />
              Database Technologies
            </h2>
            <InfiniteCarousel items={databaseTools} speed={24} />
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaCloud className="w-8 h-8 text-purple-400" />
              Cloud & Deployment
            </h2>
            <InfiniteCarousel items={cloudTools} speed={32} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="p-12 bg-zinc-900 rounded-2xl border border-blue-500/30">
            <h2 className="text-3xl font-bold mb-4">Impressed by our tech stack?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss how we can use these technologies to bring your vision to life
            </p>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurExpertise
