import InfiniteCarousel from '../components/InfiniteCarousel';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact, 
  FaAndroid, FaApple, FaJava, FaAws, FaDigitalOcean, FaDocker, FaFigma,
  FaCode, FaMobileAlt, FaPalette, FaDatabase, FaCloud
} from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import { 
  SiFlutter, SiKotlin, SiDart, SiXcode, SiAdobexd, SiAdobephotoshop, 
  SiAdobeillustrator, SiSketch, SiInvision, SiMongodb, SiMysql, SiPostgresql, 
  SiFirebase, SiRedis, SiSqlite, SiMicrosoftazure, SiHeroku, SiVercel, SiNetlify 
} from 'react-icons/si';

const webDevelopmentTools = [
  { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12" style={{ color: '#E34F26' }} /> },
  { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12" style={{ color: '#1572B6' }} /> },
  { name: 'JavaScript', icon: <FaJs className="w-12 h-12" style={{ color: '#F7DF1E' }} /> },
  { name: 'Python', icon: <FaPython className="w-12 h-12" style={{ color: '#3776AB' }} /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" style={{ color: '#339933' }} /> },
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12" style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <FaGithub className="w-12 h-12" style={{ color: '#181717' }} /> },
  { name: 'NPM', icon: <FaNpm className="w-12 h-12" style={{ color: '#CB3837' }} /> },
  { name: 'Docker', icon: <FaDocker className="w-12 h-12" style={{ color: '#2496ED' }} /> },
  { name: 'Figma', icon: <FaFigma className="w-12 h-12" style={{ color: '#F24E1E' }} /> },
];

const appDevelopmentTools = [
  { name: 'React Native', icon: <FaReact className="w-12 h-12" style={{ color: '#61DAFB' }} /> },
  { name: 'Flutter', icon: <SiFlutter className="w-12 h-12" style={{ color: '#02569B' }} /> },
  { name: 'Swift', icon: <FaApple className="w-12 h-12" style={{ color: '#F05138' }} /> },
  { name: 'Kotlin', icon: <SiKotlin className="w-12 h-12" style={{ color: '#7F52FF' }} /> },
  { name: 'Java', icon: <FaJava className="w-12 h-12" style={{ color: '#007396' }} /> },
  { name: 'Dart', icon: <SiDart className="w-12 h-12" style={{ color: '#0175C2' }} /> },
  { name: 'Xcode', icon: <SiXcode className="w-12 h-12" style={{ color: '#147EFB' }} /> },
  { name: 'Android', icon: <FaAndroid className="w-12 h-12" style={{ color: '#3DDC84' }} /> },
];

const designTools = [
  { name: 'Figma', icon: <FaFigma className="w-12 h-12" style={{ color: '#F24E1E' }} /> },
  { name: 'Adobe XD', icon: <SiAdobexd className="w-12 h-12" style={{ color: '#FF61F6' }} /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="w-12 h-12" style={{ color: '#31A8FF' }} /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="w-12 h-12" style={{ color: '#FF9A00' }} /> },
  { name: 'Sketch', icon: <SiSketch className="w-12 h-12" style={{ color: '#F7B500' }} /> },
  { name: 'InVision', icon: <SiInvision className="w-12 h-12" style={{ color: '#FF3366' }} /> },
];

const databaseTools = [
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" style={{ color: '#47A248' }} /> },
  { name: 'MySQL', icon: <SiMysql className="w-12 h-12" style={{ color: '#4479A1' }} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12" style={{ color: '#336791' }} /> },
  { name: 'Firebase', icon: <SiFirebase className="w-12 h-12" style={{ color: '#FFCA28' }} /> },
  { name: 'Redis', icon: <SiRedis className="w-12 h-12" style={{ color: '#DC382D' }} /> },
  { name: 'SQLite', icon: <SiSqlite className="w-12 h-12" style={{ color: '#003B57' }} /> },
];

const cloudTools = [
  { name: 'AWS', icon: <FaAws className="w-12 h-12" style={{ color: '#FF9900' }} /> },
  { name: 'Azure', icon: <SiMicrosoftazure className="w-12 h-12" style={{ color: '#0089D6' }} /> },
  { name: 'Google Cloud', icon: <SiGooglecloud className="w-12 h-12" style={{ color: '#4285F4' }} /> },
  { name: 'Heroku', icon: <SiHeroku className="w-12 h-12" style={{ color: '#430098' }} /> },
  { name: 'Vercel', icon: <SiVercel className="w-12 h-12" style={{ color: '#000000' }} /> },
  { name: 'Netlify', icon: <SiNetlify className="w-12 h-12" style={{ color: '#00C7B7' }} /> },
  { name: 'DigitalOcean', icon: <FaDigitalOcean className="w-12 h-12" style={{ color: '#0080FF' }} /> },
];

const OurExpertise = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="expertise" className="min-h-screen w-full py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-purple-400">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simplifying Technology, Delivering Excellence
          </p>
        </div>

        {/* Categories with Carousels */}
        <div className="w-full space-y-16">
          {/* Web Development */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 pl-6">
              <FaCode className="w-8 h-8 text-purple-400" />
              Web Development
            </h2>
            <InfiniteCarousel items={webDevelopmentTools} speed={30} />
          </div>

          {/* App Development */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 pl-6">
              <FaMobileAlt className="w-8 h-8 text-purple-400" />
              Mobile App Development
            </h2>
            <InfiniteCarousel items={appDevelopmentTools} speed={28} />
          </div>

          {/* Design Tools */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 pl-6">
              <FaPalette className="w-8 h-8 text-purple-400" />
              Design & UI/UX
            </h2>
            <InfiniteCarousel items={designTools} speed={26} />
          </div>

          {/* Database */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 pl-6">
              <FaDatabase className="w-8 h-8 text-purple-400" />
              Database Technologies
            </h2>
            <InfiniteCarousel items={databaseTools} speed={24} />
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 pl-6">
              <FaCloud className="w-8 h-8 text-purple-400" />
              Cloud & Deployment
            </h2>
            <InfiniteCarousel items={cloudTools} speed={32} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center w-full">
          <div className="w-full max-w-4xl mx-auto p-8 sm:p-12 bg-zinc-900 rounded-2xl border border-blue-500/30">
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
