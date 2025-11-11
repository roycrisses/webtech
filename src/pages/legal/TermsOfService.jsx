import React from 'react';

const TermsOfService = () => (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Easy Way Technology. These Terms of Service ("Terms") govern your access to and use of our website and services (collectively, the "Services").
            </p>
            <p className="text-gray-300">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
            <p className="text-gray-300 mb-4">
              You may use our Services only in compliance with these Terms and all applicable laws. When using our Services, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Upload or transmit any malicious code, viruses, or harmful content</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content included in or made available through our Services, such as text, graphics, logos, and software, is the property of Easy Way Technology or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-300 mb-4">
              Our Services are provided "as is" without any warranties, express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>The Services will be uninterrupted or error-free</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
              <li>The quality of any products, services, or information obtained through the Services will meet your expectations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, Easy Way Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Changes to These Terms</h2>
            <p className="text-gray-300 mb-4">
              We may modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-purple-400 mt-2">
              Email: legal@easywaytech.com<br />
              Phone: +977 9700804395
            </p>
          </section>
        </div>
      </div>
    </div>
);

export default TermsOfService;
