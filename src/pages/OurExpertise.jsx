import InfiniteCarousel from '../components/InfiniteCarousel'

const webDevelopmentTools = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'Ruby', icon: '💎' },
  { name: 'Git', icon: '📝' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Git Bash', icon: '⌨️' },
  { name: 'NPM', icon: '📦' },
  { name: 'Figma', icon: '🎯' },
]

const appDevelopmentTools = [
  { name: 'React Native', icon: '⚛️' },
  { name: 'Flutter', icon: '🦋' },
  { name: 'Swift', icon: '🍎' },
  { name: 'Kotlin', icon: '🤖' },
  { name: 'Java', icon: '☕' },
  { name: 'Dart', icon: '🎯' },
  { name: 'Xcode', icon: '🔨' },
  { name: 'Android Studio', icon: '🤖' },
]

const designTools = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Adobe XD', icon: '📐' },
  { name: 'Photoshop', icon: '🖼️' },
  { name: 'Illustrator', icon: '✏️' },
  { name: 'Sketch', icon: '💫' },
  { name: 'InVision', icon: '👁️' },
]

const databaseTools = [
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Redis', icon: '⚡' },
  { name: 'SQLite', icon: '📊' },
]

const cloudTools = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '🌥️' },
  { name: 'Google Cloud', icon: '🌐' },
  { name: 'Heroku', icon: '💜' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Netlify', icon: '🌊' },
  { name: 'DigitalOcean', icon: '🌊' },
]

const OurExpertise = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies and tools to deliver exceptional solutions for your business
          </p>
        </div>

        {/* Categories with Carousels */}
        <div className="space-y-16">
          {/* Web Development */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-purple-400">🌐</span> Web Development
            </h2>
            <InfiniteCarousel items={webDevelopmentTools} speed={30} />
          </div>

          {/* App Development */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-purple-400">📱</span> Mobile App Development
            </h2>
            <InfiniteCarousel items={appDevelopmentTools} speed={28} />
          </div>

          {/* Design Tools */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-purple-400">🎨</span> Design & UI/UX
            </h2>
            <InfiniteCarousel items={designTools} speed={26} />
          </div>

          {/* Database */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-purple-400">💾</span> Database Technologies
            </h2>
            <InfiniteCarousel items={databaseTools} speed={24} />
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-purple-400">☁️</span> Cloud & Deployment
            </h2>
            <InfiniteCarousel items={cloudTools} speed={32} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="p-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Impressed by our tech stack?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can use these technologies to bring your vision to life
            </p>
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurExpertise
