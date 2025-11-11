import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Get the root element
const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

// Show loading state
document.getElementById('loading').style.display = 'flex';

// Render the app
const renderApp = () => {
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Hide loading state when app is mounted
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
    
  } catch (error) {
    console.error('Error rendering the app:', error);
    
    // Show error in the UI
    if (container) {
      container.innerHTML = `
        <div style="
          color: white;
          padding: 20px;
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        ">
          <h1 style="color: #ef4444; margin-bottom: 20px;">⚠️ Application Error</h1>
          <p>An error occurred while loading the application. Please try the following:</p>
          <ol style="margin: 10px 0 20px 20px;">
            <li>Refresh the page</li>
            <li>Clear your browser cache</li>
            <li>Try a different browser</li>
          </ol>
          <div style="
            background: #1e1e1e;
            padding: 15px;
            border-radius: 4px;
            font-family: monospace;
            white-space: pre-wrap;
            word-break: break-word;
            margin-top: 20px;
          ">
            ${error.toString()}
            ${error.stack ? '\n\n' + error.stack : ''}
          </div>
        </div>
      `;
    }
  }
};

// Start rendering the app
renderApp();
