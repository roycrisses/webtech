import React from 'react';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Test Page</h1>
        <p className="text-gray-400">If you can see this, the routing is working!</p>
        <a 
          href="#/" 
          className="mt-6 inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default TestPage;
