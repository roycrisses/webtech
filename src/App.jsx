import React from 'react';
import Dock from './components/Dock';
import Home from './sections/Home';
import Services from './sections/Services';
import OurExpertise from './sections/OurExpertise';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import SiteBackground from './components/SiteBackground';
import CustomCursor from './components/CustomCursor';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          color: 'white',
          padding: '20px',
          fontFamily: 'Arial',
          backgroundColor: '#1a1a1a',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>⚠️ Something went wrong</h1>
          <p style={{ marginBottom: '20px' }}>Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container w-full max-w-none relative z-10">
        <CustomCursor />
        <SiteBackground />
        <section id="home" data-section="home" className="section min-h-screen w-full">
          <Home />
        </section>
        <section id="services" data-section="services" className="section min-h-screen w-full">
          <Services />
        </section>
        <section id="expertise" data-section="expertise" className="section min-h-screen w-full">
          <OurExpertise />
        </section>
        <section id="contact" data-section="contact" className="section min-h-screen w-full">
          <Contact />
        </section>
        <Footer />
        <Dock />
      </div>
    </ErrorBoundary>
  );
}

export default App;
