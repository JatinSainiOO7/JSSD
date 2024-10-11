// import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path as needed

// Get the root element
const container = document.getElementById('root');

// Ensure the container exists before trying to create the root
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error('Target container not found.');
}